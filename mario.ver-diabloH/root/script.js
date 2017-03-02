var lyanImg = new Image();
lyanImg.src = "./img/lyan.png";
var backImg = new Image();
backImg.src = "./img/background.png";
var wImg = new Image();
wImg.src = "./img/wall.jpg";


var lyan = {
  life : 99
, img : lyanImg
, lyanX : 50
, lyanY : 370
, width : 50
, height : 60
, jumpControl : true
, rightMoving : true
, leftMoving : true
, jumpOn : false
, jump : function(){
    if(this.jumpControl){
      this.jumpOn=true;
      this.lyanY-=5;
    }
  }
}



var walls = [];

function MakeWall(length, ptrn, x, y){
//var baseLength = length;
  var chk = length;
  var patterns = ptrn; // true 일때 세로 false 일때 가로
  var baseSize = 35;  // 벽돌의 width, height의 기본 값
  var baseX = x;
  var baseY = y;

  var sizeXplus = 0;
  var sizeYplus = 0;

  while(chk>0){
    var wall = {
      pattern : patterns,               // true = 세로,  false = 가로
      leftX   : baseX+sizeXplus,        // 좌측상단의 x축
      rightX  : baseX+baseSize+sizeXplus, // 우측 상단 x축
      downY   : baseY+sizeYplus,        // 상단 y축        100
      onY     : baseY+sizeYplus-baseSize, // 하단 y축    65
      dest    : false,
      img     : wImg        // 기본 벽돌 이미지

      //  size    : baseSize,   // 벽돌 기본 크기
      //  length  : baseLength, // 벽돌을 몇칸 생성하는가
      //  rightX  : baseX+(ptrn?baseSize:baseSize*length), // 우측 상단 x축
    }

    if(ptrn){
      sizeYplus -= 35;
    }else{
      sizeXplus += 35;
    }
    walls.push(wall);
    chk--;
  } // while END
}


//MakeWall(10,false,300,200);

MakeWall(5,false,450,400);
MakeWall(5,true,250,300);


function wall_walking(){
  for(var i=0; i<walls.length; i++){
      if( (lyan.lyanX >= walls[i].leftX-(lyan.width/2) && lyan.lyanX+(lyan.width/2) <= walls[i].rightX)
       && (lyan.lyanY+lyan.height >= walls[i].onY && lyan.lyanY+lyan.height <= walls[i].onY+5 ) ){
      lyan.jumpOn = false;
      lyan.jumpControl = true;
    }else if(lyan.lyanX+lyan.width > walls[i].leftX &&
      lyan.lyanY >= walls[i].onY &&
      lyan.lyanY <= walls[i].downY){
      lyan.rightMoving=false;
      console.log("오른쪽으로 갈 수 없음");
      return false;
    }else{
      lyan.rightMoving=true;
    }


  }
}
// &&Iscollision(walls[i],lyan)
// function Iscollision(wall,lyan){
//   return wall.leftX<lyan.lyanX+lyan.width &&
//   lyan.lyanX<wall.rightX &&
//   wall.onY&&lyan.lyanY+lyan.height&&
//   wall.downY&&lyan.lyanY;
// }


function realtime(){
    jumpDown();
    wall_walking();
    update();
    rsetJump();
	  draw_background();
    draw_wall();
		draw_player();

}




function jumpDown(){
  if(lyan.jumpOn == true){
    if(lyan.lyanY <= 360){
      lyan.lyanY +=3;
      console.log("조정중");
    }
  }
}

function rsetJump(){
  if(lyan.lyanY <= 360){
    lyan.jumpControl = true;
  }
}

function draw_wall() {
  for(var i=0; i<walls.length; i++){
    ctx.beginPath();
    ctx.drawImage(walls[i].img, walls[i].leftX, walls[i].onY, 35,35);
    ctx.stroke();
  }
}


function draw_background() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 깔끔한 상태로 유지보수
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

      if(lyan.rightMoving){
        if (keyPressed[39]){
          lyan.lyanX += 5;	press = true;
        } // 우
      }

      if(lyan.leftMoving){
        if (keyPressed[37]){
          lyan.lyanX -= 5;	press = true;
        } // 좌
      }

      if (keyPressed[32]){
        lyan.jump();
      }else if(lyan.lyanY>=481){
        lyan.jumpOn = false;
      } // 점프
}
