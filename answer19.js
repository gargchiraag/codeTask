// Write a program to find out the income tax amount of a person.
// Program should accept annual income of a person
// Output the amount of tax he has to pay

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
