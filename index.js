function bookPuchase(price, amount, boolTax, title) {
  let tDisc = price / amount;
  let afterDisc = price - tDisc;
  let tax = afterDisc / 10;
  if (boolTax == true) {
    let total = afterDisc + tax;
    console.log("Title : ", title);
    console.log("Price : ", total);
  } else {
    console.log("Title : ", title);
    console.log("Price : ", afterDisc);
  }
}

console.log("With Tax");
bookPuchase(10000, 10, true, "Home Alone");

console.log("\nWithout Tax");
bookPuchase(10000, 10, false, "Home Alone");
