"""Βγάζει το κείμενο του βιβλίου σε Markdown για ανάγνωση: python3 ebook/keimeno.py"""
import re, html
s = open('ebook/apotyximenos.html').read()
b = s[s.index('<body>'):s.index('</body>')]
b = re.sub(r'<img[^>]*>', '', b)
b = re.sub(r'<p class="chap-num">(.*?)</p>', lambda m: '\n### ' + re.sub(r'<[^>]+>', '', m.group(1)) + '\n', b, flags=re.S)
b = re.sub(r'<section[^>]*>', '\n\n---\n\n', b)
def quote(m):
    t = re.sub(r'<[^>]+>', '', m.group(2).replace('<br>', '\n'))
    return '\n' + '\n'.join('> **' + l.strip() + '**  ' for l in t.split('\n') if l.strip()) + '\n\n'
b = re.sub(r'<p class="(big|verse)">(.*?)</p>', quote, b, flags=re.S)
b = re.sub(r'<h1[^>]*>(.*?)</h1>', lambda m: '# ' + re.sub(r'<[^>]+>', '', m.group(1)) + '\n\n', b, flags=re.S)
b = re.sub(r'<h2[^>]*>(.*?)</h2>', lambda m: '## ' + re.sub(r'<[^>]+>', '', m.group(1).replace('<br>', ' ')) + '\n\n', b, flags=re.S)
b = re.sub(r'<h3[^>]*>(.*?)</h3>', r'#### \1\n\n', b, flags=re.S)
b = re.sub(r'<small>(.*?)</small>', r'\n\1', b, flags=re.S)
b = re.sub(r'<p class="tag">(.*?)</p>', r'**\1:** ', b, flags=re.S)
b = re.sub(r'<div class="day"><span class="n">(\d)</span><p>(.*?)</p></div>', r'\1. \2\n', b, flags=re.S)
b = re.sub(r'<br\s*/?>', '  \n', b)
b = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', b, flags=re.S)
b = re.sub(r'<figure>.*?</figure>', '', b, flags=re.S)
b = re.sub(r'<(b|strong)>(.*?)</\1>', r'**\2**', b, flags=re.S)
b = re.sub(r'<(em|i)>(.*?)</\1>', r'*\2*', b, flags=re.S)
b = re.sub(r'<a href="([^"]+)">(.*?)</a>', r'\2', b, flags=re.S)
b = re.sub(r'<[^>]+>', '', b)
b = html.unescape(b)
b = '\n'.join(l.strip() + ('  ' if l.endswith('  ') else '') for l in b.split('\n'))
b = re.sub(r'\n{3,}', '\n\n', b)
b = re.sub(r'(---\s*)+---', '---', b).strip()
open('ebook/apotyximenos-keimeno.md', 'w').write('# Αποτυχημένος · Τελικό κείμενο\n\n' + b + '\n')
