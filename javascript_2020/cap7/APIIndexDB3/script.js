/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos
        Libreria indexedDB
            https://dexie.org/
*/

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
        /*  const objectStore = db.createObjectStore("tasks", {
             autoIncrement: true
         }); */
        const objectStore = db.createObjectStore("tasks", {
            keyPath: 'taskTitle'
        });
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

    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.put(data);
        request.onsuccess = () => {
            form.button.dataset.action = 'add';
            form.button.textContent = 'Add Task';
            readData();
        }

    }

    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.delete(key);
        request.onsuccess = () => {

            readData();
        }

    }

    const getData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.get(key);

        request.onsuccess = () => {
            console.log(request);
            form.task.value = request.result.taskTitle;
            form.priority.value = request.result.taskPriority;
            form.button.dataset.action = 'update';
            form.button.textContent = 'Update Task';
        }

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
                console.log(cursor.key);
                const taskTitle = document.createElement("p");
                taskTitle.textContent = cursor.value.taskTitle;
                const taskPriority = document.createElement("p");
                taskPriority.textContent = cursor.value.taskPriority;
                fragment.appendChild(taskTitle);
                fragment.appendChild(taskPriority);

                const taksUpdate = document.createElement("Button");
                taksUpdate.dataset.type = 'update';
                taksUpdate.dataset.key = cursor.key;
                taksUpdate.textContent = 'Update';
                fragment.appendChild(taksUpdate);

                const taskDelete = document.createElement("Button");
                taskDelete.textContent = 'Delete';
                taskDelete.dataset.type = 'delete';
                taskDelete.dataset.key = cursor.key;
                fragment.appendChild(taskDelete);

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

        if (e.target.button.dataset.action == "add") {
            addData(data);
        } else if (e.target.button.dataset.action == "update") {
            updateData(data);
        }

        console.log(data);
        form.reset();

    });

    tasks.addEventListener("click", (e) => {
        if (e.target.dataset.type == 'update') {
            console.log(e.target);
            console.log(e.target.dataset.key);
            getData(e.target.dataset.key);
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key);
        }

    });



}