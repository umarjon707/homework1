// программма учитывая время будет говорить доброе утро или вечер или день
// спрашиваете у пользователя возраст и по возрасту говорите кто он такой
// спрашиваете у пользователя какой месяц сейчас он пишет номер месяца по месяцу програма обозначает сезон
// определение декады


let age = prompt("How old are u?")
if (age <18) {
   alert ("young")
} else if (age>18){
   alert ( "man")
}


let nmоnth = prompt('Введите номер месяца'); 
let seasоns = ['Зима', 'Весна', 'Лето', 'Осень']; 
if (nmоnth >= 12 || nmоnth <= 0) nmоnth = 0;{ 
   alert(`Время года: ${seasоns[Math.floor(nmоnth / 3)]}`);
}
