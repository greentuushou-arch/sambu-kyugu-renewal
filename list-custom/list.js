/* 商品一覧のサムネイル（simg：120px）を元画像（1500px）に差し替える
   大きく表示してもぼやけないようにするため。画面に近づいてから読み込む */
document.addEventListener('DOMContentLoaded', function () {
  var imgs = document.querySelectorAll('table.itemList .item img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.setAttribute('loading', 'lazy');
    img.src = img.src.replace('/pic-labo/simg/', '/pic-labo/');
  }
});
