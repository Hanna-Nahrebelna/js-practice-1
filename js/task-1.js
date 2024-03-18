const container = document.querySelector(".js-container");

/*
[...container.children].forEach(item => {
    item.addEventListener("click", handleClick)
})

function handleClick(event) {
    const color = event.currentTarget.dataset.color;
    console.log(color);
}

тут трохи схитрили, щоб скоротити код, але так вийде незавжди
тому доведеться вішати слухача на кожну подію, що дуже збільшує кількість коду...
щоб уникнути цього, розглянемо делегування подій
*/


// Делегування подій

container.addEventListener("click", handleClick)

function handleClick(event) {

    // Перевіряємо, чи клік відбувся саме на формі.
    // Ця перевірка показує, що клік відбувся не на формі, 
    // тому ми припиняємо виконання функції та виходимо з неї.

    if (event.target === event.currentTarget) {
        return;
    }

    // Далі перевіряємо, що користувач клікнув саме на потрібний нам елемент.
    // Тут перевірка така: якщо не цей елемент 
    // (тобто не один із наших кольорових квадратів, а щось інше), 
    // то також перериваємо виконання функції.

    if (!event.target.classList.contains("js-box")) {
        return;
    }

    // Якщо ж користувач клікнув на потрібному нам місці (на одному з кольорових квадратів),
    // тоді ми можемо отримати колір і вивести його в консоль.

    const color = event.target.dataset.color;
    console.log(color);

    // console.log("currentTarget", event.currentTarget);
    // console.log("target", event.target);
}




