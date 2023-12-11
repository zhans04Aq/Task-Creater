function showTableDialog() {
    // Отображаем модальное окно для ввода данных
    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Table Name: ";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameLabel.appendChild(nameInput);

    const colorLabel = document.createElement("label");
    colorLabel.innerText = "Table Color: ";
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorLabel.appendChild(colorInput);

    const createButton = document.createElement("button");
    createButton.innerText = "Create Table";
    createButton.onclick = function () {
        createTable(nameInput.value, colorInput.value);
        modal.style.display = "none";
    };

    const closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    modalContent.appendChild(nameLabel);
    modalContent.appendChild(document.createElement("br"));
    modalContent.appendChild(colorLabel);
    modalContent.appendChild(document.createElement("br"));
    modalContent.appendChild(createButton);
    modalContent.appendChild(closeButton);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = "flex";
}

function createTable(tableName, tableColor) {
    // Создаем элемент таблицы
    const table = document.createElement("table");
    table.style.backgroundColor = tableColor;

    // Создаем заголовок таблицы
    const thead = table.createTHead();
    const th = thead.insertRow().insertCell();
    th.innerText = tableName;
    th.colSpan = 2;

    // Создаем тело таблицы
    const tbody = table.createTBody();

    // Добавляем две строки в тело таблицы
    for (let i = 0; i < 2; i++) {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.innerText = `Row ${i + 1}, Col 1`;
        cell2.innerText = `Row ${i + 1}, Col 2`;
    }

    // Создаем кнопку удаления внутри таблицы
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Table";
    deleteButton.onclick = function () {
        table.remove();
    };

    // Добавляем кнопку удаления в последнюю ячейку заголовка
    const thDeleteCell = thead.rows[0].insertCell();
    thDeleteCell.appendChild(deleteButton);

    // Добавляем таблицу на страницу
    document.body.appendChild(table);
}
