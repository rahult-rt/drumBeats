window.addEventListener('keydown',function(e){    
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; //stop the function from running if key press other than assigned key
audio.currentTime=0; //rewind to start
audio.play(audio); //plays the audio if assigned key pressed 
keys.classList.add('playing'); //this will call the button transition on hit

});