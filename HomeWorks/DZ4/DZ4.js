console.log()
console.log("// реалізувати реверс стрінги (вивод в зворотньому порядку)")
console.log()

let example = "Something"
let reverse = []             // тут вроде как без разницы это будет массив или строка
let result = ""

reverse = example.split("")
for(let x = reverse.length - 1; x >= 0; x--){
    result += reverse[x];
}
console.log("Начальная строка "+example)
console.log("Реверсивная строка "+result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log()
console.log("реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)")
console.log()

let example2 = "alalala"
let toConvert = ""
let reverse2 = ""         
let result2 = false

toConvert = example2.split("")
for(let x = toConvert.length - 1; x >= 0; x--){
    reverse2 += toConvert[x];
}
example2.toLowerCase()
reverse2.toLowerCase()

if(example2 === reverse2){
    result2 = true
}else{result2 = false} // ну else можно и убрать

console.log("Начальное слово = "+example2)
console.log("Слово полиндром = "+result2)


//////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log()
console.log("вивести тільки парні числа з масиву, вивести в зворотньому порядку")
console.log()

let example3 = [1,1,2,5,7,8,22,45,67,80,40,33]
let paired = []
let reversePaired = [] 

for(let x = 0; x < example3.length; x++){
    if((example3[x] % 2) === 0){
        paired.push(example3[x]);
    }
}
for(let x = paired.length - 1; x >= 0; x--){
    reversePaired.push(paired[x])
}
console.log("Начальный массив "+example3)
console.log("Только парные "+paired)
console.log("Реверс парных "+reversePaired)

// P.S. ну оформить это можно было и красивее, методами и переиспользовать и на каждое задание отдельный док ну так нагляднее))