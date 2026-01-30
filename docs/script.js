import { HomeView } from "./homeView.js";
import { RoboticsView } from "./roboticsView.js";
import { GameDevView } from "./gameDevView.js";
import { AIMLView } from "./aimlView.js";

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Updates the webpage view to the specified viewID
   * @async
   * @function navigate
   * @param {Number} viewID ID corresponding to different application view
   */
  async function navigate(viewID) {
    const viewsElm = document.getElementById("views");
    viewsElm.innerHTML = "";
    let view = null;
    if (viewID === "robotics") {
      view = new RoboticsView();
    } else if (viewID === "gameDev") {
      view = new GameDevView();
    } else if (viewID === "aiml") {
      view = new AIMLView();
    } else if (viewID === "spectrogram") {
      console.log("rendering what i want")
      view = new SpectrogramView();
    } else {
      view = new HomeView();
    }
    viewsElm.appendChild(await view.render());
  }
  /**
   * Replaces the # in href elements of html objects to "" and updates them to make them update our view to the specified viewID
   * @function setLinks
   * @param {HTMLElement} links HTML object that contains href elements
   */
  function setLinks(links) {
    links.forEach((link) => {
        if(link.innerHTML != "Resume"){
            link.addEventListener("click", async (e) => {
                e.preventDefault();
                const href = e.target.getAttribute("href");
                if (href) {
                  const view = href.replace("#", "");
                  window.location.hash = view;
                  navigate(view);
                }
            });
        }
    });
  }

  const menu = document.getElementById("menu");
  console.log(menu.querySelectorAll("a"))
  const menuLinks = menu.querySelectorAll("a");
  setLinks(menuLinks);

  navigate("home");
});
