export default class Task {
  constructor(title, date = null) {
    this.title = title;
    this.date = date;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  setID(id) {
    this.id = id;
  }

  getID() {
    return this.id;
  }
}
