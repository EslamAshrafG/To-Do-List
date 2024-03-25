"use strict";
const form = document.querySelector(".inputBox");
const taskInput = document.querySelector(".todo");
const addTask = document.querySelector(".add-btn");
const list = document.querySelector(".list");
const clear = document.querySelector(".clear");

function removeEl(e) {
  e.remove();
}

form.onsubmit = (e) => {
  e.preventDefault();
  const li = document.createElement("li");

  const liName = document.createElement("input");
  liName.setAttribute("readonly", "readonly");
  liName.classList.add("task-name");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.innerText = "Delete";

  const editBtn = document.createElement("span");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("task-icons");

  if (taskInput.value.length >= 1 && taskInput.value.trim() != "") {
    liName.value = taskInput.value;
    list.appendChild(li);
    li.appendChild(liName);
    li.appendChild(iconDiv);
    iconDiv.appendChild(removeBtn);
    iconDiv.appendChild(editBtn);
    taskInput.value = " ";
    removeBtn.addEventListener("click", (e) => {
      removeEl(li);
    });
    editBtn.addEventListener("click", function () {
      const save = document.createElement("button");
      save.innerText = "Save";
      save.classList.add("save");
      iconDiv.appendChild(save);

      liName.removeAttribute("readonly");
      liName.style.backgroundColor = "white";
      liName.style.color = "black";

      save.addEventListener("click", function () {
        liName.setAttribute("readonly", "readonly");
        liName.style.backgroundColor = "transparent";
        liName.style.color = "white";
        removeEl(save);
      });
    });
  }
};
clear.addEventListener("click", (e) => {
  list.innerText = "";
  taskInput.value = "";
});
