let sliderValue = 0;
let prevSliderValue = 0;
let currentSpeed = sliderValue - prevSliderValue;
let puck = document.getElementById("puck");
let speed = currentSpeed;
puck.style.left = "100px";
let checkSliderValue = true;
let slid = false;
let velocity = .01;

document.slider.momentum.addEventListener("input", event=>{
  sliderValue = parseInt(event.target.value);
})

setInterval(()=>{

  currentSpeed = sliderValue - prevSliderValue;

  prevSliderValue = sliderValue;

  let puckPosition = parseInt(puck.style.left.slice(0, puck.style.left.length - 2));
  if (sliderValue === 100 && !slid){
    sliderValue = 99;
    document.getElementById("slide-input").value = "99";

    speed = currentSpeed;

    console.log(speed);
    slid = true;

  }
  if (puckPosition > 1000){
    puckPosition = 100;
  }


  puckPosition = (puckPosition + speed) + 'px';
  puck.style.left = puckPosition;

  if (speed > 0){
    speed = speed - velocity;
    velocity += .00001;
  } else {
    speed = 0;
    slid = false;
  }


}, 1)
