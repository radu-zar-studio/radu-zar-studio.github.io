export class ExtraBannerSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="/contact.html">Contact us!</a>`;
  }
}

customElements.define("extra-banner-section", ExtraBannerSection);
