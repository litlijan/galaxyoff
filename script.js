// Hide the loader and show content when the page is fully loaded
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');
  
    loader.style.display = 'none';
    content.style.display = 'block';
  });
  
var ab=document.getElementById("bgclr")

ab.addEventListener("mouseover",bgclr1)

function bgclr1()
{
    ab.style.backgroundColor="white"
    ab.style.color="black"
}
