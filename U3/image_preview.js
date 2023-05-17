function imageClick(image_url) {

    var checkDiv = document.getElementById('preview');

    if (checkDiv) {
        return;
    } 

    var div = document.createElement('div');
    const scrollingElement = (document.scrollingElement || document.body);

    div.innerHTML = `<img src="${image_url}" />`;
    div.setAttribute('id', 'preview');
    div.onclick = function() { this.parentNode.removeChild(this); };
    document.body.appendChild(div);

    div.style.display = 'block';
    div.style.marginLeft = 'auto';
    div.style.marginRight = 'auto';
    div.style.width = '80%';

    // Grab image which was made within the div
    var image = document.getElementById('preview');

    image.style.border = '2px solid black';
    image.style.borderRadius = '10px';
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}   