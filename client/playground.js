//playground.js
// acontext = new webkitAudioContext() || new AudioContext;
try {
  acontext = new webkitAudioContext();
} catch (e){
  if (e instanceof ReferenceError) {
    acontext = new AudioContext;
  }
} // catch

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);
maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
player1 = maxim1.loadFile("drums1.wav");
player1.loop
player2 = maxim2.loadFile("bassline.wav");
player2.loop
player3 = maxim3.loadFile("arp.wav");
player3.loop
player4 = maxim4.loadFile("cymbal1.wav");
player4.loop
player5 = maxim5.loadFile("hihat2.wav");
player5.loop
player6 = maxim6.loadFile("snaredrum1.wav");
player6.loop

playDrums = function(){
	console.log("Track1 ON");
	player1.volume(1);
}

stopDrums = function(){
	console.log("Track1 OFF");
	player1.volume(0);
}

playBass = function(){
	console.log("Track2 ON");
	player2.volume(1);
}

stopBass = function(){
	console.log("Track2 OFF");
	player2.volume(0);
}

playArp = function(){
	console.log("Track3 ON");
	player3.volume(1);
}

stopArp = function(){
	console.log("Track3 OFF");
	player3.volume(0);
}

playCymbal1 = function(){
	console.log("Track4 ON");
	player4.volume(5);
}

stopCymbal1 = function(){
	console.log("Track4 OFF");
	player4.volume(0);
}

playHihat2 = function(){
	console.log("Track5 ON");
	player5.volume(3);
}

stopHihat2 = function(){
	console.log("Track5 OFF");
	player5.volume(0);
}

playSnaredrum1 = function(){
	console.log("Track6 ON");
	player6.volume(1);
}

stopSnaredrum1 = function(){
	console.log("Track6 OFF");
	player6.volume(0);
}

startMachine = function() {
	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
	player6.play();
	player1.volume(0);
	player2.volume(0);
	player3.volume(0);
	player4.volume(0);
	player5.volume(0);
	player6.volume(0);
}

stopMachine= function() {
	player1.stop();
	player2.stop();
	player3.stop();
	player4.stop();
	player5.stop();
	player6.stop();
}

setSpeed = function(speed) {
	player1.speed(speed);
	player2.speed(speed);
	player3.speed(speed);
	player4.speed(speed);
	player5.speed(speed);
	player6.speed(speed);

}




