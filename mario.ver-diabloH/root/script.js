var lyanImg = new Image();
lyanImg.src = "./img/lyan.png";
var backImg = new Image();
backImg.src = "./img/background.png";



var lyan = {
  life : 99
, img : lyanImg
, lyanX : 50
, lyanY : 331
, width : 70
, height : 90
, jumpControl : true
, jumpOn : false
, jump : function(){
    if(this.jumpControl){
      this.jumpOn=true;
      this.lyanY-=8;
    }
  }
}


var map = {
   wall1 : [370,540,284] // 가로 가로 세로
,  wall2 : [438,473,149]
,  trap1 : [165,250,106]
}





function wall(){
  if( (lyan.lyanX >= map.wall1[0]-(lyan.width/2) && lyan.lyanX <= map.wall1[1]-(lyan.width/2) ) && (lyan.lyanY <= map.wall1[2]-lyan.height && lyan.lyanY >= map.wall1[2]-lyan.height-5) ){
    lyan.jumpOn = false;
  }else if( (lyan.lyanX >= map.wall2[0]-(lyan.width/2) && lyan.lyanX <= map.wall2[1]-(lyan.width/2) ) && (lyan.lyanY <= map.wall2[2]-lyan.height && lyan.lyanY >= map.wall2[2]-lyan.height-5) ){
    lyan.jumpOn = false;
  }else{
    lyan.jumpOn = true;
  }
}

function wallDest(){

  if( (lyan.lyanX >= map.wall1[0]-(lyan.width/2) && lyan.lyanX <= map.wall1[1]-(lyan.width/2) ) && lyan.lyanY <= map.wall1[2]+35 ){
    lyan.jumpControl = false;
    console.log("충돌");
  }else if( (lyan.lyanX >= map.wall2[0]-(lyan.width/2) && lyan.lyanX <= map.wall2[1]-(lyan.width/2) ) && lyan.lyanY <= map.wall2[2]+35   ){
    lyan.jumpControl = false;
    console.log("충돌");
  }
}

// function trap(){
//   if( (lyan.lyanX >= map.trap1[0]-(lyan.width/2) && lyan.lyanX <= map.trap1[1]-(lyan.width/2) ) &&  ( lyan.lyanY >= 315 && lyan.lyanY <= 320 ) ){
//
//
//
//   }
// }


function realtime(){
    rsetJump();
    wallDest();
    wall();
    jumpDown();
    update();
		draw_background();
		draw_player();

}




function jumpDown(){
  if(lyan.jumpOn == true){
    if(lyan.lyanY <= 332){
      lyan.lyanY +=3;
      console.log("조정중");
    }
  }
}

function rsetJump(){
  if(lyan.lyanY <= 332){
    lyan.jumpControl = true;
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
	ctx.drawImage(lyanImg, lyan.lyanX, lyan.lyanY,lyan.width,lyan.height);
	ctx.stroke();
}

function update() {
      var press = false;
      if (keyPressed[39]){
        lyan.lyanX += 5;	press = true;
      } // 좌

      if (keyPressed[37]){
        lyan.lyanX -= 5;	press = true;
      } // 우

      if (keyPressed[32]){
        lyan.jump();
      }else if(lyan.lyanY>=331){
        lyan.jumpOn = false;
      } // 점프
}
