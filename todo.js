const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        clearData();
    }
}, false);

function saveData() {
    let data = "";
    const lis = listContainer.querySelectorAll("li");
    lis.forEach(li => {
        data += li.innerHTML + "|";
    });
    let expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    document.cookie = "todoList=" + encodeURIComponent(data) + "; expires=" + expirationDate.toUTCString();
}

function showTask() {
    const cookies = document.cookie.split(';');
    let savedData = '';
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith("todoList=")) {
            savedData = decodeURIComponent(cookie.substring("todoList=".length));
            break;
        }
    }
    const tasks = savedData.split('|');
    tasks.forEach(task => {
        if (task) {
            let li = document.createElement("li");
            li.innerHTML = task;
            listContainer.appendChild(li);
        }
    });
}
showTask();

function clearData() {
    // Remove the "todoList" cookie
    document.cookie = "todoList=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}