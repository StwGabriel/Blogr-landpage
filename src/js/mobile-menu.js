function animateAndOpen() {

   const app = document.querySelector('#app')

   app.classList.contains("onScreen") ? app.classList.remove('onScreen') : app.classList.add('onScreen');
}