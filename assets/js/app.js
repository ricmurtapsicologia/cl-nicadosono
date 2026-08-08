(function(){
 const BOOK='tcci_clinicadosono_v1';
 const path=location.pathname;
 function saveLast(){
   const el=document.querySelector('[data-chapter]');
   if(!el) return;
   const n=Number(el.dataset.chapter); const title=el.dataset.title;
   localStorage.setItem(BOOK+'_last', JSON.stringify({n,title,url:path}));
 }
 function updateProgress(){
   const bar=document.querySelector('.progress i'); if(!bar)return;
   const d=document.documentElement; const max=d.scrollHeight-d.clientHeight;
   const pct=max>0?(d.scrollTop/max)*100:0; bar.style.width=pct+'%';
 }
 window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress(); saveLast();
 const menuBtn=document.getElementById('menuBtn'), drawer=document.getElementById('drawer');
 if(menuBtn&&drawer){menuBtn.onclick=()=>drawer.classList.add('open'); drawer.querySelector('.backdrop').onclick=()=>drawer.classList.remove('open');}
 const continueBtn=document.getElementById('continueBtn');
 if(continueBtn){
   try{const last=JSON.parse(localStorage.getItem(BOOK+'_last')||'null'); if(last&&last.url){continueBtn.href=last.url;continueBtn.textContent='Continuar: capítulo '+last.n;continueBtn.classList.remove('hidden');}}catch(e){}
 }
 const input=document.getElementById('bookSearch'), results=document.getElementById('searchResults');
 if(input&&results){
   let items=[]; try{items=JSON.parse(document.getElementById('searchData').textContent)}catch(e){}
   input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();results.innerHTML='';if(q.length<2)return;const found=items.filter(x=>(x.title+' '+x.keywords).toLowerCase().includes(q)).slice(0,12);if(!found.length){results.innerHTML='<div class="notice">Nenhum capítulo encontrado.</div>';return;}for(const x of found){const a=document.createElement('a');a.className='search-result';a.href=x.url;a.innerHTML='<strong>Capítulo '+x.num+' · '+x.title+'</strong><small>'+x.part+' · '+x.mins+' min</small>';results.appendChild(a);}})
 }
})();
