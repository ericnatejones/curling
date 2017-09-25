let sliderValue = 0;
let prevSliderValue = 0;
let currentSpeed = sliderValue - prevSliderValue;

document.slider.momentum.addEventListener("input", event=>{
  sliderValue = parseInt(event.target.value);

})

setInterval(()=>{
  currentSpeed = sliderValue - prevSliderValue;
  prevSliderValue = sliderValue;
  if (sliderValue === 100){
    console.log(currentSpeed);
  }
}, 1)
