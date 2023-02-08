function DeleteMe() {
  document.getElementById("MyResult").value = "";
}

function calculator(value) {
  document.getElementById("MyResult").value += value;
}

function answer() {
  let a = document.getElementById("MyResult").value;
  let b = eval(a);
  document.getElementById("MyResult").value = b;
}
