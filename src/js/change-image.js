const mediaQuery = window.matchMedia('(max-width: 850px)');
const usImage = document.querySelector('.us-one__image-box');

function handleTabletChange(x) {

  // Check if the media query is true
   
   if (x.matches) {

      usImage.innerHTML = `<img src="src/assets/illustration-editor-mobile.svg" alt="illustration editor">`
   } else {

      usImage.innerHTML = `<img src="src/assets/illustration-editor-desktop.svg" alt="illustration editor">`
   }
}
// Register event listener
   mediaQuery.addListener(handleTabletChange)
   
// Initial check
handleTabletChange(mediaQuery)