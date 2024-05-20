// Uppermost data type - all data is saved to one data instance.
export default class Data {
  constructor() {
    this.projects = [];
    this.currentProject = null;
    this.index = 0;
  }

  setIndex(index) {
    this.index = index;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(id) {
    return this.projects.find((project) => project.getID() == id);
  }

  addProject(project) {
    project.setID(this.index++);
    this.projects.push(project);
    this.setCurrentProject(project);
  }

  setCurrentProject(project) {
    if (this.getCurrentProject()) {
      this.getCurrentProject().setActive(false);
    }
    project.setActive(true);
    this.currentProject = project;
  }

  getCurrentProject() {
    return this.currentProject;
  }

  deleteProject(id) {
    this.setProjects(
      this.getProjects().filter((project) => project.getID() !== id)
    );
    if (this.getCurrentProject().getID() == id) {
      this.setCurrentProject(this.projects[this.projects.length - 1]);
    }
  }
}
