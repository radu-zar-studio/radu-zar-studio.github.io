export class AboutSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Who are we?</h2>

        <ul>
            <li>
                <div class="about-social">
                    <a title="linkedin" target="_blank" href="https://www.linkedin.com/in/radu-zaharia"><img title="linkedin"
                        src="/images/linkedin.svg"></a>
                    <a title="medium" target="_blank" href="https://raduzaharia.medium.com"><img title="medium"
                        src="/images/medium.svg"></a>
                    <a title="medium" target="_blank" href="https://github.com/raduzaharia-medium"><img title="medium"
                        src="/images/github.svg"></a>
                    <a title="discord" target="_blank" href="https://discord.com/users/or29544#0656"><img title="discord"
                        src="/images/discord.svg"></a>
                </div>
                <span>Hello! I am Radu, a software developer with 10+ years of experience. I worked in small to large
                    companies with several technologies including .NET stacks, javascript stacks, different software
                    architectures with both SQL and non SQL databases. I like to write modern and clean code, thinking twice
                    about every extra line of code added.
                </span>
            </li>
            <li>
                <div class="about-social">
                    <a title="linkedin" target="_blank" href="https://www.linkedin.com/in/alexandrazaharia/"><img
                        title="linkedin" src="/images/linkedin.svg"></a>
                </div>
                <span>I am Alexandra, an experienced cybersecurity specialist with 10+ years of expertise, spanning roles
                    such as SOC (Security Operations Center) analyst, information security professional, and infrastructure
                    security specialist. Throughout my career, I have contributed my skills to multinational organizations
                    across industries including insurance and banking.
                </span>
            </li>
        </ul>`;
  }
}

customElements.define("about-section", AboutSection);
