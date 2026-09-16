let form = document.querySelector(".tx-form");
let nameField = form.querySelector(".tx-form__input--name");
let amountField = form.querySelector(".tx-form__input--amount");
let catField = form.querySelector(".tx-form__input--category");
let dateField = form.querySelector(".tx-form__input--date");
let noteField = form.querySelector(".tx-form__input--note");
let errMsg = form.querySelector(".tx-form__error");
let saveBtn = form.querySelector(".tx-submit");
let saveHtml = saveBtn.innerHTML;
let typeBtns = document.querySelectorAll(".tx-toggle__btn");
let historyBox = document.querySelector(".tx-history__list");
let emptyMsg = document.querySelector(".tx-history__empty");
let type = "income";

function today() {
  let d = new Date();
  let m = d.getMonth() + 1;
  let day = d.getDate();
  if (m < 10) m = "0" + m;
  if (day < 10) day = "0" + day;
  return d.getFullYear() + "-" + m + "-" + day;
}

function showError(msg) {
  if (msg == "") {
    errMsg.hidden = true;
    errMsg.textContent = "";
  } else {
    errMsg.hidden = false;
    errMsg.textContent = msg;
  }
}

for (let i = 0; i < typeBtns.length; i++) {
  typeBtns[i].addEventListener("click", function () {
    type = typeBtns[i].getAttribute("data-type");
    for (let j = 0; j < typeBtns.length; j++) {
      if (typeBtns[j].getAttribute("data-type") == type) {
        typeBtns[j].classList.add("tx-toggle__btn--active");
      } else {
        typeBtns[j].classList.remove("tx-toggle__btn--active");
      }
    }
  });
}

function loadCats() {
  let cats = getCategories();
  let html = '<option value="">Select category</option>';
  if (cats.length == 0) {
    html = '<option value="">No categories - add one first</option>';
  }
  for (let i = 0; i < cats.length; i++) {
    html += '<option value="' + cats[i].id + '">' + cats[i].name + '</option>';
  }
  catField.innerHTML = html;
}

function catName(id) {
  let cats = getCategories();
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].id == id) return cats[i].name;
  }
  return "-";
}

function renderHistory() {
  let txs = getTransactions();
  txs.sort(function (a, b) {
    if (a.date == b.date) return 0;
    if (a.date < b.date) return 1;
    return -1;
  });
  let html = "";
  for (let i = 0; i < txs.length; i++) {
    let t = txs[i];
    let sign = "+";
    let cls = "tx-history__amount--income";
    let word = "Income";
    if (t.type == "expense") {
      sign = "-";
      cls = "tx-history__amount--expense";
      word = "Expense";
    }
    html += '<li class="tx-history__item" data-id="' + t.id + '">';
    html += '<div class="tx-history__info">';
    html += '<b class="tx-history__name">' + t.name + '</b>';
    html += '<span class="tx-history__meta">' + catName(t.categoryId) + " - " + t.date + " - " + word + '</span>';
    if (t.description != "") {
      html += '<span class="tx-history__note">' + t.description + '</span>';
    }
    html += '</div>';
    html += '<div class="tx-history__side">';
    html += '<b class="tx-history__amount ' + cls + '">' + sign + " " + formatMoney(t.amount) + '</b>';
    html += '<button type="button" class="tx-history__delete" data-action="delete"><i class="fa-regular fa-trash-can"></i></button>';
    html += '</div>';
    html += '</li>';
  }
  historyBox.innerHTML = html;
  if (txs.length == 0) {
    emptyMsg.style.display = "";
  } else {
    emptyMsg.style.display = "none";
  }
}

historyBox.addEventListener("click", function (e) {
  let btn = e.target.closest('[data-action="delete"]');
  if (btn == null) return;
  let li = btn.closest(".tx-history__item");
  let id = li.getAttribute("data-id");
  if (confirm("Delete this transaction?") == false) return;
  let txs = getTransactions();
  let kept = [];
  for (let i = 0; i < txs.length; i++) {
    if (txs[i].id != id) kept.push(txs[i]);
  }
  saveTransactions(kept);
  renderHistory();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  showError("");
  let name = nameField.value.trim();
  let amount = Number(amountField.value);
  let cat = catField.value;
  let date = dateField.value;
  if (date == "") date = today();
  let note = noteField.value.trim();

  if (name == "") {
    showError("Please enter a transaction name.");
    nameField.focus();
    return;
  }
  if (!(amount > 0)) {
    showError("Please enter an amount greater than zero.");
    amountField.focus();
    return;
  }
  if (cat == "") {
    showError("Please choose a category.");
    catField.focus();
    return;
  }

  let txs = getTransactions();
  txs.push({
    id: makeId(),
    name: name,
    amount: Math.round(amount * 100) / 100,
    type: type,
    categoryId: cat,
    date: date,
    description: note,
    createdAt: Date.now()
  });
  saveTransactions(txs);

  form.reset();
  type = "income";
  for (let i = 0; i < typeBtns.length; i++) {
    if (typeBtns[i].getAttribute("data-type") == "income") {
      typeBtns[i].classList.add("tx-toggle__btn--active");
    } else {
      typeBtns[i].classList.remove("tx-toggle__btn--active");
    }
  }
  dateField.value = today();
  loadCats();
  renderHistory();
  saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Saved';
  setTimeout(function () {
    saveBtn.innerHTML = saveHtml;
  }, 1500);
});

dateField.value = today();
loadCats();
renderHistory();

window.addEventListener("storage", function () {
  let keep = catField.value;
  loadCats();
  catField.value = keep;
  renderHistory();
});
