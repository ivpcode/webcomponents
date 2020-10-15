import { LitElement,  html } from 'lit-element'

class LitElementWithInnerHtml extends LitElement {

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.ReadyToRender = false;
        this.firstUpdatedAfterParsedInnerHtmlDone = false;
    }

    render() {

        if (this.ReadyToRender == false)
            return html``;

        return html``;
    }

    firstUpdated(_changedProperties) {
        // Listen to the click event on our button.
        setTimeout(()=> {
            const innerHtml = this.querySelectorAll('*');
            if (innerHtml != null) {
                this.parseInnerHtml()
                innerHtml.forEach(el => el.remove());
                this.ReadyToRender = true;
            }
        },1);
    }

    updated(_changedProperties) {
        if (this.isReadyToRender() && this.firstUpdatedAfterParsedInnerHtmlDone == false) {
            this.firstUpdatedAfterParsedInnerHtml();
            this.firstUpdatedAfterParsedInnerHtmlDone = true;
        }
    }

    isReadyToRender() {
        return this.ReadyToRender;
    }

    // Questa funzione è chiamata dopo il firstupdate, deve prelevare i contenuti dall'html contenuto
    parseInnerHtml() {

    }

    // Questa funzione viene chiamata solo dopo che il render dell'elemento è eseguito in modalità "completa"
    firstUpdatedAfterParsedInnerHtml() {

    }
}

export default LitElementWithInnerHtml;
