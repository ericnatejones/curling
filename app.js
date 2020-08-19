let sliderValue = 0;
let prevSliderValue = 0;
let currentSpeed = sliderValue - prevSliderValue;
let puck = document.getElementById("puck");
let speed = currentSpeed;
puck.style.left = "100px";

// This variable is declared but never used
let checkSliderValue = true;
let slid = false;
let mouse = {x: 0,y: 0}

function slideForward(){
  if (sliderValue === 100 && !slid){
    sliderValue = 99;
    document.getElementById("slide-input").value = "99";

    speed = currentSpeed;

    console.log(speed);
    slid = true;
    puck.style.left = (speed * 10 + 500) + "px";

    slideSideways();

  }
}

function slideSideways(){
   puck.style.top = (mouse.y) + "px";
}

document.slider.momentum.addEventListener("input", event=>{
  sliderValue = parseInt(event.target.value);
})

document.getElementById("reset").addEventListener("click", ()=>{
  sliderValue = 0;
  prevSliderValue = 0;
  speed = currentSpeed;
  puck.style.left = "100px";
  puck.style.top = "66px"
  checkSliderValue = true;
  slid = false;
  document.slider.momentum.value = 0;
})

setInterval(()=>{
  currentSpeed = sliderValue - prevSliderValue;
  prevSliderValue = sliderValue;

  slideForward()


}, 5)

document.addEventListener("mousemove", (event)=>{

  event.y < 7 ? mouse.y = 7: mouse.y = event.y;
  event.y > 147 ? mouse.y = 147: mouse.y = mouse.y;

  mouse.x = event.x;

});
