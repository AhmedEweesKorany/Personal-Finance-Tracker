let cardsBox = document.querySelector(".category-cards");
let nameInput = document.querySelector(".category-add-form__input--name");
let iconInput = document.querySelector(".category-add-form__input--icon");
let addBtn = document.querySelector(".category-head__add-btn");
let editId = null;

function renderCategories() {
  let cats = getCategories();
  let txs = getTransactions();

  let html = "";
  for (let i = 0; i < cats.length; i++) {
    let look = ICONS[cats[i].icon];

  
    let word = "transactions";
    
    html += '<div class="category-card" data-id="' + cats[i].id + '">';
    html += '<i class="' + look.fa + ' category-card__icon ' + look.color + '"></i>';
    html += '<div class="category-card__meta">';
    html += '<h2 class="category-card__name">' + cats[i].name + '</h2>';
    html += '</div>';
    html += '<p class="category-card__percent"></p>';
    html += '<div class="category-card__actions">';
    html += '<i class="fa-solid fa-pen" data-action="edit"></i>';
    html += '<i class="fa-regular fa-trash-can" data-action="delete"></i>';
    html += '</div>';
    html += '</div>';
  }
  cardsBox.innerHTML = html;
}

function resetForm() {
  editId = null;
  nameInput.value = "";
  iconInput.value = "";
  addBtn.innerHTML = '<i class="fa-solid fa-plus"></i> add category';
}

addBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let icon = iconInput.value;
  if (name == "") {
    nameInput.focus();
    return;
  }
  if (icon == "") {
    iconInput.focus();
    return;
  }
  let cats = getCategories();
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].id != editId && cats[i].name.toLowerCase() == name.toLowerCase()) {
      nameInput.focus();
      return;
    }
  }
  if (editId == null) {
    cats.push({ id: makeId(), name: name, icon: icon });
  } else {
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id == editId) {
        cats[i].name = name;
        cats[i].icon = icon;
      }
    }
  }
  saveCategories(cats);
  resetForm();
  renderCategories();
});

nameInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});



renderCategories();
