export class BannerSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>zar.studio</h2>
        <div>Coming soon!</div>`;
  }
}

customElements.define("banner-section", BannerSection);
