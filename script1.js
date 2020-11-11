/* Задание: (Корзина товаров)
            Вам дается ссылка на js файл ее вы подключете перед вашим script.js:
    -->
            <script src="https://proweb.uz/javaScript/receipt.js"></script>
           <!-- которая отдает function receipt() а эта функция отдает вам случайный объект 
            Например:
            {
                'Lavash': {
                    info: 'Big Cheese',
                    price: 15000
                },
                'Hot-dog': {
                    info: 'mini',
                    price: 8500
                },
                'Cola': {
                    info: '1.5 L',
                    price: 9000
                }
            } 
Вы должны при помощи цикла взять данные из этой ссылки и вывести конечную строку в console:
    Где будет выведен список заказа и в конце общая стоимость заказа сразу c доставкой.
    Должно выглядеть так
    Вы заказали Lavash Big Cheese, Hot-dog mini, Cola 1.5 L,  | Общая стоимость 41500 сумм с доставкой (9000) */


    /* var menu = receipt();
    var text = "";
    var totalPrice = 0;
    
    for (const key in menu) {
            text += `${key} ${menu[key]["info"]}, `, 
            totalPrice += menu[key]["price"] + 9000;
    } 
    console.log(`Вы заказали: ${text}| Общая стоимость заказа ${totalPrice} сум с доставкой (9000)`); */


var a = receipt()
var f = ""
var g = 0
for (const key in a) {    
       f += `${key} ${a[key]["info"]}, `
        g += a[key]["price"]
       
}
g += 9000
console.log(a);
console.log(`Вы заказали: ${f} | Общая стоимость ${g} сумм с доставкой (9000)`);
