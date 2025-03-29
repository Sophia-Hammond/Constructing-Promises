let userName = '';
userName ? console.log(`Hello, ${userName} !`) : console.log('Hello');

let userQuestion = '';
console.log(`${userName} has asked - ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall ='';

switch(randomNumber) {
  case 0:
  eightBall = 'It is certain!';
  break;
  case 1:
  eightBall = 'It might happen!';
  break;
  case 2:
  eightBall = 'Answer hazy, try again!';
  break;
  case 3:
  eightBall = 'Do not count on it!';
  break;
  case 4:
  eightBall = 'Cannot predict right now';
  break;
  case 5:
  eightBall = 'My source says no';
  break;
  case 6:
  eightBall = 'I think its 99% chance!';
  break;
  case 7:
  eightBall = 'I think its your lucky day!';
  break;
};

console.log(`The magic eight ball says, ${eightBall}.`);