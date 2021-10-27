//Phone
const phoneIncrease = () => {
  handleProductChange(true, "phone");
};
const phoneDecrease = () => {
  handleProductChange(false, "phone");
};
//Case
const caseIncrease = () => {
  handleProductChange(true, "case");
};
const caseDecrease = () => {
  handleProductChange(false, "case");
};
//Main Function
const handleProductChange = (IsIncrease, product) => {
  const productInput = document.getElementById(product + "-input");
  const productCount = parseFloat(productInput.value);
  let newProductCount = productCount;
  if (IsIncrease === true) {
    newProductCount = productCount + 1;
  }
  if (IsIncrease === false && productCount > 0) {
    newProductCount = productCount - 1;
  }
  productInput.value = newProductCount;
  let productUpdateTotalPrice = 0;
  if (product === "phone") {
    productUpdateTotalPrice = newProductCount * 1219;
  }
  if (product === "case") {
    productUpdateTotalPrice = newProductCount * 59;
  }
  document.getElementById(product + "-price").innerHTML =
    productUpdateTotalPrice;
  totalCalculate();
};

//Total Calculate
const totalCalculate = () => {
  const phoneCount = getInputValue("phone");
  const caseCount = getInputValue("case");
  const subTotal = phoneCount * 1219 + caseCount * 59;
  document.getElementById("subTotal").innerHTML = subTotal;
  const tax = (subTotal * 5) / 100;
  document.getElementById("tax").innerHTML = tax;
  const grandTotal = subTotal + tax;
  document.getElementById("grand-total").innerHTML = grandTotal;
};
//Product Value Function
const getInputValue = (product) => {
  const productInput = document.getElementById(product + "-input");
  const productCount = parseFloat(productInput.value);
  return productCount;
};
//Check Out
const checkOut = () => {
  alert("Thanks for buying our products");
};
