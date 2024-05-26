{
  const date = new Date;
  // const day = date.getUTCDate();
  // const month = date.getMonth();
  const year = date.getUTCFullYear();

  document.getElementById('footerDate').style.fontSize = "12px";

  let dateDisplayed =  year;
  document.getElementById('footerDate').innerHTML = dateDisplayed;
}

{
  let topButton = document.getElementById("top-button");
  window.onscroll = function() {scrollfunction()};

  function scrollfunction() {
    if (document.body.scrollTop > 30|| document.documentElement.scrollTop > 30) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // topButton.addEventListener("click", function() {
  //   document.
  // });
}
