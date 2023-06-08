export class TaglineSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Need help?</h2>

        <div>✍🏻 If you would like to accelerate your business - let's talk.</div>
        <div>🛡️ If you need digital security services - count on us.</div>
        <div>🔐 If you want to improve your only privacy - we know what to do.</div>`;
  }
}

customElements.define("tagline-section", TaglineSection);
