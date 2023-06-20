class mainFooter extends HTMLElement {
    constructor(){
        super();

        const date = new Date();
        this.year = date.getFullYear();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; ${this.year} Samyam Khanal. Website designed and developed by Samyam Khanal. </p>
        </footer>
        `;
    }
}

customElements.define('main-footer', mainFooter);

