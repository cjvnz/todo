import Data from "./Data.js";
import Project from "./Project.js";
import Task from "./Task.js";

export default class LocalSave {
  static load() {
    // Function to try load locally saved data.
    const localData = localStorage.getItem("data");

    if (localData) {
      const saved = JSON.parse(localData);
      if (saved) {
        // Create the dataset compatable with the app.
        const data = new Data();
        for (const project of saved) {
          // Load projects in from saved data.
          const newProject = new Project(
            project.title,
            project.description,
            project.canDelete
          );
          for (const task of project.tasks) {
            // Load tasks in from saved data.
            const newTask = new Task(task.title, task.date);
            newProject.addTask(newTask);
          }
          data.addProject(newProject);
        }

        return data;
      }
    }

    return false;
  }

  static save(data) {
    return localStorage.setItem("data", data);
  }
}
