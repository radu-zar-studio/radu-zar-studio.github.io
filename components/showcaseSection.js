export class ShowcaseSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>What do we do?</h2>

        <div>
            <a href="/services.html">
                <h3>Software development</h3>

                <ul>
                    <li>Web design</li>
                    <li>Web applications</li>
                    <li>E-Commerce solutions</li>
                    <li>Consultancy</li>
                </ul>
            </a>
            <a href="/services.html">
                <h3>Security services</h3>

                <ul>
                    <li>Security, Privacy & Compliance strategies</li>
                    <li>Vendor Assessments & Risk Management</li>
                    <li>Security Reviews & Security Hardening Guidance</li>
                </ul>
            </a>
            <a href="/services.html">
                <h3>Others</h3>

                <ul>
                    <li>Open-source advocacy</li>
                    <li>Privacy solutions</li>
                    <li>Home networking</li>
                </ul>
            </a>
        </div>`;
  }
}

customElements.define("showcase-section", ShowcaseSection);
