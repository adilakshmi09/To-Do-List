function addCloseButtons(){
    const listItems = document.getElementsByTagName("li");

    for(let i=0; i<listItems.length ;i++){
        const item=listItems[i];
        const deletButton = document.createElement("button");
        deletButton.innerHTML="DELETE";
        deletButton.addEventListener("click",()=>{
            item.remove();
        });
        item.appendChild(deletButton);
    }
}
addCloseButtons();








function addTodo(){
    const inputElement=document.getElementById("myInput");
    if(!inputElement.value){
        alert("input value is required");
    } else{
    const newTodo= document.createElement("Li");
    newTodo.innerHTML = inputElement.value;
    const unOrderlist = document.getElementById("myUL");
    unOrderlist.prepend(newTodo);
    //unOrderlist.appendChild(newTodo);
    inputElement.value =" ";
    }

}