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

// ------------------

import { h, render } from "https://esm.sh/preact@10.22.0";
import { useState } from "https://esm.sh/preact@10.22.0/hooks";


function Counter() {
    const [count, setCount] = useState(0);

    function onButtonClick() {
        setCount(count + 1);
    }

    return h("div", null, [
        h("button", { onClick: onButtonClick }, `Click: ${count}`),
        h("tabacka-counter", { 
            text: "Ahoj Tabacka!", style: "display: block" 
        }),
    ]);
}

const root = document.getElementById("root");
const app = h(Counter);

render(app, root);
