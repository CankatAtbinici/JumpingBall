let writingArea = document.getElementById("containerWritingArea");
let learningButton = document.getElementById("learnButton");
let startBtn = document.getElementById("startBtn");
let container = document.querySelector("div.container");
var area = document.getElementById("area");
var color = document.getElementById("colorSelecter");
var drawing = area.getContext("2d");
var w = area.width;
var h = area.height;
var a = w/2;
var b = h/2;
var da = 5;
var db  = 5;
console.log(a);
area.style.backgroundColor="transparent"


            //Show İnformation About JumpingBall
            learningButton.addEventListener("click" , function() {
                writingArea.style.display = "block"
            })
            //let's start to therapy
            startBtn.addEventListener("click" , function() {

                writingArea.style.display = "none";
                startBtn.style.display = "none";
                learningButton.style.display = "none";
                container.style.display = "block";
                document.querySelector("h3").style.display = "none"
            
            })





    // Jumping Ball  ((if want change to ball color with drawing.fillstyle))
    function JumpingBall () {
    cleanArea();
    drawing.beginPath();
    drawing.arc (a, b , 10 , 0 , 2*Math.PI);
    drawing.closePath();
    drawing.fillStyle= "#000000";
    a = a+da;
    b = b+db;
    drawing.fill();
    if ((a>w-8) || (a<0) ) {
            da = -1 * da;
    }
    if ( (b>h-8) || (b<0) ){
        db = -1 * db;
    }else{
        a = a;
        b = b;
    }
    
}


    //Clean Area Function (if want change to area color with drawing.fillstyle)
function cleanArea () {
    drawing.beginPath();
    drawing.fillStyle="#ffffff";
    drawing.fillRect(0,0 , area.width , area.height );
    drawing.closePath();
    drawing.fill();
}
    // Call Function in 10 miliseconds ( can be greater than 10 milisecond it's optional)
setInterval(JumpingBall, 10);


//Get mouse coordinates 


function getMousePosition (canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Console log mause coordinates
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
  } 


let canvasElem = document.querySelector("canvas");
  canvasElem.addEventListener("mousedown", function(e) {
      getMousePosition(canvasElem, e);
  });






  

 
