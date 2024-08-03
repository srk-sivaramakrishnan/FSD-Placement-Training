function sendMessage(){
  var params = {
    from_name : document.getElementById("fullname").value,
    email_id : document.getElementById("email_id").value,
    ph_no : document.getElementById("ph_no").value,
    message : document.getElementById("message").value

  }
  emailjs.send("service_85yeahi","template_a0g5jhg", params).then(function(res){
    alert('Thank you, ' + params.from_name + '! Your message has been sent.' );
  },
  function(error) {
    alert('Failed to send message. Please try again later.');
    console.log('FAILED...', error);
  }
)
}
















//service_q070z36