const inputText = document.querySelector("#TextInput");
const unorderedList = document.querySelector("ul");
const submitButton = document.getElementById("submitBtn");
// console.log(unorderedList);
// console.log(unorderedList.innerHTML);

function submitHandler() {
    if(inputText.value == "") {
        alert("Please enter some text");
        return;
    }
    let value = inputText.value;
    const li = `
    <li id=${value}>
        <h3>${value}</h3>
        <div>
            <span class="listBtn" onclick = "editListHandler('${value}')">Edit</span>
            <span class="listBtn" onclick = "deleteListHandler('${value}')">Delete</span>
        </div>
    </li>`

    unorderedList.innerHTML += li;
    inputText.value = "";
};


function editListHandler(value) {
    const editLi = document.getElementById(value);
    // console.log(editLi);
    inputText.value = editLi.children[0].textContent;
    submitButton.textContent = "Edit";
    submitButton.setAttribute("onclick",`updateListHandler('${value}')`);
}
function updateListHandler(value) {
    const updateLi = document.getElementById(value);
    updateLi.children[0].innerHTML = inputText.value;
    updateLi.setAttribute("id",`${inputText.value}`);
    console.log(updateLi);
    console.log(updateLi.children);
    console.log(updateLi.children[0]);
    console.log(updateLi.children[1]);

    updateLi.children[1].children[0].setAttribute('onclick', `editListHandler('${inputText.value}')`)
    updateLi.children[1].children[1].setAttribute('onclick', `deleteListHandler('${inputText.value}')`)
    submitButton.textContent = "Submit";
    submitButton.setAttribute('onclick', `submitHandler()`);
    // console.log(updateLi.setAttribute("id",`${inputText.value}`));
    console.log(updateLi);
    inputText.value = "";
}
function deleteListHandler(value) {
    console.log(value);
    const deleteLi = document.getElementById(value);
    console.log(deleteLi);
    unorderedList.removeChild(deleteLi);
}
