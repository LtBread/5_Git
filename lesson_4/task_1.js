/* 1 Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 надо получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо 
выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */


function convert(num){
	var obj = {};	
	if (0 <= num && num <= 999){	
		obj = {
			units: 0,
			dozens: 0,
			hundreds: 0
		};
		list = [];
		for (prop in obj){
			if (num == 0){
				break;
			}
			obj[prop] = num % 10;
			num = Math.floor(num / 10);
		}		
		return obj;
	}
	console.log('Вне диапазона!');
	return obj;
}
	

var number = 13;
numObj = convert(number);
for (property in numObj){
	console.log(property + ": " + numObj[property]);
}