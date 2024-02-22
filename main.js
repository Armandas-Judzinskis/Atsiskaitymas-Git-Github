import Tab from "../git_github atsiskaitymas/tab.js";
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('main').classList.add("displayNone");
    document.querySelector('main').classList.remove("displayFlex");

    const buttonText = button.textContent;
    fetch('./data/data.json').then(res => res.json()).then(data => {
      let openTab = data.tabs.find(tab => tab.name === buttonText);
      const tabDiv = new Tab(openTab);
      document.querySelector('body').append(tabDiv);
    });
  });
});