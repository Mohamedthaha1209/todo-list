function AddToDo(){
    var todoinpute=document.getElementById("todo input");
    var todoText=todoinpute.value.trim();

    if(todoText!==""){
        var li=document.createElement("li");
        li.textContent=todoText;

var deleteButton=document.createElement("button")
deleteButton.textContent="Delete";
deleteButton.classList.add("detlet-btn");
deleteButton.onclick=function(){
    li.remove();
}


li.appendChild(deleteButton);


document.getElementById("todo-list").appendChild(li)

todoinpute.value="";
    }
}