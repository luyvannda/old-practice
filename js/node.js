// convert switch into if...else statement
let browser = prompt("Which browser do you use", "Edge");
if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
