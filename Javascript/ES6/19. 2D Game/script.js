// 1. 화면에 네모, 원 그릴 수 있어야 한다.
// 2. 프레임마다 코드실행 가능해야 한다. (애니메이션 위해)
// 3. Collision Check 할 수 있어야 한다.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = './images/dinosaur.png';

// 캐릭터 속성
var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y, this.width, this.height);
  }
}

var img2 = new Image();
img2.src = './images/cactus.png';

// 장애물 속성
class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
// 장애물이 여러개일 경우 : 만들 때마다 array에 담아서 보관한다.
var cactus여러개 = [];
var jumpTimer = 0;
var animation;

function play(){
  // 실행 횟수는 모니터 FPS에 따라 다르다.
  animation = requestAnimationFrame(play);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // dino.x++;

  // 120 프레임마다 장애물 생성하고 array에 집어 넣는다.
  if(timer % 140 === 0){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
  }

  cactus여러개.forEach((a, i, o)=>{
    // 점프 기능 & collision detection(충돌감지) 기능
    // x 좌표가 0 미만이면 'cactus여러개' Array에서 제거
    if(a.x < 0) {
      o.splice(i, 1);
    }

    a.x -= 2;
    // 주인공 vs 모든 장애물 충돌을 체크해야 하므로 반복문 안에서 체크
    crash(dino, a);
    a.draw();
  })
  
  if(jumping == true) {
    dino.y -= 3;
    jumpTimer++;
  }
  if(jumping == false) {
    if(dino.y < 200) {
      dino.y += 3;
    }
  }
  if(jumpTimer > 60) {
    jumping = false;
    jumpTimer = 0;
  }
  dino.draw();
}

play();

// 충돌 확인 함수
function crash(dino, cactus){
  var xDiff = cactus.x - (dino.x + dino.width);
  var yDiff = cactus.y - (dino.y + dino.height);
  if (xDiff < 0 && yDiff < 0) {
    // 충돌시 게임 정지
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jumping = false;

document.addEventListener('keydown', function(e){
  if(e.code === 'Space') {
    jumping = true;
  }
})

// 추가 기능 구현
// Q. 점프 여러번 금지?
// Q. 공룡이 달리는 것처럼 보이게?
// Q. 배경 다가오는건?
// Q. 장애물이 나타나는 간격을 랜덤하게?
// Q. 점수표기는?
// Q. 시간 지날 때 점수도 오르는 기능은?

// * 문법이 아니라 컴퓨터에게 명령을 내리는 논리력과 사고력 키우기!
