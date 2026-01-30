import { ProjectElement } from "./projectElement.js";
/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class AIMLView {
    constructor() {
      // Initializes a new instance of the AIML view
    }
  
    /**
     * Renders the AIML view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      const AIMLViewElem = document.createElement("div");
      AIMLViewElem.id = "AIML-view";
  
      const AIMLContainerElem = document.createElement("div");
      AIMLContainerElem.id = "AIML-container";
  
      AIMLViewElem.appendChild(AIMLContainerElem);
  
      const cart = new AIML();
      AIMLContainerElem.appendChild(await cart.render());
      AIMLViewElem.appendChild(AIMLContainerElem);
      return AIMLViewElem;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class AIML {
    constructor() {
      this.AIMLElem = document.createElement("div");
    }
    async render() {
      this.AIMLElem.id = "AIML";
      this.AIMLElem.classList.add("view");
      this.AIMLElem.appendChild(
        await this.renderAIML(), //this.cart
      );
      return this.AIMLElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderAIML() {
      // Create the container for the AIML content 
      const AIMLContentElem = document.createElement("div");
      AIMLContentElem.classList.add("project-elements");
      AIMLContentElem.classList.add("container");

      const titleRow = document.createElement("div");
      titleRow.classList.add("row");
      const pageTitle = document.createElement("h1");
      pageTitle.textContent = "AI/ML";
      pageTitle.classList.add("resume-title");
      titleRow.appendChild(pageTitle);
      AIMLContentElem.appendChild(titleRow);

      const elementPropsList = [{src: "./content/CIFAR10.png", link: "", title: "Classifying CIFAR-10 Images", desc: "Classifying CIFAR-10 images from the University of Toronto using a KNN and a two layer Neural network using two types of linear classification strategies."},
      {src: "./content/tricky_data_pic.jpg", link: "", title: "Comparing ML Algorithms for \"Tricky\" Datasets", desc: "Analyzing differences in efficiency of different machine learning algorithms for large datasets with \'tricky\' datasets (high variance in data, etc). Other group members included Sejal Agarwal."},
      {src: "./content/PacMan.png", link: "", title: "PacMan RL", desc: "Compares a series of RL algorithms from value iteration to approximate Q-Learning. Pac-Man wins at a rate of over 90%"}
    ]

      elementPropsList.forEach(e => {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        const elementMaker = new ProjectElement();
        const newElement = elementMaker.render(e.src, e.link, e.title, e.desc);
        newElement.classList.add("project-element");

        newRow.appendChild(newElement);
        AIMLContentElem.appendChild(newRow);
      });

      return AIMLContentElem;
    }
  }