const openButton = document.getElementById('open');
// let isOpen = false;
const listItems = document.getElementById('dropdownlist');

openButton.addEventListener("click", ()=>{
    listItems.classList.toggle('hidden');
})