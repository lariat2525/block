window.onload = function () {

    var canvas = document.getElementById('canvas');
 
    var context = canvas.getContext('2d');

      context.beginPath() // パスを定義
      context.moveTo(150,200);// 開始点
      context.lineTo(260,125); // 線を結ぶポイント
      context.lineTo(570,125);
      context.strokeStyle = "black" ;
      context.lineWidth = 5 ;
      context.stroke();  
      // 塗りつぶし
      context.beginPath() // パスを定義
      context.moveTo(150,415);// 開始点
      context.lineTo(270,330); // 線を結ぶポイント
      context.lineTo(520,330);
      context.strokeStyle = "black" ;
      context.lineWidth = 5 ;
      context.stroke();

      context.beginPath() // パスを定義
      context.moveTo(150,490);// 開始点
      context.lineTo(270,530); // 線を結ぶポイント
      context.lineTo(465,530);
      context.strokeStyle = "black" ;
      context.lineWidth = 5 ;
      context.stroke();  
    }