import { ContactForm } from "./contactForm.js";

export class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Let's talk</h2>

        <contact-form></contact-form>
        <p><span>Or write us at <a href="mailto:contact@zar.studio">contact@zar.studio</a>.</span></p>`;
  }
}

customElements.define("contact-section", ContactSection);
