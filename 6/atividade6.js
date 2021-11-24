
function clicou(){
    let name = document.getElementById("name")
    let age = document.getElementById("age")

    alert("NOME: " + name.value);
    alert("IDADE: " + age.value);
    var radios = document.getElementsByName('sexo');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
       alert(radios[i].value);
        break;
  }
}}