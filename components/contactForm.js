export class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form>
        <div>
          <label for="name">Your name:</label>
          <input id="name" type="text" name="name">
        </div>

        <div>
          <label for="email">Your email:</label>
          <input id="email" type="email" name="email">
        </div>

        <div>
          <label for="message">Your message:</label>
          <textarea id="message" type="text" name="message"></textarea>
        </div>

        <button id="submit" type="button" class="button">Send</button>
      </form>`;

    this.querySelector("#submit").addEventListener("click", async () => {
      const url = "https://nocodeform.io/f/6481ad41e1410c3b8e59273e";
      await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.getElementById("name").value,
          email: this.getElementById("email").value,
          message: this.getElementById("message").value,
        }),
      });
    });
  }
}

customElements.define("contact-form", ContactForm);
