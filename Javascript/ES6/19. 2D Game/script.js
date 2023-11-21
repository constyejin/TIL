// 1. 화면에 네모, 원 그릴 수 있어야 한다.
// 2. 프레임마다 코드실행 가능해야 한다. (애니메이션 위해)
// 3. Collision Check 할 수 있어야 한다.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 캐릭터 속성
var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


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
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
// 장애물이 여러개일 경우 : 만들 때마다 array에 담아서 보관한다.
var cactus여러개 = [];

function play(){
  requestAnimationFrame(play);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // dino.x++;

  // 실행 횟수는 모니터 FPS에 따라 다르다.
  // 120 프레임마다 장애물 생성하고 array에 집어 넣는다.
  if(timer % 120 === 0){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
  }

  cactus여러개.forEach((a)=>{
    // 점프 기능 & collision detection(충돌감지) 기능
    a.draw();
  })

  dino.draw();
}

play();
