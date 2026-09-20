function renderQB(){
  const toc = document.getElementById('qbToc');
  const box = document.getElementById('qbContainer');
  if(!toc||!box) return;
  toc.innerHTML = '';
  box.innerHTML = '';
  exerciseGroups.forEach(g=>{
    const a=document.createElement('a');
    a.href='#'+g.id;
    a.innerHTML='<span class="ex-no">'+g.label+'</span><span class="ex-topic">'+g.chapter+'<span class="bn">'+(g.chapterBn||'')+'</span></span>';
    toc.appendChild(a);
    const eg=document.createElement('div');
    eg.className='exercise-group'; eg.id=g.id;
    let h='<div class="eg-head"><div class="ex-label">'+g.label+'</div><h3>'+g.chapter+'</h3><div class="bn">'+(g.chapterBn||'')+'</div></div>';
    (g.parts||[]).forEach((p,pi)=>{
      const n=(p.items||[]).length;
      h+='<details class="part"'+(pi===0?' open':'')+'><summary><span class="plabel">'+p.label+'</span><span class="count-tag">'+n+' Q</span></summary>';
      h+='<div class="part-body"><p class="instr">'+(p.instr||'')+'</p><ul class="qitem-list">';
      (p.items||[]).forEach((it,ii)=>{
        const id=g.id+'-'+pi+'-'+ii;
        h+='<li class="qitem"><div class="qtext">'+it.q+'</div>';
        h+='<button type="button" class="ans-toggle" data-id="'+id+'">Answer</button>';
        h+='<div class="ans-panel" id="ans-'+id+'" style="display:none"><div class="ans-en">'+it.a+'</div></div></li>';
      });
      h+='</ul></div></details>';
    });
    eg.innerHTML=h; box.appendChild(eg);
  });
  box.querySelectorAll('.ans-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const panel=document.getElementById('ans-'+btn.dataset.id);
      if(!panel) return;
      const open=panel.style.display!=='block';
      panel.style.display=open?'block':'none';
      btn.classList.toggle('open',open);
      btn.textContent=open?'Hide':'Answer';
    });
  });
}
renderQB();
