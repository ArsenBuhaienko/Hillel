// створити 3 обʼєкти через {}
{
    
}
let AK_47 = {
    type: "Automatic Rifle",
    ammo: "7.62x39",
    rate_of_fire: "600"
}

let Beretta_M82 = {
    type: "Semi-Automatic Pistol",
    ammo: "9mm",
    rate_of_fire: "depend of user"
}

let SVD = {
    type: "Sniper Rifle",
    ammo: "7.62x54",
    rate_of_fire: "40"
}

/* створити 3 обʼєкти через Object() */

let MP5 = new Object()
    MP5.type = "Submachine Gun",
    MP5.ammo = "9mm",
    MP5.rate_of_fire = "900"


let M16 = new Object()
    M16.type = "Assault Rifle",
    M16.ammo = "5.56x45",
    M16.rate_of_fire = "950"

let M82 = new Object()
    M82.type = "Anti-Material Rifle",
    M82.ammo = ".50 BMG",
    M82.rate_of_fire = "4"

 /*    створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі */

 let M16A1 = Object.create(M16)
 console.log(M16A1.type)

 let M16A4 = {
    mod: "yes",
    __proto__: M16
 }
 console.log(M16A4.type)

 /* створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer) */

 let engineer = {
    name: "SMT Test",
    role: "Engineer",
    experience: 0,
    displayInfo: function() {
    console.log("Profile Info");
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Experience: ${this.experience} years`);
    }
  };

var QA_engineer = Object.create(engineer);
QA_engineer.name = "Cheshire Cat";
QA_engineer.role = "QA Engineer";
QA_engineer.experience = 4;

engineer.displayInfo();
QA_engineer.displayInfo();

/* унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів */

var person = {
    city: "Odessa",
    age: 26,
    displayInfo: function() {
    console.log("Person Info");
    console.log(`Name: ${this.city}`);
    console.log(`Age: ${this.age} years`);
    }
  };


engineer.displayInfo();
QA_engineer.displayInfo();
person.displayInfo();