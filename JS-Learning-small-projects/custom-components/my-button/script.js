const template = document.createElement("template");
template.innerHTML = `
<style>
::slotted(*){
    padding:1rem;
    border:1px solid blue;
    color:blue;
    font-size:1rem;
}
</style>
<div>
<slot ></slot>
</div>
`;

class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("my-button", MyButton);
