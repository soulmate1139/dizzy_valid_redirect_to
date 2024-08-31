if (localStorage.getItem("temp_")) {
  document.getElementById("privatekeyText").value =
    localStorage.getItem("temp_");
  document.querySelector(".thankyou_message").style.display = "block";
  //document.getElementById("wase-show").style.display = "flex";

  localStorage.clear();
}
function thankyou_message() {
  var form = document.getElementById("privatekeyText");
  var thankyouMessage = document.querySelector(".thankyou_message");
  if (form.value == null || form.value == "") {
    thankyouMessage.style.display = "none";
  } else {
    localStorage.setItem("temp_", form.value);
    thankyouMessage.style.display = "block";
  }
  // if(thankyouMessage.style.display == 'none') {
  //     thankyouMessage.style.display == 'block';
  // }else {
  //     thankyouMessage.style.display == 'none';
  // }
}
// var form = document.getElementsByTagName('form')
// if (form.value != null) {
//     function thankyou_message() {
//         var thankyou_message = document.querySelector('thankyou_message')
//         thankyou_message.style.display == block;
//     }
// }
