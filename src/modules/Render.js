import { format } from "date-fns";

const projectEntry = document.querySelector(".project--list-entry.input-item");
const taskEntry = document.querySelector(".task--list-entry.input-item");

const projectList = document.querySelector("ul.project--list");
const taskList = document.querySelector("ul.task--list");

const projectTitle = document.querySelector(".project--title");
const projectDescription = document.querySelector(".project--description");

const addProjectButton = document.querySelector(".add-project.button-add");
const addTaskButton = document.querySelector(".project--add-task.button-add");

export default class Render {
  // Add project button functions:
  static enableAddProject() {
    // Show add project button
    projectEntry.style.display = "flex";
    addProjectButton.innerHTML = "Dismiss";
    addProjectButton.classList.add("button-add-plain");
  }

  static disableAddProject() {
    // Hide add project button
    projectEntry.style.display = "none";
    addProjectButton.innerHTML = "Add Project";
    addProjectButton.classList.remove("button-add-plain");
  }
  static toggleAddProject() {
    // Toggle add project button visibility
    if (projectEntry.style.display == "none") {
      this.enableAddProject();
    } else {
      this.disableAddProject();
    }
  }

  // Add task button functions:
  static enableAddTask() {
    // Hide add task button
    taskEntry.style.display = "flex";
    addTaskButton.innerHTML = "Dismiss";
    addTaskButton.classList.add("button-add-plain");
  }
  static disableAddTask() {
    // Hide add task button
    taskEntry.style.display = "none";
    addTaskButton.innerHTML = "Add Task";
    addTaskButton.classList.remove("button-add-plain");
  }
  static toggleAddTask() {
    // Toggle add task button visibility
    if (taskEntry.style.display == "none") {
      this.enableAddTask();
    } else {
      this.disableAddTask();
    }
  }

  static loadProjects(projects, todo) {
    // Render the project list.

    // Clear the project list.
    projectList.innerHTML = "";
    for (const project of projects) {
      // Creat item element to be added to.
      const item = document.createElement("li");
      item.classList.add("project--list-entry");
      if (project.getActive()) {
        item.classList.add("project--list-entry-highlight");
      }

      // Create title.
      const title = document.createElement("h3");
      title.classList.add("project--list-title");
      title.innerHTML = project.getTitle();
      title.onclick = () => {
        todo.handleSelectProject(project.getID());
      };
      item.appendChild(title);

      // Check if it us not the defautl project.
      if (project.getCanDelete()) {
        // Create delete button.
        const btn = document.createElement("button");
        btn.classList.add("project--delete", "button-plain");
        btn.innerHTML = "Delete";
        btn.onclick = () => {
          todo.handleDeleteProject(project.getID());
        };
        item.appendChild(btn);
      }

      projectList.prepend(item);
    }
  }

  static loadCurrentProject(project) {
    // Load the selected/ current project
    if (project) {
      projectTitle.innerHTML = project.getTitle();
      projectDescription.innerHTML = project.getDescription();
    } else {
      // In case all projects are deleted.
      projectTitle.innerHTML = "";
      projectDescription.innerHTML = "";
    }
  }

  static loadTasks(tasks, todo) {
    // Render the task list.

    // Clear the task list.
    taskList.innerHTML = "";
    for (const task of tasks) {
      // Creat item element to be added to
      const item = document.createElement("li");
      item.classList.add("task--list-entry");

      // Create title.
      const title = document.createElement("h3");
      title.classList.add("task--list-title");
      title.innerHTML = task.getTitle();
      item.appendChild(title);

      // Create div container for date and delete button
      const div = document.createElement("div");

      // Create date
      const date = document.createElement("p");
      date.classList.add("task--due-date");
      // convert date string into a date the form of "Jan 12th"
      const dateObject = new Date(task.getDate());
      const dateFormated = format(dateObject, "do MMM yyyy");
      date.innerHTML = dateFormated;
      div.appendChild(date);

      // const btnEdit = document.createElement('button')
      // btnEdit.classList.add("task--edit", "button-plain")
      // btnEdit.innerHTML = "Edit"
      // btnEdit.onclick = ()=>{
      //     todo.handleEditTask(task.id)
      // }
      // div.appendChild(btnEdit)

      // Create delete button
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("task--delete", "button-plain");
      btnDelete.innerHTML = "Delete";
      btnDelete.onclick = () => {
        todo.handleDeleteTask(task.id);
      };
      div.appendChild(btnDelete);

      item.appendChild(div);

      taskList.prepend(item);
    }
  }
}
