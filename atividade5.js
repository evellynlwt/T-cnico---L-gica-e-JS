var linha1 = prompt('qual a sua nota no primeiro trimestre? ')
var linha2 = prompt('qual a sua nota no segundo trimestre? ')
var linha3 = prompt('qual a sua nota no terceiro trimestre? ')

var media = (parseInt(linha1)+parseInt(linha2)+parseInt(linha3)) / 2

document.write("sua média é: "+media)