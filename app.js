let userinput = document.getElementById("userinput");
let allwork = document.getElementById("allwork");

function uploadWork() {
    if (userinput.value !== "") {
        allwork.innerHTML += `
<div class="container bg-success">
<h2 >
  ${userinput.value}
</h2>
<input type="text" id="updatevalue" style ="display:none;">
<span class="edit" >
<button style ="display:none;" onclick="update(this)" id="btnwork">UPDATE</button>
<button onclick="edit(this)" id="btnwork">EDIT</button>
<button onclick ="deleted(this)" id="btnwork"> DELETE</button>
</span>
</div>
`
    } 
    else {
        Swal.fire({
            icon: "error",
            title: "First You Add The Todo",
            text: "Add First todo",
          });
    }
    userinput.value =""
}
function edit(e){
let mybtnUpdate = e.parentNode.parentNode.childNodes[5].childNodes[1]
let mybtnEdit= e.parentNode.parentNode.childNodes[5].childNodes[3]
let myUpdateInp = e.parentNode.parentNode.childNodes[3]
mybtnUpdate.style.display = "block";
myUpdateInp.style.display ="block";
mybtnEdit.style.display = "none";
console.log(e.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue)
}

function update(o){
    o.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue = updatevalue.value;
    let myUpdateInp1 = o.parentNode.parentNode.childNodes[3];
    let mybtnEdit1 = o.parentNode.parentNode.childNodes[5].childNodes[3]
    let mybtnUpdate1 = o.parentNode.parentNode.childNodes[5].childNodes[1]
    console.log(myUpdateInp1)
    myUpdateInp1.style.display ="none";
    mybtnEdit1.style.display   ="block";
    mybtnUpdate1.style.display ="none";
    updatevalue.value = "";
}

function deleted(l){
// allwork.style.display = "none";
 
// console.log(l.parentNode.parentNode)
let allremove = l.parentNode.parentNode;
allremove.remove();
}

