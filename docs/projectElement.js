export class ProjectElement {
  constructor() {
    this.cardElem = document.createElement("div");
    this.cardElem.classList.add("card");
  }

  /**
   * Renders a card element with a photo, title, and description.
   * @param {string} photoSrc - The source URL of the photo.
   * @param {string} pageLink - The link to the page.
   * @param {string} desc - The description for the card.
   * @returns {HTMLDivElement} The card element.
   */
  render(photoSrc, href, title, desc) {
    // Create the image element
    const img = document.createElement("img");
    img.src = photoSrc;
    img.alt = "Card Image";
    img.classList.add("card-photo");

    // Create the content container
    const contentElem = document.createElement("div");
    contentElem.classList.add("card-content");

    // Create the title (as a clickable link)
    const titleElem = document.createElement("a");
    titleElem.href = "#" + href;
    titleElem.textContent = title;
    titleElem.classList.add("card-title");

    // Create the description
    const descElem = document.createElement("p");
    descElem.textContent = desc;
    descElem.classList.add("card-desc");

    // Append the title and description to the content container
    contentElem.appendChild(titleElem);
    contentElem.appendChild(descElem);

    // this.cardElem.addEventListener('click', function() {
    //   // Redirect to a new page within the website
    //   window.location.href = '#' + href; // Replace with your new page URL
    // });

    // Append the image and content to the card element
    this.cardElem.appendChild(img);
    this.cardElem.appendChild(contentElem);

    return this.cardElem;
  }
}
