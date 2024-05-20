const addProject = document.querySelector(".add-project");

const createProject = document.querySelector("#input-project");
const createProjectTitle = document.querySelector("#input-project-title");

// const editProject = document.querySelector(".project--edit")
const addTask = document.querySelector(".project--add-task");

const createTask = document.querySelector("#input-task");
const createTaskTitle = document.querySelector("#input-task-title");
const createTaskDate = document.querySelector("#input-task-date");

export default class StaticListeners {
  static assignAllStaticListeners(todo) {
    this.assignAddProject(todo);
    this.assignCreateProject(todo);
    this.assignAddTask(todo);
    this.assignCreateTask(todo);
  }

  static assignAddProject(todo) {
    addProject.addEventListener("click", () => {
      createProject.reset();
      todo.handleAddProject();
    });
  }

  static assignCreateProject(todo) {
    createProject.addEventListener("submit", (e) => {
      e.preventDefault();
      let title = createProjectTitle.value;
      createProject.reset();

      todo.handleCreateProject(title);
    });
  }

  static assignAddTask(todo) {
    addTask.addEventListener("click", () => {
      createTask.reset();
      todo.handleAddTask();
    });
  }

  static assignCreateTask(todo) {
    createTask.addEventListener("submit", (e) => {
      e.preventDefault();

      let title = createTaskTitle.value;
      let date = createTaskDate.value;
      createProject.reset();

      todo.handleCreateTask(title, date);
    });
  }
}
