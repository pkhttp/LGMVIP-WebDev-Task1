
function existingTaskList () {
  document.getElementById("li").innerHTML = localStorage.getItem("key");
}


function newElement() {
  var li = document.createElement("li");
  li.className = "list-item";
  var inputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  var delBtn = document.createElement("span");
  delBtn.className = "delBtn";
  delBtn.innerHTML = "<i class='fas fa-trash'></i>";
  li.appendChild(delBtn);


  var checkedBtn = document.createElement("span");
  checkedBtn.className = "checkedBtn";
  checkedBtn.innerHTML = "<i class='fas fa-check'></i>";
  li.appendChild(checkedBtn);


  checkedBtn.addEventListener("click", toggleChecked);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("taskUL").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
};


var task = document.querySelector("#taskUL");
task.addEventListener("click", removeTask);
function removeTask(e){
if(e.target.parentElement.classList.contains('delBtn')){
  if(confirm("Are you sure you want to delete this task?")){
    e.target.parentElement.parentElement.remove();
  
    localStorage.removeItem("key");
  }
}
}

function toggleChecked (e) {
  e.target.parentElement.parentElement.classList.toggle('taskCompleted');
}



function addToLocalStorage () {
  localStorage.setItem("key", "value");
}


var input = document.querySelector("#taskInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector(".addBtn").click();
    }
});
