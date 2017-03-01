//utill.js경로 realtime();
//이미지 생성 부분
var mapImg = new Image();
mapImg.src = "../img/map03.png";


//객체 생성 부분
function mapobj(){
  this.x = 0;
  this.y = 0;
  this.width = 1410;
  this.height = 500;
}




//canvas draw 부분
//03맵
function drawMap() {
    map =new mapobj();

    //map draw(이미지,x,y,가로,세로)
    ctx.beginPath();
    ctx.drawImage(mapImg,map.x,map.y,map.width,map.height);
    ctx.stroke();
}


//utill.js경로 realtime();
