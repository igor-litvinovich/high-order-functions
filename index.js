function modify(arg, func) {
    return func(arg);
}

const numberInPower2 = modify(10, (number) => Math.pow(number, 2));
const numberInPower3 = modify(10, (number) => Math.pow(number, 3));
const minusNumber = modify(10, (number) => -number);
console.log('Квадрат числа 10:', numberInPower2);
console.log('Куб числа 10:', numberInPower3);
console.log('Отрицание числа 10:', minusNumber);

function filter(target, predicate) {
    const result = [];
    target.forEach(element => {
        const shouldInclude = predicate(element);
        if (shouldInclude) {
            result.push(element);
        }
    });

    return result;
}

const initialArray = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jim' }, { name: 'Gerald' }];

console.log('Исходный массив:', JSON.stringify(initialArray));

const filteredArray = filter(initialArray, (element) => element.name.startsWith('J'));

console.log('Отфильтрованный массив:', JSON.stringify(filteredArray));


function compose(firstFunction, secondFinction) {
    return (firstFunctionArgs, secondFinctionArgs) => {
        firstFunction(firstFunctionArgs);
        secondFinction(secondFinctionArgs);
    }
}

function sayName(name) {
    console.log(`My name is ${name}`)
}

function saySurname(surname) {
    console.log(`My surname is ${surname}`)
}

const sayFullName = compose(sayName, saySurname);

sayFullName('Igor', 'Litvinovich');