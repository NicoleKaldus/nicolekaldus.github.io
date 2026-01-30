import { ProjectElement } from "./projectElement.js";
/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class RoboticsView {
    constructor() {
      // Initializes a new instance of the robotics view
    }
  
    /**
     * Renders the robotics view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      const roboticsViewElem = document.createElement("div");
      roboticsViewElem.id = "robotics-view";
  
      const roboticsContainerElem = document.createElement("div");
      roboticsContainerElem.id = "robotics-container";
  
      roboticsViewElem.appendChild(roboticsContainerElem);
  
      const cart = new Robotics();
      roboticsContainerElem.appendChild(await cart.render());
      roboticsViewElem.appendChild(roboticsContainerElem);
      return roboticsViewElem;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class Robotics {
    constructor() {
      this.roboticsElem = document.createElement("div");
    }
    async render() {
      this.roboticsElem.id = "robotics";
      this.roboticsElem.classList.add("view");
      this.roboticsElem.appendChild(
        await this.renderRobotics(), //this.cart
      );
      return this.roboticsElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderRobotics() {
      // Create the container for the robotics content
      const roboticsContentElem = document.createElement("div");
      roboticsContentElem.classList.add("project-elements");
      roboticsContentElem.classList.add("container");

      const titleRow = document.createElement("div");
      titleRow.classList.add("row");
      const pageTitle = document.createElement("h1");
      pageTitle.textContent = "Robotics";
      pageTitle.classList.add("resume-title");
      titleRow.appendChild(pageTitle);
      roboticsContentElem.appendChild(titleRow);

      const elementPropsList = [{src: "./content/drone_pic.png", href: "", title: "Gesture Controlled Drone Flight", desc: "Drone flight (wired and Bluetooth) controlled by hand-gestures, powered by ML. Tools used included a DJI-Tello Drone, ESP32-S3, and MPU6050. Code was written using both C and Python. Teammates included Austin Copley and Ben Chou."},
      {src: "./content/spectrogram.png", href: "spectrogram", title: "Wave Analysis Using Spectrograms", desc: "Analysis of spectrograms with their physical implications to better understand training of neural networks. Types of waves analyzed include audio and gesture. Tools included computer microphone, ESP32-S3, and MPU6050."}]

      elementPropsList.forEach(e => {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        const elementMaker = new ProjectElement();
        const newElement = elementMaker.render(e.src, e.href, e.title, e.desc);
        newElement.classList.add("project-element");

        newRow.appendChild(newElement);
        roboticsContentElem.appendChild(newRow);
      });

      return roboticsContentElem;
    }
  }
  