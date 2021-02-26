import styleSheet from "./style.css";
import template from "./template.html";

const webComponentTemplate = document.createElement("template");

webComponentTemplate.innerHTML = `
  <style>
    ${styleSheet}</style>
  ${template}
  `

class WebComponent extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  [key: string]: any;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(webComponentTemplate.content.cloneNode(true));
  }

  connectedCallback() {

  }

  _upgradeProperty(prop: string) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    if (oldVal === newVal) {
      return;
    }
  }
}

window.customElements.define("web-component", WebComponent);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "web-component": any;
    }
  }
}