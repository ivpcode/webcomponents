import { LitElement,  html } from 'lit-element'
import LitElementWithInnerHtml  from './element-with-inner-html'
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import $ from 'jquery';

class ElementWithInnerHtml extends LitElementWithInnerHtml {

    static get properties() {
        return {
            title: { type: String },
            img_src: { type: String },
        };
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.open = false;
        this.title = "";
        this.img_src = "";
        this.elParagraphHtml = null;
    }

    render() {

        if (this.isReadyToRender() == false)
            return html``;

        return html`
            <h1>${this.title}</h1>
            <img src="${this.img_src}" />
            ${unsafeHTML(this.elParagraphHtml)}            
        `;
    }

    parseInnerHtml() {

        let els = $(this);
        this.title = els.find("h1").text();
        this.img_src = els.find("img").attr("src");
        let p = els.find("p");
        p.append("<span class=\"ellipsis\">&raquo;</span>");
        this.elParagraphHtml = p[0].outerHTML;

    }

    firstUpdatedAfterParsedInnerHtml() {
        $(this).find(".ellipsis").click(()=>{ $(this).find("p").toggleClass('expanded'); })
    }
}

customElements.define('element-with-inner-html', ElementWithInnerHtml);
