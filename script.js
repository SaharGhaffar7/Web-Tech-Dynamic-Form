function generateForm() {
    const txt = +document.getElementById("txt").value;
    const chk = +document.getElementById("chk").value;
    const rdo = +document.getElementById("rdo").value;
    const cmb = +document.getElementById("cmb").value;
    const file = +document.getElementById("file").value;

    const formArea = document.getElementById("formArea");
    formArea.innerHTML = "";

    // TEXT
    formArea.innerHTML += "<b>Text Box:</b><br>";
    for (let i = 0; i < txt; i++)
        formArea.innerHTML += `<input type="text"><br>`;
    formArea.innerHTML += "<br>";

    // CHECKBOX
    formArea.innerHTML += "<b>Check Box:</b><br>";
    for (let i = 0; i < chk; i++)
        formArea.innerHTML += `<input type="checkbox"> `;
    formArea.innerHTML += "<br><br>";

    // RADIO
    formArea.innerHTML += "<b>Radio Buttons:</b><br>";
    for (let i = 0; i < rdo; i++)
        formArea.innerHTML += `<input type="radio" name="grp"> `;
    formArea.innerHTML += "<br><br>";

    // COMBO
    formArea.innerHTML += "<b>Combo Box:</b><br>";
    for (let i = 0; i < cmb; i++)
        formArea.innerHTML += `
            <select>
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
            </select><br>
        `;
    formArea.innerHTML += "<br>";

    // FILE
    formArea.innerHTML += "<b>Upload Files:</b><br>";
    for (let i = 0; i < file; i++)
        formArea.innerHTML += `<input type="file"><br>`;

    // SWITCH TO PAGE 2
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function goBack() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");
}
