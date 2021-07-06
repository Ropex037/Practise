var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;
var ballY = 50;
var ballSpeedY = 4;
var paddle1Y = 250;
var paddle2Y = 250;

const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10 ;
var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;
var showingWinScreen = false;


function calculateMousePos(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
};
};
function handleMouseClick(evt){
    if(showingWinScreen){
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    };
};


window.onload = function() {
   
     canvas = document.getElementById('gameCanvas');     
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    this.canvas.addEventListener('mousedown', handleMouseClick);
   this.setInterval(function(){
       moveEverything();
       drawEverything();
    }, 1000/framesPerSecond);
       canvas.addEventListener('mousemove', function(evt){
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
    });
  
};
function computerMovment(){
    var paddel2yCenter = paddle2Y +(PADDLE_HEIGHT/2);
    if(paddel2yCenter < ballY-35){
        paddle2Y += 6;
    } else if(paddel2yCenter > ballY+35){
        paddle2Y -= 6;
    }
        
}
// pravac i brzina
function moveEverything(){
    computerMovment();
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    if(ballX < 0){
        if(ballY > paddle1Y &&
            ballY<paddle1Y+PADDLE_HEIGHT){
        ballSpeedX = -ballSpeedX;
      var deltaY = ballY
                -(paddle1Y+PADDLE_HEIGHT/2);
                ballSpeedY = deltaY * 0.35;
    } else{
        player2Score ++;
        ballReset();
       
    };
    if(showingWinScreen){
        return;
    }
};
    if(ballX > canvas.width){
        if(ballY > paddle2Y &&
            ballY < paddle2Y+PADDLE_HEIGHT){
        ballSpeedX = -ballSpeedX;;
        var deltaY = ballY
        -(paddle2Y+PADDLE_HEIGHT/2);
        ballSpeedY = deltaY * 0.35;
            } else {
                player1Score ++;
                ballReset();
               
            };
        };

    if(ballY < 0){
        ballSpeedY = -ballSpeedY;
    };
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    };
    
};
    

function ballReset(){
    if(player1Score >= WINNING_SCORE ||
        player2Score >= WINNING_SCORE){
            player1Score = 0;
            player2Score = 0;
            showingWinScreen = true;
        }
       
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;

};
function  drawNet(){
    for(var i=0; i < canvas.height; i += 40){
        colorRect(canvas.width/2-1, i, 2, 20, 'white');
    };
};

// Draw funkcija

function drawEverything() {
// next line blank oot the screen
   colorRect(0, 0, canvas.width, canvas.height, 'black');

   if(showingWinScreen){
       canvasContext.fillStyle = 'white';
       if(player1Score >= WINNING_SCORE){
        canvasContext.fillText("left plater Won!", 350, 500);
      
    }else  if(player2Score >= WINNING_SCORE){
      canvasContext.fillText("right PLayer Won!", 350, 200);
    
    
       } 
  
      canvasContext.fillText('click to continue', 100, 100);
       return;
   }
   drawNet()
    // the left player paddle
    colorRect(0, paddle1Y, PADDLE_THICKNESS,PADDLE_HEIGHT, 'white');
    // the right player paddle
    colorRect(canvas.width-PADDLE_THICKNESS, paddle2Y,PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
    // next line draws the ball
    
   colorCircle(ballX, ballY, PADDLE_THICKNESS, 'white');
//    score
canvasContext.fillText(player1Score, 100, 100);
canvasContext.fillText(player2Score,canvas.width-150, 100);

};

// za krug
function colorCircle(centerX, centerY, radiuus, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radiuus, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);

};