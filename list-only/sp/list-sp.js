/* 山武弓具店 商品一覧（スマホ版）
   一覧のサムネイル（mimg：180px）を元画像（1500px）に差し替える
   大きく表示してもぼやけないようにするため。画面に近づいてから読み込む
   ヘッダー・フッターのどちらに置いても動くようにしている */
(function () {
  function swapImages() {
    var imgs = document.querySelectorAll('ul.itemlist .li_l img');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('loading', 'lazy');
      imgs[i].src = imgs[i].src.replace('/pic-labo/mimg/', '/pic-labo/');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', swapImages);
  } else {
    swapImages();
  }
})();
