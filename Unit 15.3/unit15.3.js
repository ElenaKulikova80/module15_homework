const btn = document.querySelector(".j-btn-test");
document.querySelector(".bi-arrow-down-left-circle-fill").style.display="block";
document.querySelector(".bi-arrow-down-left-circle").style.display="none";

btn.addEventListener('click', () => {
  if (document.querySelector(".bi-arrow-down-left-circle-fill").style.display==="block") {
    document.querySelector(".bi-arrow-down-left-circle-fill").style.display="none";
    document.querySelector(".bi-arrow-down-left-circle").style.display="block";
  } else {
    document.querySelector(".bi-arrow-down-left-circle-fill").style.display="block";
    document.querySelector(".bi-arrow-down-left-circle").style.display="none";
  }
   
});