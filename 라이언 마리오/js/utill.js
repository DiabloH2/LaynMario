//라이언 움직임 전역변수
function moveUpdate() {
    var press = false;
    if (keyPressed[39]) {
        lyanx += 5;
        press = true;
    } // 좌
    if (keyPressed[37]) {
        lyanx -= 5;
        press = true;
    } // 우

    if (keyPressed[38]) {
        lyany -= 5;
        press = true;
    } // 상

    if (keyPressed[32]) {
        lyany -= 10;
        press = true;
    } // 스페이스
}

//중력 적용
function gravity() {
    //  라이언의 위치 &&감지범위
    var flag = true;
    var y = lyan.y + 2 * lyan.heigth; //436
    var left
    // 벽
    for (var i = 0; i < walls.length; i++) {
        if (Isleft(walls[i], lyan)==true && IsCollision(walls[i], lyan) == true) {
            flag = false;
        } else if (IsRight(wall, lyan) && IsCollision(wall, lyan) == true) {
            flag = false;
        } else if (&& IsCollision(wall, lyan) == true) {
            flag = false;
        } else if (&& IsCollision(wall, lyan) == true) {
            flag = false;
        }
    }

    // 땅
    if (lyany >= -1 && lyany <= 1) {
        flag = false;
    } else if (flag) {
        lyany += 3;

    }
}


//충돌감지 센서
var x1, x2, y1, y2;

function IsCollision(wall, lyan) {
    x1 = wall.x < lyan.x + lyan.width;
    x2 = wall.x + wall.width > lyan.x;
    y1 = wall.y < lyan.y + lyan.height;
    y2 = wall.y + wall.height > lyan.y;
    return x1 && x2 && y1 && y2;
}

function Isleft(wall, lyan) {
    x1 = wall.x < lyan.x + lyan.width;
    return x1;
}

function IsRight(wall, lyan) {
    x2 = wall.x + wall.width > lyan.x;
    return x2;
}

function IsUp(wall, lyan) {
    y1 = wall.y < lyan.y + lyan.height;
    return y1;
}

function IsDown(wall, lyan) {
    y2 = wall.y + wall.height > lyan.y;
    return y2;
}



/*적용 함수*/
function realtime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    drawWall();
    drawLyan();
    moveUpdate();
    gravity();

}
