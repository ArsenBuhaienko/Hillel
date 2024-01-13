const readline = require('readline');

// Интерфейс ввода/вывода, работает через запуск файла с терминала node .\JS_Operators_Functions_Continue.js
const readInterfaceInstance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Этот кусок кода я подсмотрел на StackOverflow, это промис, я недо конца разобралс как это работает
// И пришлось добавлять асинхронность
function questionAsync(question) {
    return new Promise((resolve) => {
        readInterfaceInstance.question(question, (input) => {
            resolve(input);
        });
    });
}

async function fuelingStation() {
    let typeOfCarFuel;
    let typeOfCar;

    // Тип топлива
    console.log('');
    console.log('GOOD DAY!');
    console.log('=================================================================');
    console.log('Choose type of fuel');
    console.log('1 - Gas');
    console.log('2 - Diesel');
    console.log('3 - E92');
    console.log('4 - E95');
    console.log('');
    
    // Здесь в переменную userChoiceFuel записывается значение от вызова questionAsync
    // + нужен parseInt потому что число с консоли имеет тип стринги а свитч не хочет с ней работать
    const userChoiceFuel = parseInt(await questionAsync("Waiting: "));
    switch (userChoiceFuel) {
        case 1:
            typeOfCarFuel = "Gas";
            break;
        case 2:
            typeOfCarFuel = "Diesel";
            break;
        case 3:
            typeOfCarFuel = "E92";
            break;
        case 4:
            typeOfCarFuel = "E95";
            break;
        default:
            typeOfCarFuel = "Unknown fuel type";
    }

    // Тип кузова
    console.log('');
    console.log('=================================================================');
    console.log('Choose type of car');
    console.log('1 - Sedan');
    console.log('2 - SUV');
    console.log('3 - Coupe');
    console.log('4 - Convertible');
    console.log('5 - Hatchback');
    console.log('6 - Pickup Truck');
    console.log('');
    
    // Аналогично
    const userChoiceCar = parseInt(await questionAsync("Waiting: "));
    switch (userChoiceCar) {
        case 1:
            typeOfCar = "Sedan";
            break;
        case 2:
            typeOfCar = "SUV";
            break;
        case 3:
            typeOfCar = "Coupe";
            break;
        case 4:
            typeOfCar = "Convertible";
            break;
        case 5:
            typeOfCar = "Hatchback";
            break;
        case 6:
            typeOfCar = "Pickup Truck";
            break;
        default:
            typeOfCar = "Unknown car type";
    }

    // Вывод значений обеих переменных
    console.log('=================================================================');
    console.log('Chosen Fuel Type:', typeOfCarFuel);
    console.log('Chosen Car Type:', typeOfCar);
    console.log('=================================================================');

    readInterfaceInstance.close();
}

fuelingStation();
