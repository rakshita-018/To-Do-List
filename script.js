let inputBox = document.getElementById("inputBox");
let taskContainer = document.getElementById("task-container");
let addButtton = document.getElementById("add-button");

addButtton.addEventListener("click",()=>{
    if(inputBox.value ===""){
        alert("Must write");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveTask();
});

taskContainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveTask();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveTask();
    }
});
 
let saveTask = ()=>{
    localStorage.setItem("data", taskContainer.innerHTML);
};
let showTask = ()=>{
    taskContainer.innerHTML=localStorage.getItem("data");
};
showTask();