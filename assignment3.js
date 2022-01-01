var num = prompt("enter the number");
num = parseInt(num);
var count = 0;
for (var i = 1; i <= num; i = i + 1) {
  if (num % i == 0) {
    count = count + 1;
  }
}
if (count % 2 != 0) {
  alert("given number is perfect square");
} else {
  alert("given number is not perfect square");
}
