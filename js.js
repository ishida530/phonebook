let contactList = []
let index = 0
let liIndex = 0

const liItem = document.createElement("li");
liItem.setAttribute("id", `${liIndex}`)
const add = (e) => {
    e.preventDefault();
    let newPerson = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        number: document.getElementById("phone").value
    }
    contactList.push(newPerson);
    //  if (newPerson.name == "" || newPerson.surname == "" || newPerson.number == "") return alert("wypełnij wszystkie pola")
    //alert("Stworzono kontakt!")
    document.forms[index].reset();
    // creator liItems

    ul.appendChild(liItem)
    liItem.textContent = `${newPerson.name} , ${newPerson.surname}, ${newPerson.number} `
    const list = document.querySelector("li")
    // Creator remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Usuń";
    liItem.appendChild(removeBtn);
    removeBtn.setAttribute("id", `${liIndex}`)

    //Creator Edit button
    const editBtn = document.createElement("button");

    editBtn.textContent = "Edytuj";
    liItem.appendChild(editBtn);
    editBtn.addEventListener('click', editContact)

    removeBtn.addEventListener("click", removeContact)
    liIndex++
}
const editContact = (e) => {

    const divEdit = document.querySelector(".modalEdit")
    divEdit.classList.add("active")
    const form = document.querySelector(".form")
    form.classList.add("blur")
    const ul = document.querySelector(".ul")
    ul.classList.add("blur")

    let nameEdit = document.querySelector(".name")
    let surnameEdit = document.querySelector(".surname")
    let numberEdit = document.querySelector(".phone")
    const submitBtn = document.querySelector(".submitBtn")
    const cancelBtn = document.querySelector(".cancelBtn")
    submitBtn.addEventListener("click", (e) => {

        e.preventDefault()
        if (nameEdit.value.length <= 2 || surnameEdit.value.length <= 2 || numberEdit.value === "") {
            alert("wypelnij dobrze pole")
        } else {
            this.name = nameEdit.value;
            this.surname = surnameEdit.value;
            this.number = numberEdit.value;
            const liItem = document.getElementById(`${liIndex}`)
            divEdit.classList.remove("active");
            form.classList.remove("blur")
            ul.classList.remove("blur")
        }


        liItem.textContent = `${this.name.value} , ${surnameEdit.value}, ${numberEdit.value} `
    })

}
const removeContact = (e) => {
    e.target.parentNode.remove()
    contactList = contactList.splice(liIndex, 1);
}
console.log(contactList)
const addButton = document.querySelector(".add").addEventListener('click', add)
const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector('ul')