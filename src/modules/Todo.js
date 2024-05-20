import Data from "./Data.js";
import Project from "./Project.js";
import Task from "./Task.js";
import Render from "./Render.js";
import StaticListeners from "./StaticListeners.js";
import LocalSave from "./LocalSave.js";

const LOADLOCAL = true;

export default class Todo {
  constructor() {
    // Check if local data exists, if so try load it.
    const localData = LOADLOCAL && LocalSave.load();

    if (localData) {
      this.data = localData;
    } else {
      // Create blank data if none is found locally.
      this.data = new Data();
      const homeProject = new Project(
        "Home",
        "Welcome to the to do app.",
        false
      );
      this.data.addProject(homeProject);
    }

    // Assing the event listeners for the static buttons in the app.
    StaticListeners.assignAllStaticListeners(this);

    // Hide the added project and task screens.
    Render.disableAddProject();
    Render.disableAddTask();

    this.update();
  }

  update() {
    // Save locally
    LocalSave.save(JSON.stringify(this.data.getProjects()));

    // Push out the latest render
    Render.loadProjects(this.data.getProjects(), this);
    Render.loadCurrentProject(this.data.getCurrentProject());

    Render.loadTasks(this.data.getCurrentProject().getTasks(), this);
  }

  // PROJECTS

  handleAddProject() {
    // Show the add project panel.
    Render.toggleAddProject();
  }

  handleCreateProject(title) {
    // Create project
    const project = new Project(title);
    this.data.addProject(project);
    // Render new project
    this.update();
    // Hide the adding panel
    Render.disableAddProject();
    Render.disableAddTask();
  }

  handleEditProject() {
    console.log("THIS IS YET TO BE IMPLEMENTED");
  }

  handleSelectProject(id) {
    // Set selected project and render
    const project = this.data.getProject(id);
    this.data.setCurrentProject(project);
    this.update();
  }

  handleDeleteProject(id) {
    // Delete project and render
    this.data.deleteProject(id);
    this.update();
  }

  // TASKS

  handleAddTask() {
    // Show the add task panel
    Render.toggleAddTask();
  }

  handleCreateTask(title, date) {
    // Create the task
    const task = new Task(title, date);
    this.data.getCurrentProject().addTask(task);
    // Render the task
    this.update();
    // Hide the adding panel
    Render.disableAddProject();
    Render.disableAddTask();
  }

  handleEditTask() {
    console.log("THIS IS YET TO BE IMPLEMENTED");
  }

  handleDeleteTask(id) {
    // Delete dask and update render
    this.data.getCurrentProject().deleteTask(id);
    this.update();
  }
}
