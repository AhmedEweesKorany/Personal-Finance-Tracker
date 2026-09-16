let txs = getTransactions();

let income = 0;
let expenses = 0;

for (let i = 0; i < txs.length; i++) {
  let amount = Number(txs[i].amount);
  if ((amount < 0)) continue;
  if (txs[i].type == "expense") {
    expenses = expenses + amount;
  } else {
    income = income + amount;
  }
}

let balance = income - expenses;

document.querySelector('[data-stat-value="balance"]').textContent = formatMoney(balance);
document.querySelector('[data-stat-value="income"]').textContent = formatMoney(income);
document.querySelector('[data-stat-value="expenses"]').textContent = formatMoney(expenses);
document.querySelector('[data-stat-value="savings"]').textContent = formatMoney(balance);

window.addEventListener("storage", function () {
  location.reload();
});
