let ICONS = {
  food: { fa: "fa-solid fa-utensils", color: "category-card__icon--food" },
  transport: { fa: "fa-solid fa-bus-simple", color: "category-card__icon--transport" },
  shopping: { fa: "fa-solid fa-bag-shopping", color: "category-card__icon--shopping" },
  fun: { fa: "fa-solid fa-children", color: "category-card__icon--fun" },
  bills: { fa: "fa-regular fa-file-lines", color: "category-card__icon--bills" },
  other: { fa: "fa-solid fa-ellipsis", color: "category-card__icon--other" }
};




function getCategories() {
  let saved = localStorage.getItem("savewise_categories");
  if (saved == null) {
    let first = [
      { id: "cat-food", name: "food", icon: "food" },
      { id: "cat-transport", name: "transportation", icon: "transport" },
      { id: "cat-shopping", name: "shopping", icon: "shopping" },
      { id: "cat-fun", name: "entertainment", icon: "fun" },
      { id: "cat-bills", name: "bills", icon: "bills" },
      { id: "cat-other", name: "other", icon: "other" }
    ];
    localStorage.setItem("savewise_categories", JSON.stringify(first));
    return first;
  }
  return JSON.parse(saved);
}



function saveCategories(list) {
  localStorage.setItem("savewise_categories", JSON.stringify(list));
}



function getTransactions() {
  let saved = localStorage.getItem("savewise_transactions");
  if (saved == null) {
    localStorage.setItem("savewise_transactions", JSON.stringify([]));
    return [];
  }
  return JSON.parse(saved);
}



function saveTransactions(list) {
  localStorage.setItem("savewise_transactions", JSON.stringify(list));
}



function makeId() {
  return "start" + Date.now();
}


function formatMoney(num) {
  num = Number(num);
  if (isNaN(num)) num = 0;

  if (Number.isInteger(num)) {
    return "$ " + num.toLocaleString("en-US");
  }
  
  return "$ " + num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
