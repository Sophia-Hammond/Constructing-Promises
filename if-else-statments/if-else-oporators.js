let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} // prints 'not bed time yet'

let stopLight = 'green';
let pedestrians = 0;

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  } // prints 'Go!'
  
  let day = 'Monday';
  
  if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  } // prints 'Do some work
  
  
  let excited = true;
  console.log(!excited); //prints false
  
  let sleepy = false;
  console.log(!sleepy);  //prints true