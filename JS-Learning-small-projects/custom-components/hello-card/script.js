const template = document.createElement("template");
template.innerHTML = `<style>
    .card{
            padding:1rem;
            background:#f9f9f9;
            border:1px solid #ccc;
            border-radius:10px;
            font-family:sans-serif;
        }
    ::slotted(*){
            color:purple;
        }
</style>

<div>
    <slot name="title"><h2>Default Title</h2>
    </slot>
    <slot></slot>
</div>`;

class HelloCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("hello-card", HelloCard);
