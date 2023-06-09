export class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form>
        <div>
          <label for="name">Your name:</label>
          <input id="name" type="text" name="name">
          <span id="nameError" class="error"></span>
        </div>

        <div>
          <label for="email">Your email:</label>
          <input id="email" type="email" name="email">
          <span id="emailError" class="error"></span>
        </div>

        <div>
          <label for="message">Your message:</label>
          <textarea id="message" type="text" name="message"></textarea>
          <span id="messageError" class="error"></span>
        </div>

        <button id="submit" type="button">Send</button>
      </form>`;

    this.querySelector("#submit").addEventListener("click", async () => {
      if (!this.validate()) return;

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

  validate() {
    const emailInput = this.querySelector("#email");
    const messageInput = this.querySelector("#message");

    const emailError = this.querySelector("#emailError");
    const messageError = this.querySelector("#messageError");

    let result = true;

    emailError.textContent = "";
    messageError.textContent = "";

    if (emailInput.value.trim() === "") {
      emailError.textContent = "We need your email so we can contact you back.";
      result = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please leave us a message first.";
      result = false;
    }

    return result;
  }
}

customElements.define("contact-form", ContactForm);
