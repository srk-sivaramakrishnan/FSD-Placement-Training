function sendMessage(){
    var params = {
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value
    }
    emailjs.send("service_qijpd4t","template_x4uxq5k", params).then(function(res){
      alert('Thank you, ' + params.from_name + '! Your message has been sent.' );
    },
    function(error) {
      alert('Failed to send message. Please try again later.');
      console.log('FAILED...', error);
    }
  )
  }