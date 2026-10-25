/* 山武弓具店 トップページ JS（top.js）：スマホのメニュー開閉のみ。</body>直前で読み込む */
(function(){
  var root=document.getElementById('top'), btn=root.querySelector('.menu-btn');
  btn.addEventListener('click',function(){
    var open=root.classList.toggle('is-open');
    btn.setAttribute('aria-expanded',open);
    document.body.style.overflow=open?'hidden':'';
  });
})();
