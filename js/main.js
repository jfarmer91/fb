var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if ( width < 600 ) {
  document.getElementsbyClassName("logo").style.width = width;
  // document.getElementbyID("facebook-icon").style.width = "64px";
}
