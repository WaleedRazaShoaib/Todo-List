// ALL IDS GET TO SHOW THE SIMPLE ALL WORK INNER HTML

let userinput = document.getElementById("userinput");
let allwork = document.getElementById("allwork");
let LogOutbtn = document.getElementById("LogOutbtn");
let  btnwork = document.getElementById("btnwork")


// 
const LogOut = ()=>{
userinput.style.display="none"
}
LogOutbtn.addEventListener("click",LogOut)

// FUNCTION TO ADD WORK ON EMPTY DIV ON HTML

const addtodo = () => {
    // CONDITION CHECK IF VALUE NOT EQUAL TO "" SO DO THIS WORK
    if (userinput.value.trim() !== "") {
        allwork.innerHTML += `
        <div class="container" >
        <h2>${userinput.value}</h2>
<input type="text" id="updatevalue" class ="updateInput" placeholder="Write the Edit Todo"style ="display:none;">
<span class="edit">
<button style ="display:none;" onclick="update(this)" id="btnwork">UPDATE</button>
<button onclick="edit(this)" id="btnwork">EDIT</button>
<button onclick ="deleted(this)" id="btnwork"> DELETE</button>
</span>
</div>
`
    }
    // AND IF CONDITION IS NOT RUNING ELSE CONDITION RUN
    else {
        Swal.fire({
            icon: "error",
            title: "First You Add The Todo",
            text: "Add First todo",
        });
    }
    //  AFTER THE ADD ON TODO VALUE SHOULD BE "" STRING
    userinput.value = ""
}
btnwork.addEventListener("click",addtodo)

// FUNCTION TO EDIT THE TODO VALUE

function edit(e) {
    let mybtnUpdate = e.parentNode.parentNode.childNodes[5].childNodes[1]
    let mybtnEdit = e.parentNode.parentNode.childNodes[5].childNodes[3]
    let myUpdateInp = e.parentNode.parentNode.childNodes[3]
    mybtnUpdate.style.display = "block";
    myUpdateInp.style.display = "block";
    mybtnEdit.style.display = "none";
    console.log(e.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue)
}

// FUNCTION TO UPDATE THE TODO  VALUE 

function update(o) {
    if (updatevalue.value.trim() !== "") {
        o.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue = updatevalue.value;
    }
    else {
        Swal.fire({
            icon: "error",
            title: "PLEASE WRITE SOMETHING TO UPDATE VALUE",

        });

    }

    let myUpdateInp1 = o.parentNode.parentNode.childNodes[3];
    let mybtnEdit1 = o.parentNode.parentNode.childNodes[5].childNodes[3]
    let mybtnUpdate1 = o.parentNode.parentNode.childNodes[5].childNodes[1]
    console.log(myUpdateInp1)
    myUpdateInp1.style.display = "none";
    mybtnEdit1.style.display = "block";
    mybtnUpdate1.style.display = "none";
    updatevalue.value = "";
}
// FUNCTION TO DELETE THE VALUE OF TODO

function deleted(l) {
    // allwork.style.display = "none";
    let allremove = l.parentNode.parentNode;
    allremove.remove();
}

