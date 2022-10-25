// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const list_el = document.querySelector("#tasks");

// const task_el = document.createElement("div");
// document.getElementById("task_el)");

// const task_content_el = document.createElement("div");
// task_content_el.classList.add("content");

// task_el.appendChild(task_content_el);

// const task_input_el = document.createElement("input");
// task_input_el.classList.add("text");
// task_input_el.type = "text";
// task_input_el.value = task;

function myFunction() {
  const value = document.getElementById("new-task-input").value;

  const task_el = document.createElement("div");
  task_el.classList.add("content");

  const span_el = document.createElement("span");
  console.log(span_el);
  const checkbox_el = document.createElement("input");
  checkbox_el.type = "checkbox";
  span_el.appendChild(checkbox_el);

  const label_el = document.createElement("label");
  label_el.innerHTML = value;
  span_el.appendChild(label_el);
  span_el.addEventListener("click", function () {
    const el = this.children[1];
    el.setAttribute("class", "checked");
  });

  task_el.appendChild(span_el);

  const task_delete_el = document.createElement("button");
  task_delete_el.setAttribute("id", "delete");
  const i_el = document.createElement("i");
  i_el.setAttribute("class", "fa-solid fa-inverse fa-trash");
  task_delete_el.appendChild(i_el);
  task_delete_el.addEventListener("click", function () {
    console.log(this.parentNode.remove());
  });

  task_el.appendChild(task_delete_el);
  document.getElementById("list").appendChild(task_el);

  console.log(value);
}
