/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class SpectrogramView {
    constructor() {
      // Initializes a new instance of the spectrogram view
    }
  
    /**
     * Renders the spectrogram view element with all its child components.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart view element.
     */
    async render() {
      console.log("rendering spectrogram");
      const spectrogramViewElem = document.createElement("div");
      spectrogramViewElem.id = "spectrogram-view";
  
      const spectrogramContainerElem = document.createElement("div");
      spectrogramContainerElem.id = "spectrogram-container";
  
      spectrogramViewElem.appendChild(spectrogramContainerElem);
  
      const cart = new Spectrogram();
      spectrogramContainerElem.appendChild(await cart.render());
      console.log("returned rendered spectrogram");
      spectrogramViewElem.appendChild(spectrogramContainerElem);
      console.log("returning rendered spectrogram view");
      return spectrogramViewElem;
    }
  }
  
  /**
   * Represents the cart component within the cart view.
   * @class
   */
  class Spectrogram {
    constructor() {
      this.spectrogramElem = document.createElement("div");
    }
    async render() {
      console.log("rendering spectrogram");
      this.spectrogramElem.id = "spectrogram";
      this.spectrogramElem.classList.add("view");
      console.log("trying to render list");
      this.spectrogramElem.appendChild(
        await this.renderSpectrogram(), //this.cart
      );
      console.log("should have rendered");
      return this.spectrogramElem;
    }
  
    /**
     * Renders the cart component with its content.
     * @async
     * @returns {Promise<HTMLDivElement>} The rendered cart element.
     */
    async renderSpectrogram() {
      console.log("Rendering spectrogram content");
  
      const title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = "Nicole Kaldus";
    
      // Append the text content to the spectrogram content container
      spectrogramContentElem.appendChild(title);
  
      console.log("Finished rendering spectrogram content");
      return spectrogramContentElem;
    }
  
  }
  