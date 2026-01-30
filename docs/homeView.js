/**
 * Represents the view for the user's cart in the application.
 * @class
 */
export class HomeView {
  constructor() {
    // Initializes a new instance of the home view
  }

  /**
   * Renders the home view element with all its child components.
   * @async
   * @returns {Promise<HTMLDivElement>} The rendered cart view element.
   */
  async render() {
    console.log("rendering home");
    const homeViewElem = document.createElement("div");
    homeViewElem.id = "home-view";

    const homeContainerElem = document.createElement("div");
    homeContainerElem.id = "home-container";

    homeViewElem.appendChild(homeContainerElem);

    const cart = new Home();
    homeContainerElem.appendChild(await cart.render());
    console.log("returned rendered home");
    homeViewElem.appendChild(homeContainerElem);
    console.log("returning rendered home view");
    return homeViewElem;
  }
}

/**
 * Represents the cart component within the cart view.
 * @class
 */
class Home {
  constructor() {
    this.homeElem = document.createElement("div");
  }
  async render() {
    console.log("rendering home");
    this.homeElem.id = "home";
    this.homeElem.classList.add("view");
    console.log("trying to render list");
    this.homeElem.appendChild(
      await this.renderHome(), //this.cart
    );
    console.log("should have rendered");
    return this.homeElem;
  }

  /**
   * Renders the cart component with its content.
   * @async
   * @returns {Promise<HTMLDivElement>} The rendered cart element.
   */
  async renderHome() {
    console.log("Rendering home content");

    // Create the container for the home content
    const homeContentElem = document.createElement("div");
    homeContentElem.classList.add("content");

    // Create and append the profile image
    const img = document.createElement("img");
    img.src = './content/self.jpeg';
    img.alt = 'Profile Photo';
    img.classList.add('profile-photo');
    homeContentElem.appendChild(img);

    // Create and append the text content
    const textContentElem = document.createElement("div");
    textContentElem.classList.add("text-content");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Nicole Kaldus";
    textContentElem.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "I am a Masters CS student at the University of Massachusetts Amherst graduating in Fall 2025. In my graduate degree, I am focusing on robotics software engineering and AI/ML. This semester, I am exploring quantum informatics and on creating neural networks for generative AI and computer vision.";
    textContentElem.appendChild(description);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = " I am interested in learning more about applying AI/ML to drive innovation in automation and advanced systems for industries such as US defense, firmware, and enterprise technology. I am eager to contribute my knowledge to complex and large-scale challenges.";
    textContentElem.appendChild(description2);

    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "Demos of some of my favorite projects can be found on the different \"Project\" tabs on this site.";
    textContentElem.appendChild(description3);

    this.insertBreak(textContentElem, 2);

    const socialLinks = document.createElement("div");
    socialLinks.classList.add("social-links");
    textContentElem.appendChild(socialLinks);

    const email = document.createElement("a");
    email.classList.add("social-link");
    email.href = "mailto: nkaldus@gmail.com";
    email.target = "_blank";
    email.textContent = "nkaldus@gmail.com";
    socialLinks.appendChild(email);

    const linkedIn = document.createElement("a");
    linkedIn.classList.add("social-link");
    linkedIn.href = "https://www.linkedin.com/in/nicole-kaldus/";
    linkedIn.target = "_blank";
    linkedIn.textContent = "LinkedIn";
    socialLinks.appendChild(linkedIn);

    const gitHub = document.createElement("a");
    gitHub.classList.add("social-link");
    gitHub.href = "https://github.com/NicoleKaldus/";
    gitHub.target = "_blank";
    gitHub.textContent = "GitHub";
    socialLinks.appendChild(gitHub);


    // Append the text content to the home content container
    homeContentElem.appendChild(textContentElem);

    console.log("Finished rendering home content");
    return homeContentElem;
  }

  insertBreak(textElement, num=1){
    for(let i = 0; i < num; i++){
      textElement.appendChild(document.createElement("br"));
    }
  }
}
