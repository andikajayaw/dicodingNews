//Navbar Component

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>

    .header {
    overflow: hidden;
    background-color: #faf4ff;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px 10px;
    z-index: 2;
    }

    .header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    font-weight: bold;
    line-height: 25px;
    border-radius: 4px;
    }

    .header a.logo {
    font-size: 25px;
    font-weight: bold;
    text-color: 342ead;
    }

    .header a:hover {
    background-color: #ddd;
    color: black;
    }

    .header a.active {
    background-color: dodgerblue;
    color: white;
    }

    @media screen and (max-width: 500px) {
    .header a {
        float: none;
        display: block;
        text-align: left;
    }
    
    }
    </style>
    <div class="header">
        <a href="index.html" class="news">Dicoding News</a>
    </div>`;
  }
}
customElements.define("nav-bar", NavBar);

// Search Bar Component
class searchBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="container" style="padding-top:60px;">
          <h3 class="center" style="margin-bottom: 20px;">
          Todays News
          <i class="material-icons medium hide-on-small-only" id="icons"></i>
          </h3>
          <!-- Search Bar -->
          <form class="search">
            <div class="input-field">
              <i class="material-icons prefix">public</i>
              <input
                type="text"
                id="searchNews"
                placeholder="Find what's happening in our World today..."
              />
            </div>

            <div class="row">
              <!-- Button Search-->
              <input
                type="submit"
                id="searchBtn"
                class="btn col m2 s12"
                value="search"
              />
            </div>
          </form>
      </div>

        `;
  }
}
customElements.define("search-bar", searchBar);

//Footer Component
class footBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
    .footer {
      position: fixed;
      bottom: 0;
      left:0;
      width: 100%;
      background-color: #10375c;
      color: white;
      text-align: center;
      z-index: 1;
    }
    @media screen and (max-width: 500px) {
    .footer p{
        float: none;
        display: block;
        text-align: center;
    }
    </style>
    <div class="footer">
      <p>Andika Jaya &copy; - IDCamp - Front End Developer</p>
    </div>`;
  }
}
customElements.define("foot-bar", footBar);
