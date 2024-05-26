// Smooth Scrolling
// $('#about').on('click', function(event) {
//     if (this.hash !== ''){
//       event.preventDefault();
  
//       const hash = this.hash;
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         800, // Speed in millisecond(s)
//         function(){
//           window.location.hash = hash;
//         }
//       );
//     }
// });

{
  const date = new Date;
  const day = date.getUTCDate();
  const month = date.getMonth();
  const year = date.getUTCFullYear();

  // let dateDisplayed = day + "/" + month + "/" + year;
  let dateDisplayed =  year;
  document.getElementById('footerDate').innerHTML = dateDisplayed;
  document.getElementById('footerDate').style.fontSize = "14px";
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
