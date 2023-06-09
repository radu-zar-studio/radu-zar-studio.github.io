export class PrivacySection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Privacy Policy</h2>
            <span>Effective Date: June 9th, 2023</span>

            <p>Thank you for choosing zar.studio. This Privacy Policy describes how we collect, use, disclose, and
                protect your personal information when you use our website, services, and related applications
                (collectively, the "Services"). By using our Services, you consent to the practices described in this
                policy.</p>

            <ol>
                <li>
                    <h3>Information We Collect</h3>

                    <ol>
                        <li>
                            <h4>Personal Information</h4>
                            <p>We may collect personal information that you voluntarily provide to us when you interact with
                                our Services. This information may include:</p>

                            <ul>
                                <li>Contact information (such as your name, email address, phone number)</li>
                                <li>Billing and payment details</li>
                                <li>Client communication and support information</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Non-Personal Information</h4>
                            <p>We may also collect non-personal information automatically when you use our Services. This
                                information may include:</p>

                            <ul>
                                <li>Device information (e.g., IP address, browser type, operating system)</li>
                                <li>Usage data (e.g., pages visited, links clicked, referring website)</li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li>
                    <h3>Lawful Basis for Processing Personal Data</h3>
                    <p>We will only process your personal data when we have a valid lawful basis under
                        the GDPR, such as:</p>

                    <ul>
                        <li>The processing is necessary for the performance of a contract with you or to take steps at your
                            request before entering into a contract.</li>
                        <li>The processing is necessary for compliance with a legal obligation to which we are subject.</li>
                        <li>The processing is necessary for our legitimate interests, provided they are not overridden by
                            your data protection rights.</li>
                        <li>You have provided consent for specific processing activities, which you can withdraw at any
                            time.</li>
                    </ul>
                </li>
                <li>
                    <h3>Use of Information</h3>
                    <p>We may use the collected information for the following purposes:</p>

                    <ul>
                        <li>To provide and improve our Services</li>
                        <li>To communicate with you and respond to your inquiries</li>
                        <li>To process payments and fulfill your requests</li>
                        <li>To personalize and enhance your experience</li>
                        <li>To send periodic emails or newsletters (if you opt-in and provide consent)</li>
                        <li>To detect and prevent fraud, security breaches, or other potentially prohibited or illegal
                            activities</li>
                    </ul>
                </li>
                <li>
                    <h3>Data Retention</h3>
                    <p>We will retain your personal information only for as long as necessary to fulfill the purposes
                        outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                </li>
                <li>
                    <h3>Data Sharing and Transfers</h3>
                    <p>We may share your personal information with:</p>

                    <ul>
                        <li>Service providers and business partners who assist us in delivering our Services</li>
                        <li>Law enforcement agencies, government authorities, or other third parties if required by law or
                            to protect our legal rights</li>
                        <li>Third parties involved in a merger, acquisition, or sale of all or a portion of our assets, with
                            appropriate safeguards</li>
                    </ul>

                    <p>If we will be transferring personal data outside the European Economic Area (EEA), we will take steps
                        to ensure adequate protection and lawful transfer mechanisms as required by the GDPR.</p>
                </li>
                <li>
                    <h3>Security Measures</h3>
                    <p>We are committed to ensuring the security of your personal information and have implemented
                        appropriate technical and organizational measures to protect it from unauthorized access, loss,
                        misuse, or alteration.</p>
                </li>
                <li>
                    <h3>Your Rights</h3>
                    <p>Under the GDPR, you have certain rights regarding your personal data, including:</p>

                    <ul>
                        <li>The right to access and obtain a copy of your personal data</li>
                        <li>The right to rectify any inaccurate or incomplete personal data</li>
                        <li>The right to erase your personal data in certain circumstances</li>
                        <li>The right to restrict or object to the processing of your personal data</li>
                        <li>The right to data portability, allowing you to receive a copy of your personal data in a
                            structured, commonly used, and machine-readable format</li>
                    </ul>

                    <p>To exercise your rights or if you have any questions or concerns about the processing of your
                        personal data, please contact us using the information provided in Section 10.</p>
                </li>
                <li>
                    <h3>Consent and Control</h3>
                    <p>We will obtain your consent for the processing of your personal data when required by the GDPR. You
                        have the right to withdraw your consent at any time, without affecting the lawfulness of processing
                        based on consent before its withdrawal.</p>
                    <p>You have the ability to exercise control over your personal data through the following:</p>

                    <ul>
                        <li>Updating or correcting your personal information: You can access, update, or correct your
                            personal information by contacting us using the information provided in Section 10.</li>
                        <li>Opting out of marketing communications: If you have provided consent to receive marketing
                            communications, you can opt out at any time by following the unsubscribe instructions included
                            in the communication or by contacting us directly.</li>
                        <li>Managing cookies: You can set your browser to refuse or delete cookies. Please note that some
                            features of our website may not function properly without cookies.</li>
                    </ul>
                </li>
                <li>
                    <h3>Third-Party Links and Services</h3>
                    <p>Our Services may contain links to third-party websites or services that are not owned or controlled
                        by zar.studio. We are not responsible for the privacy practices or the content of these third-party
                        websites or services. We encourage you to review the privacy policies of these third parties before
                        providing any personal information or using their services.</p>
                </li>
                <li>
                    <h3>Contact Us</h3>
                    <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, or if you
                        wish to exercise your rights under the GDPR, please contact us at [email address]. You may also send
                        us a written inquiry using the following address: <a href="mailto:privacy@zar.studio">privacy@zar.studio</a>.</p>
                    <p>We will respond to your inquiries and requests within a reasonable timeframe and in accordance with
                        applicable data protection laws.</p>
                </li>
            </ol>`;
  }
}

customElements.define("privacy-section", PrivacySection);
