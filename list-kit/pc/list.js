/* 山武弓具店 商品一覧（PC版）
   一覧のサムネイル（simg：120px）を元画像（1500px）に差し替える
   大きく表示してもぼやけないようにするため。画面に近づいてから読み込む
   ヘッダー・フッターのどちらに置いても動くようにしている */
(function () {
  function swapImages() {
    var imgs = document.querySelectorAll('table.itemList .item img');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('loading', 'lazy');
      imgs[i].src = imgs[i].src.replace('/pic-labo/simg/', '/pic-labo/');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', swapImages);
  } else {
    swapImages();
  }
})();
