// С помощью функции высшего порядка массивов - forEach выведите элементы массива и их индексы в консоль.

const myArray = ['first', 'second', 'third', 'four'];

myArray.forEach((item, index) => {
    console.log(item, index);
})