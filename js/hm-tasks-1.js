// !✅ Задача 4. Покупка деталей
// Опис:

// todo Оголоси функцію calculatePurchaseTotal, яка приймає два параметри:
// todo units — кількість одиниць товару (число)
// todo unitPrice — ціна за одну одиницю (число)
// todo Функція має повертати рядок:
// todo "You bought <units> items for <total> credits"
// todo  де <total> — це добуток units і unitPrice.


function calculatePurchaseTotal(units, unitPrice) {
    const total = units * unitPrice;
    return `You bought ${units} items for ${total} price`
}
// console.log(calculatePurchaseTotal(4, 250)); // "You bought 4 items for 1000 credits"
// console.log(calculatePurchaseTotal(7, 120)); // "You bought 7 items for 840 credits"
// console.log(calculatePurchaseTotal(1, 999)); // "You bought 1 item for 999 credits"


// !✅ Задача 5. Підрахунок загального балансу
// todo Опис:
// todo Оголоси функцію getBalanceMessage, яка приймає три параметри:
// todo name — ім’я користувача (рядок)
// todo balance — початковий баланс (число)
// todo spent — сума витраченого (число)
// todo Функція має повертати рядок:
// todo "User <name> has <remaining> credits left"
// todo де <remaining> — це balance - spent.



function getBalanceMessage(name, balance, spent) {
    const remaining = balance - spent;
    return `User ${name} has ${remaining} credits left` 
}

// console.log(getBalanceMessage("Ivan", 1000, 300)); // "User Ivan has 700 credits left"
// console.log(getBalanceMessage("Olena", 750, 200)); // "User Olena has 550 credits left"
// console.log(getBalanceMessage("Max", 500, 500)); // "User Max has 0 credits left"

//! ✅ Задача 6. Обчислення повної висоти елемента
//todo Опис:

// todo Оголоси функцію getElementHeight, яка приймає три параметри (рядки типу "Npx"):

// todo contentHeight — висота контенту

// todo paddingVertical — вертикальний padding (вверх і низ)

// todo borderVertical — вертикальний border (вверх і низ)

// todo Функція має повертати число — суму всіх значень (подвійний padding + подвійний border + content).

// console.log(getElementHeight("100px", "10px", "5px")); // 130
// console.log(getElementHeight("80px", "15px", "2px")); // 114
// console.log(getElementHeight("120px", "0px", "0px")); // 120

// function getElementHeight(contentHeight, paddingVertical, borderVertical) {
//      contentHeight = parseFloat(contentHeight);
//     paddingVertical = parseFloat(paddingVertical) * 2;
//     borderVertical = parseFloat(borderVertical) * 2;
//     const total = contentHeight + paddingVertical + borderVertical;
//     return total;
// }

// !✅ Задача 7. Форматування імені
// *Опис:
// *Напиши функцію formatName(name), яка приймає ім’я користувача (рядок) і повертає його з великої літери, навіть якщо воно було введено маленькими.

// *console.log(formatName("марія")); // "Марія"
// *console.log(formatName("олЕКсАНдр")); // "Олександр"
// *Підказка: використай toLowerCase() та charAt(0).toUpperCase().

function formatName(name) {
    const goToLowCase = name.toLowerCase();
    const upFirstChar = goToLowCase.charAt(0).toUpperCase();
    const lastPartWord = goToLowCase.slice(1);
    return upFirstChar + lastPartWord;
    
}

console.log(formatName("SElINYy"));
