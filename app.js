var idElement = document.getElementById('use-id-method');
console.log(idElement)
//finding html element
var tagElement = document.getElementsByTagName('div');
console.log(tagElement)

var classElement = document.getElementsByClassName('use-class-method');
console.log(classElement);

idElement.innerHTML = 'changed';
classElement[1].innerHTML = 'changed';
