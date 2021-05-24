const mediaQuery = window.matchMedia('(max-width:900px)');

const usOneImage = document.querySelector('.us-one__image-box');
const usTwoImage = document.querySelector('.us-three__image-box');

function handleTabletChange(x) {

   // Check if the media query is true

   if (x.matches) {

      usOneImage.innerHTML = ` <img src="src/assets/illustration-editor-mobile.svg" alt="illustration editor"> `;
      usTwoImage.innerHTML = ` <img src="src/assets/illustration-laptop-mobile.svg" alt="illustration laptop"> `;
   } else {

      usOneImage.innerHTML = ` <img src="src/assets/illustration-editor-desktop.svg" alt="illustration editor"> `;
      usTwoImage.innerHTML = ` <img src="src/assets/illustration-laptop-desktop.svg" alt="illustration laptop"> `;
   };
};
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);