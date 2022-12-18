// С помощью инструкции switch определите является ли число в переменной mount зимним месяцем.

const mount = 2;

switch (mount) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    default:
        console.log('This month is not winter')
}
