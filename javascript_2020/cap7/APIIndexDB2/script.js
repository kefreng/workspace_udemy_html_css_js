const indexedDB = window.indexedDB;
const task = document.getElementById("task");
const button = document.getElementById("button");
const priority = document.getElementById("priority");
const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

if (indexedDB && form) {
    let db;
    const request = indexedDB.open("tasksList", 1);
    request.onsuccess = () => {
        db = request.result;
        console.log("OPEN", db);
        readData();
    }

    request.onupgradeneeded = () => {
        db = request.result;
        console.log("Create", db);
        const objectStore = db.createObjectStore("tasks", {
            autoIncrement: true
        });
        /*  const objectStore = db.createObjectStore("tasks", {
             keyPath: 'taskTitle'
         }); */
    }

    request.onerror = (error) => {
        console.log("error", error);
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.add(data);
        readData();
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly');
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.openCursor();
        const fragment = document.createDocumentFragment();
        request.onsuccess = (e) => {
            /* console.log(e.target); */
            const cursor = e.target.result;
            if (cursor) {
                const taskTitle = document.createElement("p");
                taskTitle.textContent = cursor.value.taskTitle;
                const taskPriority = document.createElement("p");
                taskPriority.textContent = cursor.value.taskPriority;
                fragment.appendChild(taskTitle);
                fragment.appendChild(taskPriority);

                cursor.continue();
            } else {
                console.log("No more data");
                tasks.textContent = '';
                tasks.appendChild(fragment);
            }
        }


    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data);
        console.log(data);

    });

}