from PIL import Image, ImageFilter
import numpy as np, math, sys
from scipy import ndimage as nd
S=sys.argv[1]
im=np.asarray(Image.open(f'{S}/scan/p-1.png').convert('RGB')).astype(float)
L=0.299*im[...,0]+0.587*im[...,1]+0.114*im[...,2]
blue=im[...,2]-(im[...,0]+im[...,1])/2
score=np.clip((235-L)/60,0,1)*np.clip((blue+5)/30,0,1)
mask=Image.fromarray(((score>0.35)*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(1.1))
M=np.clip((np.asarray(mask).astype(float)/255-0.15)/0.6,0,1)
M[:, :50]=0; M[:, 2440:]=0
def slope(a):
    ys,xs=np.nonzero(a>0.5); bins=np.linspace(xs.min(),xs.max(),30); cx=[];cy=[]
    for b in range(len(bins)-1):
        sel=(xs>=bins[b])&(xs<bins[b+1])
        if sel.sum()>30: cx.append(xs[sel].mean()); cy.append(np.percentile(ys[sel],70))
    return math.degrees(math.atan(np.polyfit(cx,cy,1)[0]))
def best_rot(img):
    best=None
    for ang in np.arange(-6,6.01,0.25):
        r=np.asarray(img.rotate(ang,resample=Image.BILINEAR,expand=True)).astype(float)
        p=(r>128).sum(1); v=np.var(p)
        if best is None or v>best[0]: best=(v,ang)
    return best[1]
def split(img):
    a=np.asarray(img).astype(float)/255; p=(a>0.5).sum(1).astype(float); p=np.convolve(p,np.ones(15)/15,'same')
    thr=p.max()*0.04; bands=[];on=False
    for i,v in enumerate(p):
        if v>thr and not on: s=i;on=True
        if v<=thr and on:
            if i-s>40: bands.append((s,i))
            on=False
    if on: bands.append((s,len(p)))
    return bands
def build(y0,y1,name,center_first):
    reg=Image.fromarray((M[y0:y1]*255).astype(np.uint8))
    g=best_rot(reg); reg=reg.rotate(g,resample=Image.BICUBIC,expand=True,fillcolor=0)
    bands=split(reg); print(name,'global',g,'bands',bands)
    arr=np.asarray(reg).astype(float)/255
    # assign components to bands by centroid
    lab,k=nd.label(nd.binary_dilation(arr>0.3,iterations=4)); objs=nd.find_objects(lab)
    cents=[(a+b)/2 for a,b in bands]; per=[np.zeros_like(arr) for _ in bands]
    for i,sl in enumerate(objs,1):
        comp=(lab[sl]==i); ys,xs=np.nonzero(comp); cy=sl[0].start+ys.mean()
        j=int(np.argmin([abs(cy-c) for c in cents])); sub=per[j][sl]; sub[comp]=np.maximum(sub[comp],arr[sl][comp])
    pieces=[]
    for a in per:
        img=Image.fromarray((a*255).astype(np.uint8)); img=img.crop(img.getbbox())
        ang=best_rot(img); img=img.rotate(ang,resample=Image.BICUBIC,expand=True,fillcolor=0); img=img.crop(img.getbbox()); pieces.append(img)
    gap=60; W=max(p.width for p in pieces); H=sum(p.height for p in pieces)+gap*(len(pieces)-1)+40
    can=Image.new('L',(W,H),0); y=0
    for i,p in enumerate(pieces):
        x=(W-p.width)//2 if (center_first and i==0) else 0
        can.paste(p,(x,y)); y+=p.height+(gap+40 if center_first and i==0 else gap)
    a=np.asarray(can); out=np.zeros(a.shape+(4,),dtype=np.uint8); out[...,0]=28; out[...,1]=40; out[...,2]=140; out[...,3]=a
    o=Image.fromarray(out,'RGBA'); o=o.crop(o.getbbox()); o.thumbnail((1200,1200),Image.LANCZOS); o.save(f'ebook/{name}.png',optimize=True)
    bg=Image.new('RGBA',o.size,(255,255,255,255)); bg.alpha_composite(o); bg.convert('RGB').save(f'{S}/{name}-prev.png'); print(o.size)
build(30,1045,'gnothi-1',True)
build(2150,2960,'gnothi-2',False)
