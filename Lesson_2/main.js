/*
//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let wallet = [1,4,5,67,987];
let wallet_string = ['hello','my','little','friend','!'];
let wallet_mix = ['age',21,true,'cool',5];

console.log(wallet);
console.log(wallet_string);
console.log(wallet_mix);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let wallet_empty = [];
wallet_empty[0] = 'cinema';
wallet_empty[1] = 12;
wallet_empty[2] = 'I`m a hero)';
wallet_empty[3] = false;
wallet_empty[4] = 4565;
wallet_empty[5] = true;

console.log(wallet_empty);*/

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0;i<10;i++){
//     document.write('<div>','Lesson 2 is cool','</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0;i<10;i++){
//     document.write('<div>',' Lesson 2 is cool - #',i,'</div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i =0;
// while (i<20){
//     document.write('<div>','<h1>','This is course while - #','</h1>','</div>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i =0;
// while (i<20){
//     document.write('<div>','<h1>','This is course while - #',i,'</h1>','</div>');
//     i++;
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let wallet = [1,3,45,6,7,889,90,4,34,67];
// for (let i = 0; i<wallet.length;i++){
//     console.log(wallet[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let wallet_string = ['my','name','is','Alona','and','I`m','a','student','Computer','sсience'];
// for (const element of wallet_string){
//     console.log(element);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (const element of wallet_mix) {
//     console.log(element);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (let i=0;i<wallet_mix.length;i++){
//     if(typeof wallet_mix[i] === 'boolean'){
//         console.log(wallet_mix[i]);
//     }
// }
// використала for of:
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (const element of wallet_mix){
//     if(typeof element === 'boolean'){
//         console.log(element);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (const element of wallet_mix){
//     if(typeof element === 'number'){
//         console.log(element);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (const element of wallet_mix){
//     if(typeof element === 'string'){
//         console.log(element);
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'sdvfbghn';
// arr[1] = 13245;
// arr[3] = true;
// arr[4] = 'dog';
// arr[5] = null;
// arr[6] = 566;
// arr[7] = 1;
// arr[8] = 'nana';
// arr.push(145);
// arr.push('Friday');
// for (const arrElement of arr) {
//     console.log(arrElement);
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let wallet_mix = ['age',21,true,'cool',5,'ho ho ho',1234, false,5465,undefined];
// for (let i = 0; i<10; i++){
//     console.log(`${i}-# `+ wallet_mix[i]);
//     document.write(i+' - # '+wallet_mix[i]+'<br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++){
//     console.log(i);
//     document.write(i+'<br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i=i+2){
//     console.log(i);
//     document.write(i+'<br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i<100; i++){
//     if(i%2===0){
//         console.log(i);
//         document.write(i+'<br>');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i<100; i++){
//     if(i%2===1){
//         console.log(i);
//         document.write(i+'<br>');
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let m1=0; m1<2;m1++){
//     for (let s1 = 0; s1 < 60; s1++) {
//         console.log(`${m1}:${s1}`);
//     }
// }

// - ?????? Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// let c2 = 0;
// let m2=0;
// let s2 = 0;
// for ( c2 = 0; c2 <= 2; c2++) {
//     for ( m2=0; m2<60;m2++){
//         for ( s2 = 0; s2 < 60; s2++) {
//             console.log(`${c2} год ${m2} хв ${s2} c`);
//
//         }
//     }
//     if (m2 === 20 && s2 === 0){
//         break;
//     }
// }

// ===============ДОДАТКОВО=========================

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let str='';
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let str='';
// let i=0;
// while (i<arr.length){
//     str = str + arr[i];
//     i++;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a','b','c'];
// let str='';
// for (const string of arr) {
//     str = str + string;
// }
// console.log(str);

// =================
// =================
// =================
// =================

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// arr.push(1,2,3);
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1,2,3];
// let arr_n = [];
// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4,5,6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4,5,6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift(0));

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// const new_arr = arr.slice(3,5);
// console.log(new_arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// const new_arr = arr.slice(-5,2);
// console.log(new_arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// const new_arr = arr.slice(0,1);
// console.log(new_arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// const n = arr.splice(3,0,'a','b','c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [2,1,45,6,78,99,54,33,24,56,77,765,10];
//
// for (let i = 0; i < arr.length; i++) {
//     Element = arr[i];
//     if (Element % 2===0){
//         console.log(Element);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [2,1,45,6,78,99,54,33,24,56,77,765,10];
// let arr2 = [];
// for (let i = 0; i < arr.length ; i++) {
//     const Element= arr[i];
//     arr2.push(Element);
// }
// console.log('2 array: ', arr2);

// - ???? Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [2,1,45,6,78,99,54,33,24,56,77,765,10];
// let arr2 = [];
//
// for (let i = 0; i < arr.length ; i++) {
//     const arrElement = arr[i];
//     for (let arr2Element of arr2) {
//         arr2Element = arrElement;
//         console.log(arr2Element)
//     }
//
// }


//============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// 1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i <arr.length){
//     console.log(arr[i]);
//     i++;
// }
// console.log(arr);

// 2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (const number of arr) {
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length){
//     if (i % 2 === 1){
//         console.log(arr[i],'index: '+i);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1){
//         console.log(arr[i],'index: '+i);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length){
//     if (arr[i] % 2 === 1){
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i <arr.length ; i++) {
//     if(arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i <arr.length ; i++) {
//     if (arr[i] % 3 === 0){
//         arr[i] = 'okten';
//     }
//     console.log(arr[i]);
// }

// 8. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1 ; i >= 0; i--) {
//     console.log(arr[i]);
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let Element_arr of arr) {
//     if (Element_arr%3 === 0){
//         Element_arr = 'okten';
//     }
//     console.log(Element_arr);
//
// }
// console.log('------------------')
// for (let Element_arr of arr) {
//      if  (Element_arr%2 === 0){
//         console.log(Element_arr);
//     }
// }
// console.log('------------------')
// let i = 0;
// while (i<arr.length){
//     if (i%2 === 1){
//         console.log(arr[i]);
//     }
//     i++;
// }
// console.log('------------------')
// for (const Element_arr of arr) {
//     console.info(Element_arr);
// }

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50 ; i++) {
//     arr[i] = i;
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
//
// }
// console.log('------------');
// let arr2 = [];
// let b = 3;
// for (let i = 0; i < 50; i++) {
//     arr2[i] = i;
//     if (arr2[i]%2 === 1){
//         console.log(arr2[i]);
//     }
//
// }

// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50 ; i++) {
//     arr[i] = i;
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
//
// }

// 2. заповнити його 50 непарними числами за допомоги циклу.
// console.log('------------');
// let arr2 = [];
// let b = 3;
// for (let i = 0; i < 50; i++) {
//     arr2[i] = i;
//     if (arr2[i]%2 === 1){
//         console.log(arr2[i]);
//     }
//
// }

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// //  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 50 ; i++) {
//     arr[i] = Math.random();
//     console.log(arr[i]);
// }
// let arr2 = [];
// for (let i = 0; i < 50 ; i++) {
//     arr2[i] = Math.floor(Math.random()*732)+8;
//     console.log(arr2[i]);
// }

    //  2. вывести на консоль  каждый третий елемент
/*let arr2 = [];
for (let i = 0; i < 20 ; i++) {
    arr2[i] = Math.floor(Math.random()*732)+8;
}
console.log(arr2);
console.log('------2 -----')
for (let j = 3; j < 20; j = j+3) {
    console.log(arr2[j]);
}
    //  3. вывести на консоль  каждый третий елемент
    //  но при условии что его значение является парным.
console.log('------3 -----')
for (let j = 3; j < 20; j = j+3) {
    if (arr2[j]%2 === 0){
        console.log(arr2[j]);
    }
}

    //  4. вывести на консоль  каждый третий елемент
    //  но при условии что он имеет парное значение и
    //  записать их в другой массив.
console.log('------4 -----')
let new_arr2 = [];
 for (let j = 3; j < 20; j = j+3) {
    if (arr2[j]%2 === 0){
        const  Elem = arr2[j];
        new_arr2.push(Elem);
        console.log(Elem);
    }
}
 console.log(new_arr2);
    //  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
console.log('------4 -----')
for (let i = 0; i < 20 ; i++) {
    if (arr2[i]%2 === 0){
        console.log(arr2[i-1]);
    }
}*/

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let Ser = 0;
// let sum = 0;
// for (let i = 0; i < arr.length ; i++) {
//     sum += arr[i];
// }
// console.log(sum);
// Ser = sum/arr.length;
// console.log(Ser);

// 3 створити масив з рандомними значеннями, помножити всі
// його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let arr2 = [];
// for (let i = 0; i < 25 ; i++) {
//     arr[i] = Math.floor(Math.random()*11);
//     arr2[i] = arr[i]*5;
//
// }
// console.log('arr - ',arr);
// console.log('arr2 - ',arr2);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.
// let arr = [23,45,'sdf',true, 56,'Emma',2,false,'my name is ',33];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if( typeof (arr[i]) === 'number'){
//         const Element = arr[i];
//         arr2.push(Element);
//         console.log(Element);
//     }
// }
//  console.log(arr2);






