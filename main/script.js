// С помощью функции высшего порядка массивов - for in выведите свойства и значения объекта.

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
