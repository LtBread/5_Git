/* 2 Продолжить работу с интернет-магазином:
	В прошлом домашнем задании вы реализовали корзину на базе массивов. 
	Какими объектами можно заменить их элементы?	
	Реализуйте такие объекты.
	Перенести функционал подсчета корзины на объектно-ориентированную базу. */

var book1 = {
	name: 'Властелин колец. Хранители Кольца',
	price: 209
};
var book2 = {
	name: 'Властелин колец. Две твердыни',
	price: 317
};
var book3 = {
	name: 'Властелин колец. Возвращение короля',
	price: 317
};

var basket = {
	obj1: book1,
	obj2: book2,
	obj3: book3,	
	countBasketPrice: function(){	
		var cost = 0;		
		for (obj in this){
			if (obj == 'countBasketPrice'){
				continue;
			}
			cost += this[obj].price;		
		}
	return cost;		
	}
};

var result = basket.countBasketPrice();
alert(`Общая стоимость выбранных книг равна ${result} руб.`);