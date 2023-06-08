export class ServicesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Let's see how we can help you</h2>

        <div class="service-item">
            <img title="hand with a credit card" src="/images/ecom.jpg">
            <div>
                <p>Do you offer home-grown vegetables, artisan crafts, services, second-hand items, or anything
                    else? With a web application, your customers can conveniently browse and select the products
                    they need at their own pace, saving you from lengthy phone explanations. Taking orders through
                    the application is simple, allowing customers to easily modify quantities and products as
                    desired. Additionally, the app enables secure online payments, eliminating the need for cash
                    handling and ensuring a smooth transaction experience for your customers.</p>
                <p>We can help you move your commercial business online. Show us your products and let us figure out
                    the rest. </p>
            </div>
        </div>
        <div class="service-item">
            <img title="security cameras watching" src="/images/security.jpg">
            <div>
                <p>Do you have a web application but don't know how to secure it? Do you feel uncertain about all
                    the cyber attacks that seem to happen at an ever increasing pace? Having a thorough check of all
                    your systems, applications, communications and databases will make you sure that no matter what
                    attackers try, you will be prepared. </p>
                <p>We can run security checks on your systems, simulate common and complicated attacks on your
                    applications, and provide a thorough actionable report which will help you improve the security
                    and reliability of your applications. </p>
            </div>
        </div>
        <div class="service-item">
            <img title="lock on a chain" src="/images/privacy.jpg">
            <div>
                <p>Do you have concerns about your personal privacy online? Do you feel overwhelmed by all the
                    privacy decisions you need to take every time you load a modern web application? Do you feel
                    tracked on your phone and don't know how to take precautions against it? Running through all the
                    settings alone could be difficult and leave you more panicked than releaved. </p>
                <p>We can help you make privacy decisions for yourself online. We can offer guidance and tutoring,
                    taking privacy one step at a time. We can help you reclaim private information that should
                    belong to you only, and store it in a way that makes sense for you while keeping it safe. </p>
            </div>
        </div>`;
  }
}

customElements.define("services-section", ServicesSection);
