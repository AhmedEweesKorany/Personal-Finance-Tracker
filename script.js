let addBtn = document.querySelector(".category-head__add-btn")
let conCards = document.getElementsByClassName("category-cards")[0]

let input1 = document.getElementsByClassName("category-add-form__input--name")[0]
let input2 = document.getElementsByClassName("category-add-form__input--count")[0]
let categoryTitle;
let transNum;



function addCategory(){

    categoryTitle = input1.value.trim()
    transNum = input2.value.trim()

    if (!categoryTitle) return

      conCards.innerHTML += `<div class="category-card">

                <i class="fa-solid fa-ellipsis category-card__icon category-card__icon--other"></i>
                <div class="category-card__meta">
                  <h2 class="category-card__name">${categoryTitle}</h2>
                  <p class="category-card__count">${transNum || 0} transactions</p>
                </div>


                <hr class="category-card__divider">


                <div class="category-card__actions">

                <i class="fa-solid fa-pen"></i>
                <i class="fa-regular fa-trash-can"></i>

                </div>
            </div>`



            input1.value = ""
            input2.value = ""
}











if (addBtn && conCards && input1 && input2) {
addBtn.addEventListener("click", addCategory)
}
