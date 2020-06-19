//==========  Обьекты в JavaScript  ========

//------------- через CTRL+F ----------------
//1.https://www.youtube.com/watch?v=FVty17Omgys
//2.Максимально близкая к идеальной реализации корзины getCartFullPrice;
//3.reduce, аккумулятор;
//4.Обьекты, их методы, свойства; Первоначальные обьекты нельзя изменять;
//5.получение ключей через for...in; получение значений через for...of;
//6.укороченная запись функции/метода; метод [Symbol.iterator]; yield;
//7.Обьекты и ссылки; создаем какой то обьект, а в переменную кладем ссылку;
//8.контекст и this
//9.проверка на ключ в массиве
//10.игра

// Неиссякаемой энергии человек

// Это просто прекрасно и удивительно и так 
// сказать по японски деликатно выражаясь заебись
// =========================================

// ===========   !!!!!!!!!!!!   ============

// максимально близкая к идеальной реализация корзины
/*
const cart = [
    {
        title: 'mouse',
        price: 100,
        quantity: 3,
    },
    {
        title: 'keyboard',
        price: 160,
        quantity: 7,
    },
];
function getCartFullPrice() {
    return cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 
    0);
}
alert (getCartFullPrice());
prompt(getCartFullPrice());
*/
 
// reduce принимает в себя функцию-коллбэк
// (sum, item), ту функцию которая нам будет что 
// то обрабатывать, вычислять и отдавать по итогу,
// и вторым аргументом начальное значение, от
// которого мы будем вычислять (здесь ноль, 0),
// который можно задавать, можно не задавать;

// reduce возвращает результат выполнения функции,
// через второй return, в котором и есть эта
// функция, получается а-ля рекурсия, сначала в 
// sum прилетает ноль, потом 100х3 и т.д.

// в документации первый элемент (в данном случае
// это (sum)), назван аккумулятором, тк он
// аккумулирует какое то значение (здесь итог
// вычислений);

// передача - это первый return, с обычным 
// аргументом (sum, item)

// стрелочные функции решили проблемы с передачей
// контекста при описании обьекта, сущностей, при
// использовании в качестве коллбэков при работе 
// с событиями, да и проще, нагляднее стало
// записывать функции;

// Когда мы переменной присваиваем function, либо
// стрелочную функцию, мы в любом случае создаем
// в памяти функцию, а в переменную просто кладем
// ссылку на эту функцию, по факту мы работаем с
// функцией, а не с переменной;

// если что то надо перебрать, и при переборе под-
// считать, можно использовать for, forEach, но
// лучше использовать reduce, в одну строчку можно
// сделать просчет массива;


// ===============   Обьекты   ==============

/*const obj = {};
console.log(obj); 
*/

// методы, присущие обьектам, в браузере

// прототипирование - это то, на чем построен весь
// JavaScript. Прототип - это то, на основе чего 
// построен конкретный обьект, чертеж в JS.

/*
const obj = {};
console.log([]);
*/   
/*
const myCar = {
    
    manufacture: 'BMW',
    color: 'blue',
    power: 300,
}
*/
/*
const myCar = {    
    'manufacture': 'BMW',
    'color': 'blue',
    'power': 300,
    'win number': '23MDVN6434DSC4B',
    // в обьектах все свойства/методы являются 
    // строками
}
console.log(myCar);
delete myCar.color;
//console.log(myCar);
myCar.power = '450';
console.log(myCar);
*/

// ============================================

// динамическое свойство, которое нигде не пригодится
// есть функция, генератор значения ключа
/*
function getPropName(prop) {
    return `testing new prop ${prop}`;
}
const myCar = {    
    'manufacture': 'BMW',
    'color': 'blue',
    'power': 300,
    'win number': '23MDVN6434DSC4B',
    [getPropName('wow')]: 2,
    // в обьектах все свойства/методы являются 
    // строками
};
myCar.color = 'red';
console.log(myCar);
*/

// Работа с обьектами изначально подразумевает какую
// то конкретную структуру обьекта, то есть она не 
// должна как то изменяться (т е из нее не должно что
// то удаляться либо добавляться), так что удаление/
// добавление чего либо из обьекта - это нехорошо, 
// такого не должно быть. 

// Есть конкретная сущность, и эта сущность должна
// сохраняться всегда, на протяжении работы всего
// приложения, поэтому нужно стараться думать о том,
// чтобы не удалить ничего из обьекта.

// Это для массивов. В массивах/коллекциях можно что
// то добавить/удалить: корзины, списки пользователей,
// списки человеков онлайн, список сообщений и т.д., 
// и т.д. 

//Обьекты - это все таки какие то сущности, они где то
// описаны, возможно даже задокументированы и их 
// трогать не надо.

// По факту можно сделать пустые свойства, которые
// пока не будут хранить в себе какие то значения, и
// позже их как то модифицировать.

// ======== Работа со свойствами =========
/*
function getPropName(prop) {
    return `testing new prop ${prop}`;
}
const myCar = {    
    'manufacture': 'BMW',
    'color': 'blue',
    'power': 300,
    'win number': '23MDVN6434DSC4B',
    [getPropName('wow')]: 2,
};
myCar.color = 'red';
myCar.someProp = 'test'; //или
myCar['bla bla-bla'] = 'test 2';
// Мы можем ДОБАВИТЬ свойство вот так, но этот
// функционал в 99.999 процентах проигнорируется
// кодом в дальнейшем, потому как старый код, 
// который написан до этого, даже знать не будет
// что у такой сущности есть такое свойство и 
// и как то его задействовать.
// Если мы его так добавим то нам еще перелопа-
// чивать тонну другого кода, поэтому так делать 
// не стоит, но добавить можно.
console.log(myCar);
*/

// =========  Работа с методами  ===========

/*
const myCar = {    
    manufacture: 'BMW',
    color: 'blue',
    engine: {
        power: 350,
        code:'B58',
    },
    possibleColors: ['blue', 'white', 'green', 'yellow'], 
    // beep: function () {     //описываем метод 
    beep() {      //укороченная запись функции/метода
        console.log('Машина подала сигнал');
    }
};
console.log(myCar);
myCar.beep();
console.log(myCar.engine);
console.log(myCar.engine.power);
for (let i = 0; i < myCar.possibleColors.length; i++) {
    console.log(`Возможный цвет авто: ${myCar.possibleColors[i]}`);
}
// метод beep - по сути своей функция, которая что либо
// делает
*/

//======== получаем ключи через for...in  ==========
/*
const myCar = {    
    manufacture: 'BMW',
    color: 'blue',
    engine: {
        power: 350,
        code:'B58',
    },
    possibleColors: ['blue', 'white', 'green', 'yellow'], 
    beep() {      //укороченная запись функции/метода
        console.log('Машина подала сигнал');
    },
};
console.log(Object.keys(myCar));
// есть такой обьект Object, и у него есть такой метод keys - 
// получить ключи
for (const prop in myCar) {
    console.log(prop);  
}
// получаем ключи через for
*/

// =========   !!!!!!!!!  ==========

//======= получаем значения через for... of ======= 
/*
const myCar = {    
    manufacture: 'BMW',
    color: 'blue',
    engine: {
        power: 350,
        code:'B58',
    },
    possibleColors: ['blue', 'white', 'green', 'yellow'], 
    beep() {      //укороченная запись функции/метода
        console.log('Машина подала сигнал');
    },
    [Symbol.iterator]: function* () {
        yield 'hi'; 
        yield 'bye';
    }
};
for (const val of myCar) {
    console.log(val);
}
console.log(myCar);
// где Symbol - это тип данных, которые у нас тоже имеются
// более детально можно почитать в документации
// [Symbol.iterator] - требуется уникальное значение для 
// итерации
// yield - return, ключевое слово, что то возвращающее
// в yield может быть все что угодно, вывод значений каких то
// конкретных, и прочие вещи
// нужн какую то логику описать и потом ее уже возвращать
// вот так можно заставить обьект быть итерируемым
// функции - генераторы
*/

//=========  Обьекты и ссылки  =============
/*
const obj = {
    num: 5,
};
function inc(a) {
    a.num++;
}
console.log(obj.num);
console.log(obj);
inc(obj);  //увеличили значение
console.log(obj.num);
console.log(obj);
//мы создаем какой то обьект, а в переменную кладем ссылку
// на этот обьект
//const obj = {};
const a = obj;
// obj - это обьект, а a - это ссылка на обьект

const val = 1;
const a = val;
// в данном случае создается копия, а не ссылка

// как скопировать обьект ? существует несколько способов
const obj = 1;
const a = Object.create(obj);
// не очень хороший вариант
// можно через for перебрать, можно через object.create, 
// через object.assign, деструктурировать обьект, также 
// сделать новый на этой основе
// копирование массива
const arr = [];
const a = [...arr]; //в этот массив нужн разобрать
// старый массив и положить все элементы сюда, и все 
// что хранится в старом массиве, ляжет в новый массив,
// и у нас по факту будет совершенно другой массив

//обьекты тоже так можно копировать
*/

// 1:26:30;
//========================================================
//Что такое контекст и что будет контекстом для нашего
//метода sayNumber
/*
function getObject() {
    return {
        number: 5,
        sayNumber() {
            console.log(`Номер в данном обьекте ${this.number}`)
        }
    }
}
const myObject = getObject();
myObject.sayNumber();
*/
//где this - это контекст, sayNumber - наша функция, myObject -
//наш контекст в строке myObject.sayNumber();
//если бы мы использовали стрелочная функция, то this был бы не
//myObject, а то что лежит на уровень еще выше, и это был бы
//window

//Проверка на ключ в массиве
/*
const arr = ['hello', 'hi', 'aloha'];
console.log('1' in arr);
console.log('10' in arr);
*/
//========================================================

//=======================   Игрушка   ====================

const settings = {   //прописываем настройки поля
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {    //прописываем игрока
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },
    
    move(direction) {  //функция "направление"
        switch (direction) {
            case 2:       //кнопки 2, 4, 6, 8
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;

        }
    }
}

const game = {   //описываем саму игру
    settings,
    player,

    run() {     //запуск
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();
            
            const direction = this.getDirection();

            if (direction === -1) {
                return alert('До свидания !');
            }

            this.player.move(direction);
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o '
                } else {
                    map += 'x '
                }
            }
            map += '\n';
        }

        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirection = [-1, 2, 4, 6, 8];

        while(true) {   //проверяем введенное число на валидность, еще includes
            const direction = parseInt(prompt(`Введите число, куда хотите переместиться. -1 для выхода`)); //parseInt отсекает дробные части числа, знак '-'; parseFloat отсекает целую часть числа

            if (!availableDirection.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirection.join(', ')}.`);
                continue;

            }
            return direction;
        }
    },
};

game.run();






















