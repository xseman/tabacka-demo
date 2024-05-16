import { html, LitElement, css } from "https://esm.sh/lit@3.0.0/";

class TabackaApp extends LitElement {
    static properties = {
        text: { attribute: true },
        counter: { attribute: false }
    }

    static styles = css`
        button {
            background: lightgreen;
        }
    `;

    constructor() {
        super();
        this.counter = 0;
        this.text = "default"
    }

    render() {
        return html`
            <h1>${this.text}</h1>
            <button @click=${this.increase}>
                Click: ${this.counter}
            </button>`
    }

    increase() {
        this.counter++
    }
}

customElements.define("tabacka-counter", TabackaApp);
