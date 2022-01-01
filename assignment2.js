var num = prompt("enter the number");
num = parseInt(num);

while (num > 0) {
  var c = 0;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      c = c + 1;
    }
  }
  if (c == 0) {
    console.log(num);
    num = num - 1;
  } else {
    num = num - 1;
  }
}
