export default class Project {
  constructor(title, description = "", canDelete = true) {
    this.title = title;
    this.description = description;
    this.tasks = [];
    this.canDelete = canDelete;
    this.index = 0;
    this.active = false;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id) {
    return this.tasks.find((task) => task.getID() == id);
  }

  addTask(task) {
    task.setID(this.index++);
    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.getID() !== id);
  }

  getCanDelete() {
    return this.canDelete;
  }

  setID(id) {
    this.id = id;
  }

  getID() {
    return this.id;
  }

  setActive(active) {
    this.active = active;
  }

  getActive() {
    return this.active;
  }
}
