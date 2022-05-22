var arr1 = [];
var arr2 = [];


var myTask = document.getElementById("myTask");
var date = document.getElementById("date1");
var time = document.getElementById("time1");
var myTable = document.getElementById("tbdy");

function add_task() {
    if (localStorage.getItem("tasks")) {
        let data = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < data.length; i++) {
            let taskLabel = document.createElement("label");
            let dateLabel = document.createElement("label");
            let timeLabel = document.createElement("label");
            var delBtn = document.createElement("button");

            delBtn.innerHTML = "DELETE";
            delBtn.className = "deleteBtn";
            delBtn.addEventListener("click", () => {
                var td = event.target.parentNode;
                var tr = td.parentNode;
                tr.parentNode.removeChild(tr);
                arr1.splice(i, 1);
                localStorage.setItem("tasks", JSON.stringify(arr1));
            });

            let taskTd = document.createElement("td");
            let dateTd = document.createElement("td");
            let timeTd = document.createElement("td");
            let button1Td = document.createElement("td");
            let row = document.createElement("tr");
            row.addEventListener("mouseenter", () => {
                delBtn.validity = "visible";
            });

            taskLabel.textContent = data[i].task_content;
            dateLabel.textContent = data[i].task_date;
            timeLabel.textContent = data[i].task_time;


            taskTd.appendChild(taskLabel);
            dateTd.appendChild(dateLabel);
            timeTd.appendChild(timeLabel);
            button1Td.appendChild(delBtn);

            row.appendChild(taskTd);
            row.appendChild(dateTd);
            row.appendChild(timeTd);
            row.appendChild(button1Td);

            myTable.appendChild(row);

            arr1.push(data[i]);
            localStorage.setItem("tasks", JSON.stringify(arr1));
        }
    }
    else {
        alert("no data");
    }
}

add_task();

// date valodation function
function dateValidation(input) {
    var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (!input.match(reg)) {
        alert("Please enter dd/mm/yyyy");
        return true;
    }
}
// time valodation function
function timeValidation(input) {
    var reg = /([0-1][0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])/;
    if (!input.match(reg)) {
        alert("Please enter dd/mm/yyyy");
        return true;
    }
}


function addtotable(obj) {
    let taskLabel = document.createElement("label");
    let dateLabel = document.createElement("label");
    let timeLabel = document.createElement("label");
    var btnArr = [];
    var delBtn = document.createElement("button");
    btnArr.push(delBtn);
    delBtn.innerHTML = "DELETE";
    delBtn.className = "deleteBtn";
    delBtn.addEventListener("click", () => {
        var td = event.target.parentNode;
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
        for (let i = 0; i < btnArr.length; i++) {

            arr1.splice(row.rowIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(arr1));
        }


    });

    let taskTd = document.createElement("td");
    let dateTd = document.createElement("td");
    let timeTd = document.createElement("td");
    let button1Td = document.createElement("td");
    let row = document.createElement("tr");
    row.addEventListener("mouseenter", () => {
        delBtn.validity = "visible";
    });


    taskLabel.textContent = obj.task_content;
    dateLabel.textContent = obj.task_date;
    timeLabel.textContent = obj.task_time;

    taskTd.appendChild(taskLabel);
    dateTd.appendChild(dateLabel);
    timeTd.appendChild(timeLabel);

    button1Td.appendChild(delBtn);

    row.appendChild(taskTd);
    row.appendChild(dateTd);
    row.appendChild(timeTd);

    row.appendChild(button1Td);

    myTable.appendChild(row);


}


document.getElementById("add").addEventListener("click", () => {
    if (myTask.value == "" || myTask.value == null || date.value == "" || date.value == null || time.value == "" || time.value == null) {
        alert("you don't have info in all inputs !!");
        myTask.value = "";
        date.value = "";
        time.value = "";
        return;
    }

    // if (dateValidation(date.value) == true) {
    //     myTask.value = "";
    //     date.value = "";
    //     time.value = "";
    //     return
    // }

    // if (timeValidation(time.value) == true) {
    //     myTask.value = "";
    //     date.value = "";
    //     time.value = "";
    //     return
    // }
    var obj1 = {
        task_content: myTask.value,
        task_date: date.value,
        task_time: time.value,

    }
    addtotable(obj1);
    arr1.push(obj1);
    localStorage.setItem("tasks", JSON.stringify(arr1));
    myTask.value = "";
    date.value = "";
    time.value = "";



});



document.getElementById("clear").addEventListener("click", () => {
    var removeTab = document.getElementById("tbdy");
    var parentEl = removeTab.parentElement;
    parentEl.removeChild(removeTab);
    localStorage.removeItem("tasks");

    myTask.value = "";
    date.value = "";
    time.value = "";
});