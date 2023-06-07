export class BottomNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
            <div class="logo-name">
                <img class="logo" alt="logo" src="/images/logo.svg">
                <span>ZAR Studio</span>
            </div>

            <p>We are a small cybersecurity and software development shop based in Cluj-Napoca, Romania. We can help you
                create your online business presence, replace paper driven workflows with modern digital solutions, offer
                e-commerce solutions to your customers, or simply optimize your online customer interaction. We can guide your
                business through the complicated mess of present day cybersecurity.</p>
        </div>
        <div class="links">
            <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/services.html">Software development services</a></li>
                <li><a href="/services.html">Cybersecurity services</a></li>
                <li><a href="/services.html">Privacy services</a></li>
                <li><a target="_blank" href="https://raduzaharia.medium.com/">Our blog</a></li>
            </ul>
            <ul>
                <li><a href="/">Terms and conditions</a></li>
                <li><a href="/">Processing of personal data</a></li>
                <li><a href="https://anpc.ro/en/">ANPC</a></li>
            </ul>
        </div>

        <span class="copyright">COPYRIGHT 2023 © ZAR.STUDIO</span>`;
  }
}

customElements.define("bottom-nav", BottomNav);
