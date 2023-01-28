function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      subject: document.getElementById("subject").value,
  
    }
    const serviceId = "service_vxj2n7r";
    const templateId = "template_ma3xmvb";
    
    emailjs.send(serviceId, templateId, params).then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your message sent succesfully");
      })
      .catch((err)=> console.log(err));
  }