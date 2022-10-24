var stock = 20;

function bookPuchase(price, amount, title) {
  if (stock >= amount) {
    let tDisc = price / amount;
    let totalPrice = price * amount;
    let afterDisc = totalPrice - tDisc;
    let tax = afterDisc / 10;
    let total = afterDisc + tax;
    console.log("Title    : ", title);
    console.log("Order    : ", amount, " pcs");
    console.log("Price    : ", price);
    console.log("Discount : ", tDisc);
    console.log("Tax      : ", tax);
    console.log("Total Price : ", total);

    for (let index = stock; index > amount; index--) {
      stock--;
      if (stock == 0) {
        break;
      }
    }
  } else if (stock > 0) {
    console.log("You can only purchase ", stock, " of the book");
  } else if (stock == 0) {
    console.log("You can't purchase this book because this book are sold out.");
  }
}

console.log("2 times purchased\n");
bookPuchase(10000, 10, "Home Alone");
console.log("\n");
bookPuchase(10000, 5, "Home Alone");
console.log("\n");
bookPuchase(10000, 10, "Home Alone");
