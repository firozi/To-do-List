const task=document.querySelector("input")
const add=document.querySelector("button")
const list=document.querySelector(".task ul")
function addTask(){
    if(task.value===''){
        alert('Please enter a task')
    }else{
        const ele=document.createElement("li")
        ele.innerText=task.value
        
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        ele.appendChild(span)
        list.appendChild(ele)
        task.value=""
        saveData()
    }
    
}
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        console.log("cliced")
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

})
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData()