class NavBar extends HTMLElement {
  constructor() {
    super(); 

    // Attach shadow DOM to this Web Component
    this.attachShadow({mode: 'open'});

    // Nav container (flexbox)
    let navElement = document.createElement('nav');

    // Left <section> element for logo 
    let sectionElementLeft = document.createElement('section');
    let anchorElement = document.createElement('a');
    let imageElement = document.createElement('img');
    imageElement.src = '../assets/logo-3.png';
    imageElement.alt = 'logo';
    anchorElement.appendChild(imageElement);
    sectionElementLeft.appendChild(anchorElement);

    // Centered Nav Links
    let divElement = document.createElement('div');
    let ulElement = document.createElement('ul');

    let links = ['/', '/about.html', '/projects.html', '/transflux.html', '/about.html#contact-section'];
    let pageNames = ['Home', 'About', 'Portfolio', 'Transflux', 'Contact'];

    for (let i = 0; i < links.length; i++) {
      let tempLiElement = document.createElement('li');
      let tempAElement = document.createElement('a');
      tempAElement.href = links[i];
      tempAElement.text = pageNames[i];
      tempLiElement.appendChild(tempAElement);
      ulElement.appendChild(tempLiElement)
    }

    divElement.appendChild(ulElement);

    // Right <section> element for placeholder 
    let sectionElementRight = document.createElement('section');

    // Append three sections to nav container
    navElement.appendChild(sectionElementLeft);
    navElement.appendChild(divElement);
    navElement.appendChild(sectionElementRight);

    // Styles
    let styleElement = document.createElement('style');

    styleElement.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: transparent;
    }
    html {
      font-family: 'Prompt', sans-serif;
      font-weight: 200;
      color: white;
    }
    nav {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 3%;  
    }
    section {
      width: 180px;
    }
    img {
      width: 100%;
      margin-top: 30px;
      cursor: pointer;
    }
    ul {
      list-style: none;
      display: flex;  
    }
    li {
      padding: 0px 20px;  
    }
    li a {
      font-weight: 200;
      font-size: 27px;
      color: white;
      letter-spacing: 2px;
      text-decoration: none;
      padding: 0px 20px;
    }
    li a:hover {
      text-decoration: underline white solid 2px;
    }`;

    // Append style and nav container to the Shadow DOM
    this.shadowRoot.append(navElement, styleElement);
  }
}

// Define the Class as a customElement
customElements.define('nav-bar', NavBar);