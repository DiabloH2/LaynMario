// 윈도우 이벤트
window.addEventListener("mousemove", onMousemove, false);

//이벤트 처리
function onMousemove(e) {
    var canvasClientRect = canvas.getBoundingClientRect(); //켄버스 크기  가져옴

     // 캔버스 초기값 설정
    ctx.clearRect(0, 0, canvasClientRect.width, canvasClientRect.height);

    // 마우스 포인터의 위치 계산
    mouseXinCanvas = e.clientX - canvasClientRect.left;
    mouseYinCanvas = e.clientY - canvasClientRect.top;

    //마우스 좌표 입력
    document.getElementById("mousePositionDisplay").innerText =
        "x: " + mouseXinCanvas + ", y: " + mouseYinCanvas;
}
