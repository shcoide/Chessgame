// var originalHtml = document.documentElement.innerHTML;
//var originalStyles = document.head.querySelector('style').innerText;
// Function to reset the page to its original state
let arr = new Array(8);
for(let i=0; i<8; i++){
    arr[i] = new Array(8);
    for(let j=0;j<8;j++){
      arr[i][j]=document.getElementById(10*(i+1)+(j+1));
    }
}
console.log(arr);
// check(arr[0][0],1,0)

function resetToOriginal() { 
  console.log("Cleared")
  window.localStorage.clear();
  location.reload();
}


// Function to load the stored layout from localStorage
function loadStoredLayout(layoutIndex) {
  var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
  if (layoutIndex >= 0 && layoutIndex < storedLayouts.length) {
    document.documentElement.innerHTML = storedLayouts[layoutIndex];
  }
}

// Save the modified layout to localStorage
function saveLayoutToStorage() {
  var currentLayout = document.documentElement.innerHTML;
  var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
  storedLayouts.push(currentLayout);
  localStorage.setItem("draggedLayouts", JSON.stringify(storedLayouts));
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var droppedElement = document.getElementById(data);
  ev.target.appendChild(droppedElement);
  console.log(ev.target);
  saveLayoutToStorage();
  for(let i=0; i<8; i++){ 
    for(let j=0;j<8;j++){
      arr[i][j]=document.getElementById(10*(i+1)+(j+1));
    }
  }
  for(let i=0; i<8; i++){ 
    for(let j=0;j<8;j++){
      if(ev.target===arr[i][j]){
        check(arr[i][j],i,j);
      }
    }
  }
  console.log(ev.target.childNodes.length);
}

// Load the most recent stored layout on page load
window.onload = function() {
  var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
  if (storedLayouts.length > 0) {
    loadStoredLayout(storedLayouts.length - 1);
  }
  console.log(arr);
};
// localStorage.clear()
  function check(ev,i,j){
  console.log("check functon is called");
  if(i>0 && j<1){
    if(ev.childNodes.length > 3){
      console.log("background is green");
      console.log(ev.children[1]);      
      ev.style.background="green";
      saveLayoutToStorage()
      console.log("background is green");
    }
  }
}



