function sendMail() {
    var params = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email_id: document.getElementById("email_id").value,
        phone_id: document.getElementById("phone_id").value,
        message: document.getElementById("message").value,
    }
    if (params.first_name == "" || params.last_name == "" || params.email_id == "" || 
    params.phone_id == "" || params.message == "") {
        alert("please fill out all the fields")
        return
    }
    emailjs.send('service_ad8ju7y', 'template_mqypcai', params)
        .then(function(res) {
            alert("Email Sent")
        }, function(error) {
            console.log('FAILED...', error);
        });
}