function hello() {
    console.log(alert("Hello, I'm JavaScript"))
}
hello();

var admin, name;
    name = "Vasiliy";
    admin = name;
console.log(admin);

let askName = prompt("Введите ваше имя", "");
alert(askName);

let value = +prompt('Введите значение', '');
    if(value > 0) {
        alert(1)
    } else if(value < 0) {
        alert(-1)
    } else {
        alert(0)
    }
function truncate(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength - 3) + '...' : str; 
}
truncate("Всем желаем доброго утра и счастливого нового года", 20)
function extractCurrencyValue(str) {
    return +str.slice(1);
}
extractCurrencyValue("$120");
let user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

function isEmpty(obj) {
    for(var key in obj) {
        return false;
    }
    return true;
}  
isEmpty(obj);

function sumSalariesInObj(obj) {
    var maxName = '';
    var max = 0;
    for(var name in salaries) {
        if(max < salaries[name]) {
            max = salaries[name];
            maxName = name;
        }
    }
    return maxName;
}
alert(maxName || "Нет сотрудников");

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function multiplyNumeric(menu) {
    for(var key in menu) {
        if(isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

var fruits = ["Apple", "Orange", "Cherry"]
var lastFruit = fruits[fruits.length - 1];

var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[styles.length - 2] = "Classic";
alert( styles.shift() );
styles.unshift("Rap", "Raggi")

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length - 1);
alert(arr[rand]);


var numbers = [];

while(true) {
    var value = prompt("Напишите первое число", "");
    if(value = '' || value === null || isNaN(value)) break;
    numbers.push(+value)
}
var sum = 0;
for(var i = 0; i < numbers.length; i++) {
    sum +=numbers[i];
}
alert(sum);

if([].indexOf) {
    var find = array.indexOf(value);
} else {
    var find = function(array, value) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] === value) return i;
        }
        return -1;
    }
}
function filterRange(arr, a, b) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}
filterRange(arr, 3, 5);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
function countEratosthene(arr) {
    var maxSum = 0,
        partialSum = 0;
    for(var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0) partialSum = 0;
    }
    return maxSum
}
countEratosthene(arr)

var obj = {
   className: 'open menu'
}

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
    for(var i = 0; i < classes.length; i++) {
        if(classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(' ')
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

function camelize(str) {
    var arr = str.split('-');
    for(var i = 1; i < arr.length; i++) {
        arr[i] = str[i].charAt[0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('')
}
camelize("border-camel-case");

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');
    for(var i = 0; i < classes.length; i++) {
        if(classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }
}
var obj = {
    className: 'open menu menu'
}
removeClass(obj, cls);

arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < a && arr[i] > b) {
            arr.splice(i--, 1);
        }
    }
}
filterRangeInPlace(arr, 1, 4);

var arr = [5, 2, 1, -10, 8];
function arrSort(a, b) {
    return b - a;
}
arr.sort(arrSort);
alert(arr);

var compareAge = function(personA, personB) {
    return personA.age - personB.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);
for(var i = 0; i < people.length; i++) {
    alert(people[i].name)
}
// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6

function aclean(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];
    }
    var result = [];
    for(var key in obj) {
        result.push(obj[key]);
    }
    return result;
}
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
alert( aclean(arr) );

function unique(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj)
}
  
  var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
  ];
  
  alert( unique(strings) ); // кришна, харе, 8-()

  function unique(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];
        for(var j = 0; j < arr.length; i++) {
            if(result[j] == str) continue;
        }
        result.push(str);
    }
    return result;
}
  
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];  
alert( unique(strings) ); // кришна, харе, 8-()

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function(value) {
    return value.length;
})

var arr = [1, 2, 3, 4, 5];
function getSums(arr) {
    var result = [];
    if(!arr.length) return result;
    var totalSum = arr.reduce(function(sum, item) {
        return sum + item;
    });
    return result.push(totalSum);
}

function sum() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sum(1, 2, 3, 4, 5);

function sum(a) {
    return function(b) {
        return a + b;
    }
}
sum(1)(2);

function makeBuffer() {
    var text = '';
    function buffer(piece) {
        if(arguments.length == 0) {
            return text;
        }
        text += piece;
    };
    buffer.clear = function() {
        text = ''
    }
}
var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); // '010'

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
});

var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if(func(val)) {
            result.push(val)
        }
    }
    return result;
}
function inBeetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}
function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    }
}
alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
    this.mul = function() {
        return this.a * this.b;
    }
    this.sum = function() {
        return this.a + this.b;
    }
}
var calculator = new Calculator();
calculator.read();
alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );



function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstname: {
            get: function() {
                return this.fullname.split(' ')[0]
            },
            set: function(newFirstName) {
                return this.fullname = newFirstName + ' ' + this.lastname;
            }
        },
        lastname: {
            get: function() {
                return this.fullname.split(' ')[1]
            },
            set: function(newLastName) {
                return this.fullname = newLastName + ' ' + this.lastName;
            }
        }
    })
}
var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров