export default class Tab {
    constructor({ name, source, content }) {
      this.name = name;
      this.source = source;
      this.content = content;

      return this.render();
    }
    render() {
      const div = document.createElement("div");
      div.classList.add("tabDiv");

      const heading = document.createElement("h1");
      const headingText = document.createTextNode(this.name);
      heading.append(headingText);

      const button = document.createElement("i");
      button.classList.add("bi", "bi-x");
      div.append(heading, button);

      button.addEventListener("click", () => {
        div.remove();
        document.querySelector('main').classList.remove("displayNone")
        document.querySelector('main').classList.add("displayFlex")
      })
        const media = document.createElement("img");
        media.setAttribute("src", this.source);
        div.append(media);
      this.content.forEach(el => {
        const p = document.createElement("p");
        const text = document.createTextNode(el);
        p.append(text);
        div.append(p);
      });

      return div;
    }
  }