var myName : string = 'Camilo';

var age : number = 22;

var bol : boolean = true;

var anyway : any = 'Hola';

var array : Array<string> = ['Camilo', 'Andres', 'Aguilar', 'Albornoz'];

console.log(myName, age, bol, anyway);
array.forEach(actual => {
	console.log(actual);
});

var numberList : number[] = [1, 2, 3, 4, 5];
numberList.forEach(actual => {
	console.log(actual);
});

var barra : string | number = 'Camilo';
console.log(barra);
barra = 22;
console.log(barra);

type numberBool = string | number;

var numBool : numberBool = 'Camilo';
console.log(numBool);
numBool = 22;
console.log(numBool);