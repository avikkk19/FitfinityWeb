function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
};

const link4 = document.getElementById("link4");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const cardmotivation = document.getElementById("cardmotivation")
const calorie = document.getElementById("calorie")

link1.addEventListener('click', () => {
    scrollToElement('.header-two');
});

link2.addEventListener('click', () => {
    scrollToElement('.copyright');
});

link4.addEventListener('click', () => {
    scrollToElement('.content');
})
cardmotivation.addEventListener('click', () => {
    scrollToElement('.arnold');
});

calorie.addEventListener('click', () => {
    scrollToElement('.content');
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');


document.getElementById('shareButton').addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Share fitfinity Website',
          text: 'Check out this amazing website!',
          url: 'https://github.com/avikkk19/FitfinityWeb',
        });
        console.log('Successfully shared');
      } else {
        console.error('Web Share API not supported in this browser');
        alert('Sorry, your browser does not support this Function');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  });
  
  // email funtion snippet //

//   function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "avinashkamadri67@gmail.com",
//     Password : "CCBDE8CA0A12FD13A99E52E9AE4609EAB0AB",
//     To : "avinashkamadri67@gmail.com",
//     From : document.getElementById("email").value,
//     Subject : "new enail from fitfinity web",
//     Body : ' <br> name :' + document.getElementById("name").value 
//           + ' <br> message :' + document.getElementById("message").value
// }).then(
//   message => alert('Email sent')
// );}
 



// email.js //

async function sendEmail() {
  var statusMessage = document.getElementById("statusMessage");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if( !name || !email || !message){
    statusMessage.innerHTML= " please fill in  all the fields";
    statusMessage.style.color = "orange";
    return;
  }
  
  try {
    let response = await emailjs.send("service_8x08u2r", "template_6vqktlp",{
      from_email: email,
      from_name: name,
      message:message
    });
    console.log('SUCCESS!', response.status, response.text); 
    statusMessage.innerHTML = "Email sent succesfully";
    statusMessage.style.color = "green";
    
  } catch (error) {
    statusMessage.innerHTML = " There was an error sending Email";
    statusMessage.style.color = "red";
  }

}