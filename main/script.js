// С помощью функции высшего порядка массивов - forEach и его методов, необходимо получить все колючи и значения объекта в виде массива.

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => {
    console.log(key)
})

// Object.values(myObject).forEach(value => {
//     console.log(value)
// })
