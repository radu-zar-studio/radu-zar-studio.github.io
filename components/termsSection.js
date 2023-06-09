export class TermsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Terms and Conditions</h2>
        <span>Effective Date: June 9th, 2023</span>

        <p>Please read these Terms and Conditions ("Terms") carefully before accessing or using the services provided by
            zar.studio ("we," "us," or "our").</p>

        <ol>
            <li>
                <h3>Acceptance of Terms</h3>
                <p>By accessing or using our services, you agree to be bound by these Terms. If you do not agree with
                    any part of these Terms, you may not access or use our services.</p>
            </li>
            <li>
                <h3>Services Offered</h3>
                <p>zar.studio provides web design services and cybersecurity services (collectively referred to as
                    "Services") to clients worldwide. The specific details and scope of the Services will be defined in
                    a separate agreement or statement of work between zar.studio and the client.</p>
            </li>
            <li>
                <h3>Intellectual Property</h3>
                <p>All intellectual property rights related to the Services, including but not limited to policies,
                    guides, software, code, designs, graphics, logos, and trademarks, are the exclusive property of
                    zar.studio or its licensors. The client acknowledges and agrees that the Services and any
                    deliverables provided by zar.studio are licensed to the client for use but do not transfer any
                    copyright or ownership rights to the client.</p>
            </li>
            <li>
                <h3>Confidentiality and Privacy</h3>
                <p>We respect your privacy and will handle any personal information collected during the provision of
                    our Services in accordance with our Privacy Policy. However, you acknowledge and agree that no data
                    transmission or storage can be guaranteed to be 100% secure.</p>
            </li>
            <li>
                <h3>Limitation of Liability</h3>
                <p>To the extent permitted by the laws of the EU-based country of zar.studio, zar.studio and its
                    officers, directors, employees, and affiliates shall not be liable for any direct, indirect,
                    incidental, consequential, or punitive damages arising out of or in connection with the use of our
                    Services or any actions or omissions related to the Services.</p>
            </li>
            <li>
                <h3>Termination</h3>
                <p>Either party may terminate the provision of Services by providing written notice to the other party.
                    Termination will not relieve the client from any outstanding obligations or liabilities incurred
                    prior to the termination.</p>
            </li>
            <li>
                <h3>Modifications to the Terms</h3>
                <p>We reserve the right to modify these Terms at any time. Any modifications will be effective
                    immediately upon posting the updated Terms on our website or notifying the client through other
                    means. It is the client's responsibility to review the Terms periodically. Continued use of our
                    Services after the modifications constitute the client's acceptance of the updated Terms.</p>
            </li>
            <li>
                <h3>Governing Law and Jurisdiction</h3>
                <p>These Terms shall be governed by and construed in accordance with the laws of the EU-based country of
                    zar.studio. Any disputes arising out of or relating to these Terms shall be subject to the exclusive
                    jurisdiction of the courts of the EU-based country of zar.studio.</p>
            </li>
            <li>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about these Terms, please contact us at
                    <a href="mailto:contact@zar.studio">contact@zar.studio</a>.
                </p>
            </li>
        </ol>`;
  }
}

customElements.define("terms-section", TermsSection);
