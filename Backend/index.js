function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
let arr = new Array(8);
for(let i=0; i<8; i++){
    arr[i] = new Array(8);
    for(let j=0;j<8;j++){
      arr[i][j]=document.getElementById(10*(i+1)+(j+1));
    }
}
// arr[1][5].style.background="green";
check(arr[2][0],1,0);

function check(ev,i,j){
  if(i>0 && j<1){
    if(ev.childNodes.length > 3){
      ev.style.background="green";
    }
  }
}
