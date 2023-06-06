export class TopNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a class="logo-name" href="/">
            <img class="logo" alt="logo" src="images/logo.svg">
            <span>zar.studio</span>
        </a>

        <section class="desktop">
            <a href="/services.html">Services</a>
            <a target="_blank" href="https://raduzaharia.medium.com/">Our blog</a>
            <a href="mailto:contact@zar.studio">Contact us</a>
        </section>
        <section class="mobile">
            <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a target="_blank" ref="https://raduzaharia.medium.com/">Our blog</a></li>
            <li><a href="mailto:contact@zar.studio">Contact us</a></li>
            </ul>

            <button id="mobilenav" type="button" class="button">≡</button>
        </section>`;

    this.querySelector("#mobilenav").addEventListener("click", () => {
      document.body.classList.toggle("mobilenav-visible");
    });
  }
}

customElements.define("top-nav", TopNav);
