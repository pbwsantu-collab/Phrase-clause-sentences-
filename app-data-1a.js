const app = document.getElementById('app');
const langBtn = document.getElementById('langToggle');
function applyLang(lang){
  app.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-en]').forEach(el=>{
    const en = el.getAttribute('data-en'), bn = el.getAttribute('data-bn');
    if(en === null && bn === null) return;
    if(el.classList.contains('bn') || el.tagName==='SMALL' || el.tagName==='SPAN' || el.tagName==='DIV'){
      const text = lang==='bn' ? (bn||en) : en;
      if(text) el.textContent = text;
    }
  });
  langBtn.textContent = lang==='bn' ? 'English' : 'বাংলা';
}
let currentLang = 'en';
langBtn.addEventListener('click', ()=>{
  currentLang = currentLang==='en' ? 'bn' : 'en';
  applyLang(currentLang);
});
applyLang('en');

document.querySelectorAll('nav.chapters button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('nav.chapters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('main > .chapter').forEach(s=>s.classList.remove('active'));
    document.getElementById(btn.dataset.target).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{ toTop.classList.toggle('show', window.scrollY>400); });
toTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

const exerciseGroups = [
{"id":"ex52","label":"Exercise 52","chapter":"Ch. XXXIII — Phrases","chapterBn":"অধ্যায় ৩৩ — বাক্যাংশ","parts":[
{"label":"(a) Noun Phrases","labelBn":"বিশেষ্য বাক্যাংশ","instr":"Pick out the Noun Phrases:","explainBn":"যে Phrase Noun-এর কাজ করে।","items":[
{"q":"To err is human; to forgive, divine.","a":"Noun Phrases: \"To err\"; \"to forgive\"."},
{"q":"I like to read.","a":"Noun Phrase: \"to read\" — object of \"like\"."},
{"q":"He enjoys playing football.","a":"Noun Phrase: \"playing football\" — object of \"enjoys\"."},
{"q":"Walking in the sun is sometimes injurious to health.","a":"Noun Phrase: \"Walking in the sun\" — subject of \"is\"."},
{"q":"He loves walking alone by the sea-side.","a":"Noun Phrase: \"walking alone by the sea-side\" — object of \"loves\"."}
]},
{"label":"(b) Adjective Phrases","labelBn":"বিশেষণ বাক্যাংশ","instr":"Pick out the Adjective Phrases:","explainBn":"যে Phrase Noun-কে বিশেষিত করে।","items":[
{"q":"A man of sense can never do so.","a":"Adjective Phrase: \"of sense\" — qualifies \"man\"."},
{"q":"The book on the table is mine.","a":"Adjective Phrase: \"on the table\" — qualifies \"book\"."},
{"q":"A friend in need is a friend indeed.","a":"Adjective Phrase: \"in need\" — qualifies \"friend\"."},
{"q":"This is a watch made in Switzerland.","a":"Adjective Phrase: \"made in Switzerland\" — qualifies \"watch\"."}
]},
{"label":"(e) Adverbial Phrases","labelBn":"ক্রিয়া-বিশেষণ বাক্যাংশ","instr":"Pick out the Adverbial Phrases:","explainBn":"যে Phrase ক্রিয়াকে বিশেষিত করে।","items":[
{"q":"I stopped in front of his house.","a":"Adverbial Phrase: \"in front of his house\"."},
{"q":"They ran at a great speed.","a":"Adverbial Phrase: \"at a great speed\"."},
{"q":"I shall do it at any cost.","a":"Adverbial Phrase: \"at any cost\"."}
]},
{"label":"(h) Prepositional Phrases","labelBn":"সম্বন্ধসূচক বাক্যাংশ","instr":"Pick out the Prepositional Phrases:","explainBn":"একাধিক শব্দ মিলে Preposition-এর কাজ করে।","items":[
{"q":"He couldn't come on account of illness.","a":"Prepositional Phrase: \"on account of\"."},
{"q":"I did it in accordance with your order.","a":"Prepositional Phrase: \"in accordance with\"."},
{"q":"I did my best for the sake of my friend.","a":"Prepositional Phrase: \"for the sake of\"."}
]}
]},
{"id":"ex53","label":"Exercise 53","chapter":"Ch. XXXIV — Noun Clauses","chapterBn":"অধ্যায় ৩৪ — Noun Clause","parts":[
{"label":"(a) Identify Noun Clauses","labelBn":"Noun Clause চিহ্নিত করো","instr":"Pick out the Noun Clauses and parse them:","explainBn":"Noun Clause Subject/Object/Complement হিসেবে কাজ করে।","items":[
{"q":"I know that you are right.","a":"Noun Clause: \"that you are right\" — object of \"know\"."},
{"q":"When he will go is not known.","a":"Noun Clause: \"When he will go\" — subject of \"is not known\"."},
{"q":"It is clear that he did it.","a":"Noun Clause: \"that he did it\" — in apposition to \"it\"."},
{"q":"Why he said so is a mystery.","a":"Noun Clause: \"Why he said so\" — subject of \"is\"."},
{"q":"The girl asked me if I had seen her father.","a":"Noun Clause: \"if I had seen her father\" — object of \"asked\"."}
]}
]},
{"id":"ex54","label":"Exercise 54","chapter":"Ch. XXXIV — Adjective Clauses","chapterBn":"অধ্যায় ৩৪ — Adjective Clause","parts":[
{"label":"(a) Identify Adjective Clauses","labelBn":"Adjective Clause চিহ্নিত করো","instr":"Pick out the Adjective Clauses:","explainBn":"Adjective Clause Noun-কে বিশেষিত করে।","items":[
{"q":"The book that you gave me is lost.","a":"Adjective Clause: \"that you gave me\" — qualifies \"book\"."},
{"q":"I know the day when he will come.","a":"Adjective Clause: \"when he will come\" — qualifies \"day\"."},
{"q":"This is the house I bought.","a":"Adjective Clause: \"(which) I bought\" — qualifies \"house\"."},
{"q":"He is the best boy that I have ever seen.","a":"Adjective Clause: \"that I have ever seen\" — qualifies \"boy\"."}
]},
{"label":"(d) Restrictive or Continuative?","labelBn":"সীমাবদ্ধকারী নাকি বর্ণনামূলক?","instr":"State whether restrictive or continuative:","explainBn":"Restrictive = defines; Continuative = extra info.","items":[
{"q":"I have seen the boy who stood first in the examination.","a":"Restrictive — defines which boy."},
{"q":"My brother, who has seen you, will pardon you.","a":"Continuative (= \"and he\")."},
{"q":"I went to the boy who had promised to help me.","a":"Restrictive."},
{"q":"I went to the boy, who promised to help me.","a":"Continuative (= \"and he\")."}
]}
]}
];
