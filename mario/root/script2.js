var lyanImg = new Image();
lyanImg.src = "./img/lyan.png";
var backImg = new Image();
backImg.src = "./img/background.png";


var lyan = {
  life : 99
, img : lyanImg
, lyanX : 50
, lyanY : 331
, jump : function(){
    this.lyanY-=5;
  }
}


// var map = {
//   wall1 : [370,540,284]
// }
//
// function wall(){
//   if(map.wall1[2]>=lyan.lyan)
//
// }


function realtime(){
    jumpDown();
    update();
		draw_background();
		draw_player();

}


function jumpDown(){
  if(lyan.lyanY <= 332){
      lyan.lyanY +=3;
      console.log("조정중");
  }
}




function draw_background() {
	//ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 깔끔한 상태로 유지보수
	ctx.beginPath();
	ctx.drawImage(backImg, 0, 0,820,482);
	ctx.stroke();
}

function draw_player() {
	ctx.beginPath();
	ctx.drawImage(lyanImg, lyan.lyanX, lyan.lyanY,70,90);
	ctx.stroke();
}

function update() {
      var press = false;
      if (keyPressed[39]){
        lyan.lyanX += 3;	press = true;
      } // 좌

      if (keyPressed[37]){
        lyan.lyanX -= 3;	press = true;
      } // 우

      if (keyPressed[32]){
        lyan.jump();
      } // 점프
}
