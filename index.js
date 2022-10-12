function scuberGreetingForFeet(someValue){
    if (someValue > 2500) {
      return 'No can do.';
    }
    else {
      if (someValue <= 400) {
        return 'This one is on me!';
      }
    else {
      if (someValue <= 2000) {
      return 'That will be twenty bucks.';
    }
    else {
      if (someValue > 2000) {
      return 'I will gladly take your thirty bucks.';
    }}
  }}
  }


function ternaryCheckCity(city) {
  let result
  result = city = 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}



const switchOnCharmFromTip = "generous";
let result; 

switch(switchOnCharmFromTip) {
  case "generous":
    result = "Thank you so much.";
    break;
  case "not so generous":
    result = "Thank you.";
    break;
  case "anything else": 
    result = "Bye.";
    break;
    default: 
    result = "Goodbye.";
}
console.log(result);
