window.addEventListener("DOMContentLoaded", function () {

    //const buttonSendForm = document.querySelector('.form .btn');
    
    var menuBarHeight = $('#header').height();
    
    var buttonFortRocha = document.querySelectorAll('.fort-rocha button');
    var buttonIndustria = document.querySelectorAll('.industria button');
    
    buttonFortRocha.forEach(button => button.addEventListener('click', function(){
        window.location.href = "sobre-fort-rocha.html";
    }));
    
    buttonIndustria.forEach(button => button.addEventListener('click', function(){
        window.location.href = "industria.html";
    }));
   
    console.log( location.href + "/test");
    
    //if(window.location.pathname === "/fale-conosco.html"){
    if(location.href.split('/').pop()  === "fale-conosco.html"){
        console.log("entrou na pagina");
        const buttonSendForm = document.querySelector('.submitForm');
        
        buttonSendForm.addEventListener('click', getFormInfos);
    }
    

    $(window).scroll(function(){
        if($(this).scrollTop() > menuBarHeight) {
            $('#header').addClass('fixed');
        }
        else{
            $('#header').removeClass('fixed');
        }
    });

    function getFormInfos(){
        var emailMessage = "";

        var nome = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var assunto = document.querySelector('#assunto').value;
        var mensagem = document.querySelector('#mensagem').value;

        emailMessage += "Nome: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Assunto: " + assunto + ". <br>";
        emailMessage += "Mensagem: " + mensagem + ". <br>";
        console.log("Nome: " + nome);
        console.log("email: " + email);
        console.log("assunto: " + assunto);
        console.log("mensagem: " + mensagem);
        if(nome === "" || email === ""){
            console.log("Ta vazio");
            document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
            document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'leonardoduarte1361996@gmail.com',
            Password: "pmyxeenpxplhmnpy",
            //To: 'leo_nardo136@hotmail.com',
            To: `${email}`,
            From: 'leonardoduarte1361996@gmail.com',
            Subject: `${name} tem interesse no seu produto`,
            //Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
            Body: `${message}`,
        }).then(function(message){
            /*const alertaText = document.querySelector('.alert');
            alertaText.style.display = "block";*/
            alert("Seu email foi enviado com sucesso");
            window.location.reload(false); 
        }); 
    } 
});