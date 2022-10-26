var stock = 20;

// Function Term of Credit
function Credit(total) {
  console.log("Terms of Credit\n---------------");
  for (let count = 2; count <= 12; count++) {
    if (count % 2 == 0) {
      let credit = total / count;
      console.log("Credit in ", count, " month = Rp.", credit, "/Month");
    }
  }
  console.log("---------------------------------------\n\n");
}

// Function Purcahse Book
function bookPurchase(price, amount, title) {
  if (stock >= amount) {
    let tDisc = price / amount;
    let totalPrice = price * amount;
    let afterDisc = totalPrice - tDisc;
    let tax = afterDisc / 10;
    let total = afterDisc + tax;
    var Pay = total;
    console.log("Title    : ", title);
    console.log("Order    : ", amount, " pcs");
    console.log("Price    : Rp.", price);
    console.log("Discount : Rp.", tDisc);
    console.log("Tax      : Rp.", tax);
    console.log("Total Price : Rp.", total);
    console.log("------------------------------\n");
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
  return Pay;
}

console.log("2 times purchased\n");
Credit(bookPurchase(10000, 16, "Home Alone"));
Credit(bookPurchase(20000, 10, "Sooner or Later"));
