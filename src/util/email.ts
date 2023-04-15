import emailjs from '@emailjs/browser';

export function sendMail() {
   var params = {
      first_name: (document.getElementById("first_name") as HTMLInputElement).value,
      last_name: (document.getElementById("last_name")as HTMLInputElement).value,
      email_id: (document.getElementById("email_id")as HTMLInputElement).value,
      phone_id: (document.getElementById("phone_id")as HTMLInputElement).value,
      message: (document.getElementById("message")as HTMLInputElement).value,
   }
   if (params.first_name == "" || params.last_name == "" || params.email_id == "" || 
   params.phone_id == "" || params.message == "") {
      alert("please fill out all the fields")
      return
   }
   emailjs.init(process.env.EMAILJS_PUBLIC_KEY as string);
   
   emailjs.send(process.env.EMAILJS_YOUR_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, params)
      .then(function() {
         alert("Email Sent")
      }, function(error) {
         console.log('FAILED...', error);
      });
}