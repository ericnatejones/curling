let sliderValue = 0;
let prevSliderValue = 0;
let currentSpeed = sliderValue - prevSliderValue;
let line = document.getElementById("line");
let speed = currentSpeed;
line.style.right = "100px"

document.slider.momentum.addEventListener("input", event=>{
  sliderValue = parseInt(event.target.value);

})

setInterval(()=>{

  currentSpeed = sliderValue - prevSliderValue;
  prevSliderValue = sliderValue;
  if (sliderValue === 100){
    speed = currentSpeed;
    console.log(sliderValue)
    sliderValue = 99;
    document.getElementById("slide-input").value = "99";

  }
  let linePosition = parseInt(line.style.right.slice(0, line.style.right.length - 2));

  linePosition = (linePosition + speed) + 'px';
  line.style.right = linePosition;

}, 1)
