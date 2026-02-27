window.addEventListener('load', function() {

  function placeInfoBox(event) {
    const infoBox = document.getElementById("infobox");
    infoBox.style.position = "absolute";
    infoBox.style.left = event.clientX + 10 + window.scrollX + "px";
    infoBox.style.top = event.clientY + window.scrollY + "px";
  };

  window.addEventListener('mousemove', (event) => {
    placeInfoBox(event);
  });

  const infoBox = document.getElementById("infobox");
  infoBox.addEventListener("mousemove", placeInfoBox);

});

const toggleLanguageBox = (id) => {

  const languageBox = document.getElementById(id);
  const infoBox = document.getElementById("infobox");
  const staticMap = document.getElementById("world-map-static");

  if (languageBox == null) {
    return;
  }

  if (staticMap.style.display == '') {
    if (languageBox.style.display == 'block') {
      languageBox.style.display = 'none';
      infoBox.style.display = 'none';
    } else {
      languageBox.style.display = "block";
      infoBox.style.display = "block";
    }
  }
};
