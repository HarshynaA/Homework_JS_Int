// присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

/*
let he = 'hello';
let ow = 'owu';
let co = 'com';
let ua = 'ua';

let a = 1;
let b = 10;
let c = -999;
let d = 123;
let pi = 3.14;
let e = 2.7;
let f = 16;
let g = true;
let h = false;

console.log(he,ow,co,ua);
console.log(a,b,c,d,pi,e,f,g,h);

document.write(he+'.'+ ow +'.'+ co +'.'+ ua);
document.write(a+'<br>'+b+'<br>'+c+'<br>'+d+'<br>'+pi+'<br>'+e+'<br>'+f+'<br>'+g+'<br>'+h);
*/

//Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

/*
const name = 'Alona';
const patronymic = 'Ihorivna';
const b = 'Academia';
const pi = 3.14;
const date = 1998;
const a = 345;
console.log(date,pi,a,name,patronymic,b);
document.write(date+'<br>'+pi+'<br>'+a+'<br>'+name+'<br>'+patronymic+'<br>'+b);
*/

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

/*
let lastName = prompt('Lastname: ');
let firstName = prompt('Firstname: ');
let patronymic = prompt('Patronymic: ');

console.log(lastName,firstName,patronymic);
document.write(lastName+' '+firstName+' '+patronymic);
*/

// //- Взять переменные из задания 4 и сконкатенировать их в одной переменной person

/*lastname = prompt('Введіть прізвище:');
firstname = prompt('Введіть ім`я:');
patronymic =  prompt('Введіть по-батькові :');
// person
let person= lastname + ' '+ firstname + ' '+ patronymic;
*/
// __________________________________________________________________________
//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
/*
lastname_my = prompt('Введіть ваше прізвище:');
firstname_my= prompt('Введіть ваше ім`я:');
patronymic_my =  prompt('Введіть,як вас по-батькові :');

lastname_mather = prompt('Введіть прізвище мами:');
firstname_mather= prompt('Введіть ім`я мами:');
patronymic_mather =  prompt('Введіть по-батькові мами:');

lastname_father = prompt('Введіть прізвище батька:');
firstname_father= prompt('Введіть ім`я батька:');
patronymic_father =  prompt('Введіть по-батькові батька:');

let person1 = lastname_my + ' '+ firstname_my + ' '+ patronymic_my;
let person2 = lastname_mather + ' '+ firstname_mather + ' '+ patronymic_mather;
let person3 = lastname_father + ' '+ firstname_father + ' '+ patronymic_father;

console.log('МОЯ СІМ`Я : '+ person1 + ', ' + person2 + ', ' + person3);
*/
// __________________________________________________________________________
//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
/*
let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
let c = prompt('Введіть третє число:');
a = +a;
b = +b;
c = +c;
console.log(a,b,c);
*/
// __________________________________________________________________________
//- при помощи prompt() получить 4 числа. Привести их к числовому типу при по
/*
let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
let c = prompt('Введіть третє число:');
let d = prompt('Введіть четверте число:');
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

let result = a+b+c+d;
console.log(result);
*/
// __________________________________________________________________________
//- при помощи prompt() получить 4 числа. Привести их к числовому типу при по
/*
let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
let c = prompt('Введіть третє число:');
let d = prompt('Введіть четверте число:');
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
d = parseFloat(d);

let result = a+b+c+d;
console.log(result);
*/
// __________________________________________________________________________
//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
/*
let a = parseFloat(prompt('Введіть перше число:'));
let b = parseFloat(prompt('Введіть друге число:'));
let c = parseFloat(prompt('Введіть третє число:'));
let result = a+b+c;
let result_Math = Math.round(a+b+c);
console.log(result);
console.log(result_Math);
*/
// __________________________________________________________________________
//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
/*
let a = parseInt(prompt('Введіть перше число:'));
let b = parseInt(prompt('Введіть друге число:'));
let c = Math.pow(a,b);
console.log(c);
*/
// __________________________________________________________________________
//При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

/*
let a =100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
*/
// __________________________________________________________________________
//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную

/*
let a = 5;
let b = 6;
let c = 10;
let d = 123;
let e = '123';

let ab_1 = a<b;
let ab_2 = a>b;
let ab_3 = a>=b;
let ab_4 = a==b;

let c_5 = c===c;
let c_6 = c>=c;
let c_7 = c<c;
let c_8 = c!=c;
let c_9 = c!==c;

let de_10 = d===e;
let de_11 = d==e;

console.log(ab_1);
console.log(ab_2);
console.log(ab_3);
console.log(ab_4);
console.log('========');
console.log(c_5);
console.log(c_6);
console.log(c_7);
console.log(c_8);
console.log(c_9);
console.log('========');
console.log(de_10);
console.log(de_11);

console.log('==== next ====');
console.log(132>100 && 45<12);                                              //false
console.log(34>33 && 23<90);                                                //true
console.log(99 > 100 && 45 > 12 );                                          //false
console.log(132 > 100 || 45 < 12 );                                         //true
console.log(111 > 11 || 45 < 111 );                                         //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );             //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );              //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );           //false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));              //true
console.log(!!'-1');                                                        //true
console.log(!!-1);                                                          //true
console.log(!!'0');                                                         //true
console.log(!!'null');                                                      //true
console.log(!!'undefined');                                                 //true
console.log(!!(3/'owu'));                                                   //false
console.log((111 > 11 || 45 < 111) ||  !!'0');                              //true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));         //false
*/

//=============================== CLASS =====================================
//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

/*
let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log(str);
console.log(num);
console.log(flag);
console.log(txt);
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));
*/
// __________________________________________________________________________
//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

/*let a1;
let a2;
let a3;
let a4;
let a5;
a1 = 5 + 3;
a2 = 5 - 3;
a3 = 5 * 3;
a4 = 5 / 3;
a5 = 5 % 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);*/
// __________________________________________________________________________
//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

/*let a6;
let a7;
let a8;
let a9;
let a10;
a6 = 5 % 3;
a7 = 3 % 5;
a8 = 5 + '3';
a9 = '5' - 3;
a10 =  75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);*/
// __________________________________________________________________________
//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

/*let height = 23;
let width = 10;
let s = height*width;
console.log('Площа трикутника: ',s,' см');*/
// __________________________________________________________________________
//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

/*let heightC = 10;
let dC = 4;
let rC = dC/2;
let v = (Math.PI*Math.pow(rC,2)* heightC);
console.log('Об`єм циліндра: ',v,'м');*/
// __________________________________________________________________________
//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

/*let n = 3;
let m = 4;
// let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
let k = Math.sqrt(n**2 + m**2);
console.log(k);*/
// __________________________________________________________________________
//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
/*let str = 'Hello world';
document.write(str);
console.log(str);
alert(str);*/

// __________________________________________________________________________
//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert(' Гаршина А.І.\n 21\n малювання');

// __________________________________________________________________________
//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
/*
let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?';
let concatenation = str1 + ' '+ str2 + ' '+ str3;
document.write(concatenation);
*/

// __________________________________________________________________________
//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

/*
let str = '20';
let a = 5;
document.write(str + a + '<br/>'); // бо вийшов текст. тип, все підрахувало як строки
document.write(str - a + '<br/>'); // бо перевело в числовий тип;
document.write(str * '2' + '<br/>'); // бо перевело в числовий тип;
document.write(str / 2 + '<br/>'); // бо перевело в числовий тип;
//Перевірка типу
//let aa = str + a;
//let aaa = str - a;
//let aaaa = str * '2';
//let aaaaa = str / 2;
//console.log(typeof(aa)); // числовий тип
//console.log(typeof(aaa)); // числовий тип
//console.log(typeof(aaaa)); // числовий тип
//console.log(typeof(aaaaa)); // числовий тип
*/

// __________________________________________________________________________
//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
//     parseInt("435")
//     parseInt("Вася")

/*
console.log(parseInt("3.14")); //3
console.log(parseInt("-7.875")); //-7
console.log(parseInt("435")); //435
console.log(parseInt("Вася")); //NaN
*/

// __________________________________________________________________________
//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

/*
let str = prompt("Enter something", "ho-ho");
console.log(str);
*/

// __________________________________________________________________________
//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
/*
let a = parseInt(prompt('Введіть перше число:', 'Наприклад, 45'));
let b = parseInt(prompt('Введіть друге число:', 'Наприклад, 3'));
let c = a+b;
alert('Ваше число: '+c);
*/
// __________________________________________________________________________
//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

/*
let nameUser = prompt('Введіть ваше і`мя та прізвище:');
let ageUser = prompt('Введіть ваш вік:');
alert('Доброго вечора '+nameUser+',мої вітання що вам '+ageUser+'!!!)))');
*/

//======================================================
//==================  ДОП  ==============================
//======================================================

//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

/*
//По спаданню
function MyNumeric_1(a,b,c){
    console.log('Відсортовано по спаданню:')
    if(a>b && a>c) {
        if(b>c){
            console.log(a,b,c);
        }
        else{
            console.log(a,c,b);
        }
    }
    else if(b>a && b>c){
        if(a>c){
            console.log(b,a,c);
        }
        else{
            console.log(b,c,a);
        }
    }
    else if(c>a && c>b){
        if(a>b){
            console.log(c,a,b);
        }
        else{
            console.log(c,b,a);
        }
    }
}
//По зростанню
function MyNumeric_2(a,b,c){
    console.log('Відсортовано по зростанню:')
    if(a>b && a>c) {
        if(b>c){
            console.log(c,b,a);
        }
        else{
            console.log(b,c,a);
        }
    }
    else if(b>a && b>c){
        if(a>c){
            console.log(c,a,b);
        }
        else{
            console.log(a,c,b);
        }
    }
    else if(c>a && c>b){
        if(a>b){
            console.log(b,a,c);
        }
        else{
            console.log(a,b,c);
        }
    }
}

let a = + prompt('Введіть перше число:');
let b = +prompt('Введіть друге число');
let c = +prompt('Введіть третє число:');
let arr = [a,b,c];

console.log('Наш масив:',arr);
arr.sort(MyNumeric_2(a,b,c));
arr.sort(MyNumeric_1(a,b,c));
*/
// __________________________________________________________________________
//2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

/*
let color = prompt('Введи колір світлофора!','вводь укр мовою');
console.log(color);//червоний

if(color == 'зелений'){
     alert('Йди!');
}
else if(color == 'жовтий'){
     alert('Зачекай!');
 }
else if(color == 'червоний'){
    alert('Стій!');
 }
else{
    alert('Роби що хоч!');
}
*/
// __________________________________________________________________________
//3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


/*
let color = prompt('Введи колір світлофора!','вводь укр мовою');
console.log(color);//червоний

let isRoadClear = confirm('Дорога вільна ?');

if(color == 'зелений'){

    if (isRoadClear){
        alert('Йди!');
    }
    else{
        alert('Зачекай поки порушник поїде !!!');
    }
}
else if(color == 'жовтий'){
    if(isRoadClear){
         alert('Все одно зачекай!');
    }
    else{
        alert('Зачекай!');
    }
}
else if(color == 'червоний'){
    if(isRoadClear){
       alert('Стій ще зарано!');
    }
    else{
        alert('Стій і чекай!');
    }

}
else{
    alert('Роби що хоч!');
}
*/






