
/*img bacground*/
var background = new Image();
background.src="../img/map02.png";

var lyanimg = new Image();
lyanimg.src="../img/lyan1.png";

var lyan = {
  goX : 50,
  goY : 386
};

function update() {
      var press= false;
			if (keyPressed[39]){
        lyan.goX += 5;
        press=true;
			} // 좌
			if (keyPressed[37]){
        lyan.goX -= 5;
        press=true;
			} // 우

      if (keyPressed[38]){
        lyan.goY -= 5;
        press=true;
			} // 상

      if (keyPressed[32]){
        lyan.goY -= 5;
        press=true;
      } // 스페이스
}

funtion gravity(){

  if(lyan.goY!=386){
      lyan.goY-=1;
  }
}
function draw_map(){
  ctx.beginPath();
  ctx.drawImage(background, 0, 0, 1000, 500);
  ctx.stroke();

}

function draw_character(){
  ctx.beginPath();
  ctx.drawImage(lyanimg, lyan.goX, lyan.goY, 50, 50);
  ctx.stroke();
}

/*적용 함수*/
function realtime(){
    draw_map();
    draw_character();
    update();
    gravity();
}
