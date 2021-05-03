window.addEventListener("DOMContentLoaded", function () {

    $('.language-pt').click(function(){
        
        alert("cliquei na linguagem");
    });
    
    
    var language = {
        eng: {
            /*navbar: {
                about_us: "About us",
                industry: "Industry",
                products: "Products",
                contact_us: "Contact Us",
            },*/
                carousel: {
                    super_white: "Perfect for your space",
                    white_alvorada: "Beauty and durability",
                    crystal: "For brighter spaces",
                },
            infos: {
                fort_rocha: {
                    title: "About Fort Rocha",
                    text: "An experienced firm, that initiated in the marketing of the gorgeous Super White Marble and sawmill services.",
                    page_info: {
                        text_1: "An experienced firm, that initiated in the marketing of White Marble",
                        text_2: "Always looking forward, in 2015 a big step was taken by the company: the purchase of an automated polishing machine that allows manufacturing to grow and, above all, it allows improvement in quality.",
                        text_3: "In 2017, a multiwire gang saw was purchased, to better address and improve the excellence of materials’ sawing.",
                        text_4: "Nowadays, our facilities are being expanded for more intense business activity, aiming for materials’ exportation.",
                        text_5: "Envisioning and investing in the company so that you always have our best.",
                    }
                },
                industry: {
                    title: "Industry",
                    text: "We count on a modern industrial patio with excellent high-tech machinery to always offer you the best materials.",
                    page_info: {
                        text_1: "The company counts on a modern industrial patio with excellent high-tech machinery to always offer you the best materials.",
                        text_2: "From the quarry to the finish, we cultivate and aim for the best to always appease and exceed our clients’ expectations.",
                    }
                },
                button: "Know more...",
            },
            products: {
                title: "Know our products",
                info: "The most various surfaces for your project, each carrying their own identity.",
                white_alvorada: "White Alvorada",
                super_white: "Super White",
                white_fortress: "White Fortress",
                crystal_sunshine: "Crystal Sunshine",
                dolomythic_marble: "Dolomythic Marble",
                crystal: "Crystal",
                blue_calcite: "Blue Calcite",
                maracanã_yellow: "Maracanã Yellow",
                flowered_black: "Florwered Black",
            },
            contact_us: {
                title: "Contact Us",
                info: "Get in touch by filling in the form or through our phone number or e-mail address.",
                form_name: "Your name (required)",
                form_email: "Your e-mail address (required)",
                form_subject: "Subject",
                form_message: "Your message",
                button: "Send",
            },
            /*footer: {
                company: "company",
                address: "Main Avenue, Gironda - Rural Area, City of Cachoeiro de Itapemirim, State of Espírito Santo, Brazil",
                zip_code: "Zip Code 29326-000",
            }*/
        },
        pt: {
            welcome: "bem vindo"
        }
    };

    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "pt"){
    }
    if(pageLanguage == "eng"){
        //carousel
        $('.carousel-inner').children("div").eq(0).children("div").children("p").text(language.eng.carousel.super_white);
        $('.carousel-inner').children("div").eq(1).children("div").children("p").text(language.eng.carousel.white_alvorada);
        $('.carousel-inner').children("div").eq(2).children("div").children("p").text(language.eng.carousel.crystal);
        
        
        //index infos
        $('.infos .fort-rocha').children("div").children("h1").text(language.eng.infos.fort_rocha.title);
        $('.infos .fort-rocha').children("div").children("p").text(language.eng.infos.fort_rocha.text);
        $('.infos .fort-rocha').children("div").children("button").text(language.eng.infos.button);
        $('.infos .industria').children("div").children("h1").text(language.eng.infos.industry.title);
        $('.infos .industria').children("div").children("p").text(language.eng.infos.industry.text);
        $('.infos .industria').children("div").children("button").text(language.eng.infos.button);

        //nossos produtos
        $('.nossos-produtos').children("h1").text(language.eng.products.title);
        $('.nossos-produtos').children("p").text(language.eng.products.info);
        $('.nossos-produtos').children("div").children("div").eq(0).children("p").text(language.eng.products.white_alvorada);
        $('.nossos-produtos').children("div").children("div").eq(0).children("a").attr('data-title', language.eng.products.white_alvorada);
        $('.nossos-produtos').children("div").children("div").eq(1).children("p").text(language.eng.products.super_white);
        $('.nossos-produtos').children("div").children("div").eq(1).children("a").attr('data-title', language.eng.products.super_white);
        $('.nossos-produtos').children("div").children("div").eq(2).children("p").text(language.eng.products.white_fortress);
        $('.nossos-produtos').children("div").children("div").eq(2).children("a").attr('data-title', language.eng.products.white_fortress);
        $('.nossos-produtos').children("div").children("div").eq(3).children("p").text(language.eng.products.crystal_sunshine);
        $('.nossos-produtos').children("div").children("div").eq(3).children("a").attr('data-title', language.eng.products.crystal_sunshine);
        $('.nossos-produtos').children("div").children("div").eq(4).children("p").text(language.eng.products.dolomythic_marble);
        $('.nossos-produtos').children("div").children("div").eq(4).children("a").attr('data-title', language.eng.products.dolomythic_marble);
        $('.nossos-produtos').children("div").children("div").eq(5).children("p").text(language.eng.products.crystal);
        $('.nossos-produtos').children("div").children("div").eq(5).children("a").attr('data-title', language.eng.products.crystal);
        $('.nossos-produtos').children("div").children("div").eq(6).children("p").text(language.eng.products.blue_calcite);
        $('.nossos-produtos').children("div").children("div").eq(6).children("a").attr('data-title', language.eng.products.blue_calcite);
        $('.nossos-produtos').children("div").children("div").eq(7).children("p").text(language.eng.products.maracanã_yellow);
        $('.nossos-produtos').children("div").children("div").eq(7).children("a").attr('data-title', language.eng.products.maracanã_yellow);
        $('.nossos-produtos').children("div").children("div").eq(8).children("p").text(language.eng.products.flowered_black);
        $('.nossos-produtos').children("div").children("div").eq(8).children("a").attr('data-title', language.eng.products.flowered_black);

        //sobre fort rocha
        $('#page-fort-rocha').children("div").children("h1").text(language.eng.infos.fort_rocha.title);
        $('#page-fort-rocha').children("div").children("p").eq(0).text(language.eng.infos.fort_rocha.page_info.text_1);
        $('#page-fort-rocha').children("div").children("p").eq(1).text(language.eng.infos.fort_rocha.page_info.text_2);
        $('#page-fort-rocha').children("div").children("p").eq(2).text(language.eng.infos.fort_rocha.page_info.text_3);
        $('#page-fort-rocha').children("div").children("p").eq(3).text(language.eng.infos.fort_rocha.page_info.text_4);
        $('#page-fort-rocha').children("div").children("p").eq(4).text(language.eng.infos.fort_rocha.page_info.text_5);


        //sobre industria
        $('#page-industria').children("div").children("h1").text(language.eng.infos.industry.title);
        $('#page-industria').children("div").children("p").eq(0).text(language.eng.infos.industry.page_info.text_1);
        $('#page-industria').children("div").children("p").eq(1).text(language.eng.infos.industry.page_info.text_2);

        //fale conosco
        $('.form').children("div").children("div").children("h1").text(language.eng.contact_us.title);
        $('.form').children("div").children("div").children("p").text(language.eng.contact_us.info);
        $('form').children("div").children("div").children("label").eq(0).text(language.eng.contact_us.form_name);
        $('form').children("div").children("div").children("label").eq(1).text(language.eng.contact_us.form_email);
        $('form').children("div").children("div").children("label").eq(2).text(language.eng.contact_us.form_subject);
        $('.form-group').children("label").text(language.eng.contact_us.form_message);
        $('form').children("button").text(language.eng.contact_us.button);

    }

    $('.btn-language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        if($(this).attr('id') == "pt"){
            console.log("pt language");

        }
        else{
            console.log("eng language");
        }
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

    //const buttonSendForm = document.querySelector('.form .btn');


    /*if(window.location.hash){
               if(window.location.hash === "#pt"){
                  hi.textContent = language.pt.welcome;
                  }
    if(window.location.hash === "#eng"){
                  hi.textContent = language.eng.welcome;
                  }
               }*/


    var menuBarHeight = $('#header').height();

    var buttonFortRocha = document.querySelectorAll('.fort-rocha button');
    var buttonIndustria = document.querySelectorAll('.industria button');

    buttonFortRocha.forEach(button => button.addEventListener('click', function(){
        window.location.href = "sobre-fort-rocha.html";
    }));

    buttonIndustria.forEach(button => button.addEventListener('click', function(){
        window.location.href = "industria.html";
    }));

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
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                document.getElementsByName('nome')[0].placeholder='Please insert your NAME!';
                document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
            }
            else{
                document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
                document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
            }
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
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                alert("Your email was sent successfully");
            }
            else{
                alert("Seu email foi enviado com sucesso");
            }
            window.location.reload(false); 
        }); 
    } 
});