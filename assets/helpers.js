export function generateDataElement (data) {
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const content = document.createElement('p');

    h5.textContent = data.ingredient;
    if (data.quantity) content.textContent = data.quantity;
    if (data.unit) content.textContent += ` ${data.unit}`;

    h5.className = "font-manrope font-medium text-secondary text-sm";
    content.className ="font-manrope font-normal text-quaternary text-sm";

    div.appendChild(h5);
    div.appendChild(content);
    return div;

}