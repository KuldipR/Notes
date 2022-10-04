displayNotes();
important();


let addbtn = document.getElementById(`addBtn`)
addbtn.addEventListener(`click`, function (e) {
    let addTxt = document.getElementById(`addText`);
    let notes = localStorage.getItem(`notes`);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj)

    displayNotes();
})

function displayNotes() {

    let notes = localStorage.getItem(`notes`);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = ``;

    notesobj.forEach((element, index) => {
        let todayDate= new Date();
        
        html += `<div class="notecard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Date : ${todayDate} </h5>
        <p class="card-text" id ="para${index}">${element}</p>
        <button id="${index}" onclick="important(this.id)" class="btn btn-primary ">Important</button>
         <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary ">Delete</button>
         
             </div>
             </div> `

    });
    let notesElm = document.getElementById(`notes`);
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Make New Notes`
    }
}

function deleteNotes(index) {
    console.log(`I am deleting note`, index);
    let notes = localStorage.getItem(`notes`);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    displayNotes();


}


let search = document.getElementById(`searchTxt`);
search.addEventListener(`input`, function () {
    let inputVal = search.value;
    // console.log(`input event fire`, inputVal)
    let noteCards = document.getElementsByClassName(`notecard`);
    // console.log(noteCards);
    Array.from(noteCards).forEach(function (element) {
          let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = `none`
        }

    })

})

function important (index){
    // console.log(index)
//     console.log(`Important`,index);
  let  imp = document.getElementById(`para${index}`);
  console.log(imp)
//   imp.className += ` red`;
  
  imp.classList.add("red");
  localStorage.setItem(imp.ClassList, `red`);

}