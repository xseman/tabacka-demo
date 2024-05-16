class TabackaCounter extends HTMLElement {
    static observedAttributes = [
        "text"
    ];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        
        const style = document.createElement("style");
        style.innerHTML = `
            button {
                background: lightskyblue;
            }
        `;
        this.shadowRoot.append(style);

        const text = document.createElement("h1");
        text.textContent = this.getAttribute("text");
        this.shadowRoot.append(text);
        
        this.counter = 0;
        
        const button = document.createElement("button");
        button.textContent = `Click: ${this.counter}`;
        this.shadowRoot.append(button);

        button.addEventListener("click", () => {
            this.counter++;
            button.textContent = `Click: ${this.counter}`;
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log({ name, oldValue, newValue });

        if (name === "text" && oldValue !== newValue) {
            const text = this.shadowRoot.querySelector("h1");
            text.textContent = newValue;
        }
    }
}

customElements.define("tabacka-counter", TabackaCounter);
