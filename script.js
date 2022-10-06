displayNotes();


let addbtn = document.getElementById(`addBtn`)
addbtn.addEventListener(`click`, function (e) {
    let addTxt = document.getElementById(`addText`);
    let addTitle = document.getElementById(`addTitle`);

    let notes = localStorage.getItem(`notes`);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        Title: addTitle.value,
        Text: addTxt.value,
        important: false
    }
    notesobj.push(myobj);
    
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addTitle.value="";
    addTxt.value = "";
    

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
    console.log(notesobj)

    let html = ``;

    Array.from(notesobj).forEach((element, index) => {
   
        
        html += `<div class="notecard mx-2 my-2 ${element.important===true ? "red" :"" } " style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"> ${element.Title} </h5>
        <p class="card-text" id ="para${index}">${element.Text}</p>
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
    // console.log(`I am deleting note`, index);
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
          let cardTitle = element.getElementsByTagName(`h5`)[0].innerText;

        if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = `none`
        }

    })

})

function important (index){
    // console.log(index);
    let notes = localStorage.getItem(`notes`);
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    Array.from(notesobj).forEach((element, i) => {
        if(i == index){
            element.important = true;
        }

    })
    // console.log(notesobj)
    
    
    localStorage.setItem('notes', JSON.stringify(notesobj));
    
    

    displayNotes();
//   let  imp = document.getElementById(`para${index}`);
//   console.log(imp)
//   imp.className += ` red`;
  
//   imp.classList.add("red");
//     const newData = {
//         important: true
//     }
//     notesobj[index] = 

}
