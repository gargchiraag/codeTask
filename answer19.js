function annualIncomeCalculate(income) {
    let taxPay = 0;
    if (income <= 250000) {
        taxPay = 0;
    } else if (income <= 500000) {
        taxPay = (5.0 * income) / 100;
    } else if (income <= 1000000) {
        taxPay = (20.0 * income) / 100;
    } else if (income <= 5000000) {
        taxPay = (30.0 * income) / 100;
    }

    console.log("Income tax amount: " + taxPay);
}
var annualIncome = parseInt(prompt("Enter the Annual income: "));
annualIncomeCalculate(annualIncome);
