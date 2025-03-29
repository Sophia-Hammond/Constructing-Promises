let raceNumber = Math.floor(Math.random() * 1000); 
let earlyYears = true;
let age = '19';

if(earlyYears && age > 18) {
  raceNumber += 1000
};

if(earlyYears && age > 18) {
  console.log(`Race will begin at 9:30, your race nuber is: ${raceNumber}.`)
}
else if(!earlyYears && age < 18) {
  console.log(`Race will begin at 11am, your race nuber is: ${raceNumber}.`)
}
else if(age < 18) {
  console.log(`Race will begin at 12:30pm, your race number is:${raceNumber}`)
} else {
  console.log('Please go to the registration desk, Thank you!')
};