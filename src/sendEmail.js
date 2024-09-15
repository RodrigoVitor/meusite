// Initialize EmailJS
emailjs.init("j08mAnAWYLC12tbGV");

// Function to handle form submission
function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = event.target;
    
    // Use EmailJS to send the email
    emailjs.sendForm('service_0kpt6fs', 'template_16yhryi', form)
        .then((response) => {
            alert('Mensagem enviada com sucesso!');
            console.log(form)
            form.reset(); // Reset the form fields
        }, (error) => {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            console.error('Error:', error);
        });
}