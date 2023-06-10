export class CookiesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Cookie Policy</h2>
        <span>Effective Date: June 9th, 2023</span>

        <p>This Cookie Policy explains how zar.studio ("we," "us," or "our") uses cookies and similar tracking
            technologies on our website. By using our website, you consent to the use of cookies and other tracking
            technologies as described in this policy.</p>

        <ol>
            <li>
                <h3>What are Cookies?</h3>
                <p>Cookies are small text files that are placed on your device when you visit a website. They are widely
                    used to make websites work more efficiently, enhance user experience, and provide information to
                    website owners.</p>
            </li>
            <li>
                <h3>How We Use Cookies</h3>
                <p>We might use cookies for the following purposes:</p>

                <ul>
                    <li>Strictly Necessary Cookies: These cookies are essential for the operation of our website and
                        enable you to navigate and use its features. They are usually set in response to actions you
                        take, such as setting your privacy preferences, logging in, or submitting forms.</li>
                    <li>Analytical/Performance Cookies: These cookies help us analyze and improve the performance and
                        functionality of our website. They allow us to understand how visitors interact with our
                        website, which pages are visited most frequently, and any errors that may occur. The information
                        collected is aggregated and anonymous.</li>
                    <li>Functionality Cookies: These cookies enable our website to remember choices you make and provide
                        enhanced features and personalization. They may be set by us or third-party providers whose
                        services we have added to our website.</li>
                    <li>Targeting/Advertising Cookies: These cookies are used to deliver relevant advertisements to you
                        and measure the effectiveness of our advertising campaigns. They track your browsing habits and
                        help us display advertisements that are most likely to be of interest to you.</li>
                </ul>
            </li>
            <li>
                <h3>Cookie Table</h3>
                <p>The table below lists the cookies used on our website:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Purpose</th>
                            <th>Duration</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceReferer</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastGclid</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceMedium</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceTerm</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>gclid</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceContent</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceTerm</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceAdGroup</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>fbclid</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceSource</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceCampaign</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceContent</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceAdGroup</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceMedium</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastFbclid</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceReferer</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>sourceSource</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>lastSourceCampaign</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>SL_C_[identifier]_SID</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                        <tr>
                            <td><span class="mobile">Name: </span>SL_C_[identifier]_SID</td>
                            <td><span class="mobile">Purpose: </span>[Purpose of the cookie]</td>
                            <td><span class="mobile">Duration: </span>1 month</td>
                            <td><span class="mobile">Type: </span>Analytical</td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li>
                <h3>Managing Cookies</h3>
                <p>Under the General Data Protection Regulation (GDPR), you have the right to control the use of
                    cookies. You can choose to accept or decline cookies based on your preferences. Most web browsers
                    are initially set to accept cookies automatically, but you can modify your browser settings to
                    manage and control cookies according to your preferences. However, please note that blocking or
                    deleting cookies may impact your experience on our website and limit certain features.</p>
                <p>To manage cookies, you can typically find options to control and disable cookies in your browser's
                    settings or preferences. The exact steps may vary depending on the browser you are using. However,
                    as an alternative, we provide a cookie banner on our website that allows you to customize your
                    cookie preferences.</p>
                <p>Upon your first visit to our website, a cookie banner will appear, providing you with the option to
                    accept or decline non-essential cookies. Essential cookies, which are necessary for the functioning
                    of our website, will be set regardless of your consent. By clicking "Accept" or continuing to use
                    our website without modifying your cookie settings, you consent to the use of non-essential cookies
                    as outlined in our Cookie Policy.</p>
                <p>If you choose to decline non-essential cookies, we will only use essential cookies that are necessary
                    for the basic functioning of our website. Please note that blocking or disabling non-essential
                    cookies may limit your access to certain features and functionality on our website.</p>
                <p>For more information on how to manage cookies directly through your browser settings, you can refer
                    to the help or settings section of your browser or visit the website of your browser's developer for
                    detailed instructions.</p>
                <p>It's important to note that managing cookies through the cookie banner or browser settings may apply
                    your preferences to our website and potentially other websites you visit. We encourage you to review
                    our Cookie Policy and Privacy Policy for more information on how we process personal data.</p>
            </li>
            <li>
                <h3>Changes to this Cookie Policy</h3>
                <p>We may update this Cookie Policy from time to time to reflect changes in our use of cookies or legal
                    requirements. We will notify you of any material changes by posting the updated policy on our
                    website with a new effective date.</p>
            </li>
            <li>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about this Cookie Policy, please contact us at
                    <a href="mailto:privacy@zar.studio">privacy@zar.studio</a>.</p>
            </li>
        </ol>`;
  }
}

customElements.define("cookies-section", CookiesSection);
