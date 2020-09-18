// step 1 Get the add button

const add_button = document.querySelector('.add-button');
const item_list = document.querySelector('.total-clicks');


function buttonClicked(event) {

  //create total number of clicks
 if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("total-clicks").innerHTML = "" + localStorage.clickcount;
  }

}
