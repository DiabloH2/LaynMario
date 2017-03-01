/*
    @utill.js경로 realtime();
    @이미지 생성  부분
*/
//라이언 이미지
var lyanImg = new Image();
lyanImg.src = "../img/lyan1.png";

//벽 이미지
var wallImg = new Image();
wallImg.src = "../img/wall.png"



/*
    @객체 생성  부분
*/
//라이언

function Lyan(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 50;
}
//벽
function Wall(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 30;

}


/*
    @draw canvas 부분
*/
var lyanx=0;
var lyany=0;
//Lyan
function drawLyan() {

    // 라이언 생성위치(x+무브,y+무브)
    lyan = new Lyan(50+lyanx,386+lyany);

    //라이언 draw(이미지,x,y,가로,세로)
    ctx.beginPath();
    ctx.drawImage(lyanImg, lyan.x, lyan.y, lyan.width, lyan.height);
    ctx.stroke();
}


//walls
var walls = [];
function drawWall() {
    wall1 = new Wall(100, 350);
    wall2 = new Wall(140, 350);
    wall3 = new Wall(180, 350);
    wall4 = new Wall(140, 260);
    walls = [wall1,wall2,wall3,wall4];
    ctx.beginPath();
    ctx.drawImage(wallImg, wall1.x, wall1.y, wall1.width, wall1.height);
    ctx.drawImage(wallImg, wall2.x, wall2.y, wall2.width, wall2.height);
    ctx.drawImage(wallImg, wall3.x, wall3.y, wall3.width, wall3.height);
    ctx.drawImage(wallImg, wall4.x, wall4.y, wall4.width, wall4.height);
    ctx.stroke();
}




//utill.js경로 realtime();
