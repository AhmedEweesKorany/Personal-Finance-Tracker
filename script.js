let addBtn=document.querySelector(".container button")
let conCards=document.getElementsByClassName("container-cards")[0]

let divInput=document.getElementsByClassName("div-input")[0]
let input1=document.getElementsByClassName("input1")[0]
let input2=document.getElementsByClassName("input2")[0]
let categoryTitle;
let transNum;



function addCategory(){

    categoryTitle=input1.value
    transNum=input2.value

     


      conCards.innerHTML +=`<div class="card">
                
                <div class="card-top">
                  <h2>${categoryTitle}</h2>
                  <p>${transNum} transactions</p>
                </div>
                

                <hr>


                <div class="card-icons">

                <i class="fa-solid fa-pen"></i>
                <i class="fa-regular fa-trash-can"></i>

                </div>
            </div>`



            input1.value=""
            input2.value=""
}









addBtn.addEventListener("click",addCategory)
