var easePreview = require('ease-preview');

module.exports = function(ease, description) {
  try {
    var elDescription = document.body.appendChild(
      document.createElement('div')
    );
    var preview = document.body.appendChild(
      easePreview(ease)
    );
    elDescription.innerHTML = description;
    preview.style.display = 'block';
  } catch(e) {}
};