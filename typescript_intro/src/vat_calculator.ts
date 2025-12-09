const calculateBtn = document.getElementById(
  "calculate_button"
) as HTMLButtonElement;

// change the text above the input field based on the selected option
const add_text = document.getElementById("add_value") as HTMLInputElement;
const remove_text = document.getElementById("remove_value") as HTMLInputElement;
const changeText_1 = document.getElementById(
  "displayText_1"
) as HTMLButtonElement;
const changeText_2 = document.getElementById(
  "displayText_2"
) as HTMLButtonElement;
add_text.addEventListener("change", () => {
  if (add_text.checked) {
    changeText_1.textContent = "Net Amount (Price without VAT) in Euro*";
    changeText_2.textContent = "Gross Amount (Final Price )";
  }
});
remove_text.addEventListener("change", () => {
  if (remove_text.checked) {
    changeText_1.textContent = "Gross Amount (Price with VAT) in Euro*";
    changeText_2.textContent = "Net Amount (Price without VAT)";
  }
});

function calculateVAT() {
  const valueInput = document.getElementById("net_amount") as HTMLInputElement;
  const taxSelector_19 = document.getElementById("tax_19") as HTMLInputElement;
  const taxSelector_7 = document.getElementById("tax_7") as HTMLInputElement;
  const result_inGross = document.getElementById(
    "result_gross"
  ) as HTMLButtonElement;
  const result_inVat = document.getElementById(
    "result_vat"
  ) as HTMLButtonElement;

  calculateBtn.addEventListener("click", () => {
    let netAmount: number = parseFloat(valueInput.value);
    if (isNaN(netAmount)) {
      result_inVat.textContent = "Invalid input";
      result_inGross.textContent = "";
      return;
    }
    if (add_text.checked) {
      let vatAmount: number = 0;
      let grossAmount: number = 0;
      if (taxSelector_19.checked) {
        vatAmount = netAmount * 0.19;
        grossAmount = netAmount + vatAmount;
        result_inVat.textContent = vatAmount.toFixed(2) + "€";
        result_inGross.textContent = grossAmount.toFixed(2) + "€";
      } else if (taxSelector_7.checked) {
        vatAmount = netAmount * 0.07;
        grossAmount = netAmount + vatAmount;
        result_inVat.textContent = vatAmount.toFixed(2) + "€";
        result_inGross.textContent = grossAmount.toFixed(2) + "€";
      }
    } else if (remove_text.checked) {
      let vatAmount: number = 0;
      let grossAmount: number = 0;
      if (taxSelector_19.checked) {
        vatAmount = (netAmount * 19) / 119;
        grossAmount = netAmount - vatAmount;
        result_inVat.textContent = vatAmount.toFixed(2) + "€";
        result_inGross.textContent = grossAmount.toFixed(2) + "€";
      } else if (taxSelector_7.checked) {
        vatAmount = (netAmount * 7) / 107;
        grossAmount = netAmount - vatAmount;
        result_inVat.textContent = vatAmount.toFixed(2) + "€";
        result_inGross.textContent = grossAmount.toFixed(2) + "€";
      } else {
        console.log("Invalid price");
      }
    }
  });
}
calculateVAT();
