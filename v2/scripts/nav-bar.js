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

    // Hamburger Menu
    let hamAnchorElement = document.createElement('a');
    hamAnchorElement.id = 'ham-button';
    for (let i = 0; i < 3; i++) {
      let spanElement = document.createElement('span');
      hamAnchorElement.appendChild(spanElement);
    }
    
    // Hamburger Menu Pop Up
    let asideElement = document.createElement('aside');
    hamAnchorElement.addEventListener('click', () => {
      asideElement.classList.toggle('active')
    });

    let verticalUlElement = document.createElement('ul');

    let links = ['/', '/about.html', '/projects.html', '/transflux.html', '/about.html#contact-section'];
    let pageNames = ['Home', 'About', 'Portfolio', 'Transflux', 'Contact'];

    for (let i = 0; i < links.length; i++) {
      let tempLiElement = document.createElement('li');
      let tempAElement = document.createElement('a');
      tempAElement.href = links[i];
      tempAElement.text = pageNames[i];
      tempLiElement.appendChild(tempAElement);
      verticalUlElement.appendChild(tempLiElement)
    }

    asideElement.appendChild(verticalUlElement);

    // Centered Nav Links
    let divElement = document.createElement('div');
    let ulElement = document.createElement('ul');

    for (let i = 0; i < links.length; i++) {
      let tempLiElement = document.createElement('li');
      let tempAElement = document.createElement('a');
      tempAElement.href = links[i];
      tempAElement.text = pageNames[i];
      tempLiElement.appendChild(tempAElement);
      ulElement.appendChild(tempLiElement)
    }

    divElement.appendChild(ulElement);

    // Append sections to nav container
    navElement.appendChild(sectionElementLeft);
    navElement.appendChild(hamAnchorElement);
    navElement.appendChild(divElement);

    // Styles
    let styleElement = document.createElement('style');

    styleElement.textContent = `
    /* Main Styles */
    
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
      width: 150px;
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
    }
    
    /* Hamburger Menu */

    #ham-button {
      position: absolute;
      top: 4rem;
      right: 4rem;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 50px;
      height: 35px;
      cursor: pointer;
      z-index: 100;
    }
    span {
      height: 4px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
    }

    aside {
      background-color: black;
      position: absolute;
      width: 300px;
      height: 100%;
      right: 0;
      top: 0;
      opacity: 0.7;
      display: none;
      padding-top: 150px;
    }
    
    aside.active {
      display: block;
    }

    /* Media Query */
    
    @media (max-width: 1200px) {
      #ham-button {
        display: flex;
      }
      div {
        display: none;
        width: 100%;
        z-index: 10;
      }
      div.active {
        display: flex;
      }
      nav {
        flex-direction: column;
        align-items: flex-start;
      }
      ul {
        width: 100%;
        flex-direction: column;
      }
      li {
        padding: 8px 0px;
      }
    }`;

    // Append style and nav container to the Shadow DOM
    this.shadowRoot.append(navElement, asideElement, styleElement);
  }
}

// Define the Class as a customElement
customElements.define('nav-bar', NavBar);