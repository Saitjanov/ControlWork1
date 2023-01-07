// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    for(let item of arr) {
    max = arr.reduce((a,b) => a.price > b.price ? a : b) 
    
    min = arr.reduce((a,b) => a.price < b.price ? a : b)

    total = arr.reduce((a,b) => a + b.price, 0)

    let obshayaSum = discount * total / 100 
    totalSale = total - obshayaSum

    arr_sale.push({
        name: item.name, 
        skidkaPrice: item.price - (discount * item.price / 100) 
    })
    
    average = total / arr.length
    }

    console.log(max, min)
    console.log(total)
    console.log(totalSale)
    console.log(arr_sale)
    console.log(average)

}

setup()