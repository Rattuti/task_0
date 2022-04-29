/*function loadAlert() {
  alert("ページが読み込まれました");
};

window.onload = loadAlert;
*/

function confirmMessage() {
  if(confirm("ページが読み込まれましたか？")) { //confirm()の戻り値がtrueだった時
    alert("次にいきます");
  } else {
    alert("キャンセルされました"); //confirm()の戻り値がfalseだった時
  }
};

window.onload = confirmMessage;