document.querySelector('button').addEventListener('click', click)

let input = document.getElementById(".input");
input.addEventListener("keyup", function(e) {
  if (e.which === 13) {
   e.preventDefault();
   document.getElementById("button").click();
  }
});

function click() {
    let input = document.querySelector('.input')
    console.log(input)
    input = input + " "
    document.querySelector('.msgt').innerHTML += input
    input = ''
}