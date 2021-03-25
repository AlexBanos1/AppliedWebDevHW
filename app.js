// Import module.
const AudioRecorder = require('node-audiorecorder');
 
const options = {
  program: `rec`,     
 
  bits: 16,           
  channels: 1,        
  encoding: `signed-integer`,  
  format: `S16_LE`,   
  rate: 16000,        
  type: `wav`,        
 
  silence: 2,         
  thresholdStart: 0.5,  
  thresholdStop: 0.5,   
  keepSilence: true   
};

const logger = console;

let audioRecorder = new AudioRecorder(options, logger);

audioRecorder.start();

setTimeout(() => {
    audioRecorder.stop();
}, 10000);