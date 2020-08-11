window.onload = () => {
  const canvas = document.getElementById("newCanvas");
  const ctx = canvas.getContext("2d"); //3차원 WebGl는 'webgl'

  //그리기


  //

  // 좌표 (50,50)에 너비가 200이고 높이가  100인 사각형 테두리
  //ctx (context) 
  ctx.strokeRect(50,50,200,140);

  // 사각형 채우기
  ctx.fillRect(400,250,300,300);

  //사각형 영역을 지우고 투명하게
  ctx.clearRect(450,300,150,150);

  //삼각형 채우기
  ctx.beginPath();
  ctx.moveTo(160,250); //좌표로 이동
  ctx.lineTo(110,220); //현재 좌표에서 지정된 좌표까지 이동
  ctx.lineTo(10,210);
  // 패스의 마지막 점과 시작점을 직선으로 연결하고 패스닫음
  ctx.closePath();
 //삼각형 테두리를 그릴 때는 closepath로 패스를 닫아야함
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300,200);
  ctx.lineTo(10,200);
  ctx.lineTo(10,100);
  // fill메서드는 자동으로 패스를 닫아줌
  ctx.fill();

  //연결되지 않은 패스 정의
  ctx.beginPath();
  ctx.moveTo(150,600);
  ctx.lineTo(150,800);
  ctx.moveTo(90,400);
  ctx.lineTo(150,600);
  ctx.stroke();

  // 원 그리기
  // arc ( x, y , radius, startAngle, endAngle, anticolockwise)
  // 원 ( x값, y값, 반지름, 원호 시작각도(radian), 끝각도, true=시계반대/falase=시계방향)
  // degree -> radian 변환
  const startAngle = 30 * Math.PI/180;
  const endAngle = 120* Math.PI/180;
  ctx.beginPath();
  ctx.arc(800,800,80,startAngle, endAngle, false);
  ctx.fill();
}