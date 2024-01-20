function longestPrefix(input) {
    // Проверяем, что массив содержит хотя бы одну строку
    if (input.length === 0) {
        console.log("Массив пуст. Нет строк для сравнения.");
        return;
    }

    // Берем первую строку для сравнения
    let toCompare = input[0];
    let splitedToCompare = toCompare.split("");

    // Инициализируем переменную prefix
    let prefix = "";

    // Итерируемся по символам в первой строке
    for (let x = 0; x < splitedToCompare.length; x++) {
        // Проверяем, что текущий символ совпадает во всех строках
        if (input.every(str => str[x] === splitedToCompare[x])) {
            prefix += splitedToCompare[x];
        } else {
            // Если символы не совпадают в какой-то из строк, прекращаем цикл
            break;
        }
    }

    console.log("Наибольший общий префикс:", prefix);
}

let strings = ["flower", "flow", "flight"];
longestPrefix(strings);


// Долго думал а решение оказалось простое
