// Uppgift 1:
const changeColor = document.getElementById("test");
changeColor.style.color = "red";

//Uppgift 2:
function hejElement() {
  document.getElementById("demo").innerHTML = "Hej";
}

//Uppgift 3:
function multiFem(array) {
  let resultat = [];

  for (let i = 0; i < array.length; i++) {
    resultat.push(array[i] * 5);
  }
  return resultat;
}

multiFem([5, 5, 1, 4, 8]);

//Uppgift 4;
function multi(num1, num2) {
  return num1 * num2;
}

let resultat = multi(5, 10);
console.log(resultat);

multi();

//Uppgift 5
function visa() {
  var textFält = document.getElementById("textFält");
  console.log(textFält.value);
}