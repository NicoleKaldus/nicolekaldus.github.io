import { ProjectElement } from "./projectElement.js";
/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class GameDevView {
    constructor() {
      // Initializes a new instance of the gameDev view
    }
  
    /**
     * Renders the gameDev view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      const gameDevViewElem = document.createElement("div");
      gameDevViewElem.id = "gameDev-view";
  
      const gameDevContainerElem = document.createElement("div");
      gameDevContainerElem.id = "gameDev-container";
  
      gameDevViewElem.appendChild(gameDevContainerElem);
  
      const cart = new GameDev();
      gameDevContainerElem.appendChild(await cart.render());
      gameDevViewElem.appendChild(gameDevContainerElem);
      return gameDevViewElem;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class GameDev {
    constructor() {
      this.gameDevElem = document.createElement("div");
    }
    async render() {
      this.gameDevElem.id = "gameDev";
      this.gameDevElem.classList.add("view");
      this.gameDevElem.appendChild(
        await this.renderGameDev(), //this.cart
      );
      return this.gameDevElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderGameDev() {
      // Create the container for the gameDev content
      const gameDevContentElem = document.createElement("div");
      gameDevContentElem.classList.add("project-elements");
      gameDevContentElem.classList.add("container");

      const titleRow = document.createElement("div");
      titleRow.classList.add("row");
      const pageTitle = document.createElement("h1");
      pageTitle.textContent = "Game Development";
      pageTitle.classList.add("resume-title");
      titleRow.appendChild(pageTitle);
      gameDevContentElem.appendChild(titleRow);

      const elementPropsList = [{src: "./content/game_pic.png", link: "", title: "Basic Image Classification", desc: "My first program using Unity to get used to the game engine. I created a textured 3-D map with barriers and obstacles, and a goal to reach the other side of the map."}
    ]

      elementPropsList.forEach(e => {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        const elementMaker = new ProjectElement();
        const newElement = elementMaker.render(e.src, e.link, e.title, e.desc);
        newElement.classList.add("project-element");

        newRow.appendChild(newElement);
        gameDevContentElem.appendChild(newRow);
      });

      return gameDevContentElem;
    }
  }