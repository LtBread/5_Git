/* 1. С помощью цикла while вывести все простые числа в 
промежутке от 0 до 100. 

За основу взят алгоритм нахождения простого числа (Решето Эратосфена) из прошлого курса по питону */

var n = 100;
var sourceArray = [];
for (let i = 0; i <= n; i++){
	sourceArray.push(i);	
}
sourceArray[1] = 0;
var m = 2;
while (m < n){
	if (sourceArray[m] != 0){
		var j = m * 2;
		while (j <= n){
			sourceArray[j] = 0;
			j = j + m;
		}
	}
	m++;
}
easyNumbers = [];
for (let i in sourceArray){
	if (sourceArray[i] != 0){
		easyNumbers.push(sourceArray[i]);
	}
}
alert(easyNumbers);