

formContent = document.getElementById("formContent")
formTitle = document.getElementById("formTitle")

formContent.onkeyup =   function () {
        localStorage.setItem("formContent.localstorage", formContent.value)
}

formTitle.onkeyup = function () {
  localStorage.setItem("formTitle.localstorage", formTitle.value);
};

window.onload
{
    formTitle.value = localStorage.getItem("formTitle.localstorage");
    formContent.value = localStorage.getItem("formContent.localstorage")


}
