class ListElement {
  constructor(element) {
    this.element = element;
    this.liElements = [];
  }

  static addText(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }
  update() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    for (const li of this.liElements) {
      this.element.appendChild(ListElement.addText(li));
    }
  }
  add(text) {
    this.liElements.push(text);
  }
  remove(index) {
    this.liElements.splice(index, 1);
  }
}
