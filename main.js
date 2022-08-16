window.addEventListener("DOMContentLoaded", function () {

    var language = {
        eng: {
            navbar: {
                about_us: "About Us",
                industry: "Industry",
                products: "Products",
                contact_us: "Contact Us",
            },
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
                        text_5: "With our own quarry for the materials Cristal, White dawn, Valentino and Super White, we guarantee continuous supply and quality from extraction to delivery.",
                        text_6: "Envisioning and investing in the company so that you always have our best.",
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
            contact_us_banner: {
                title: "Contact Us",
                text: "Get in touch through our phone number or e-mail address.",
                button: "Contact Us",
            },
            footer: {
                company: "Company",
                address: "Main Avenue, Gironda - Rural Area, City of Cachoeiro de Itapemirim, State of Espírito Santo, Brazil",
                zip_code: "Zip Code 29326-000",
            }
        },
        pt: {
            welcome: "bem vindo"
        }
    };

    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "pt"){
    }
    if(pageLanguage == "eng"){
        //navbar
        $('.navbar').children("a").eq(0).children("img").attr("src", "Imagens/Navbar/menu-bar-logo-en.webp")
        $('.navbar-nav').children("a").eq(0).text(language.eng.navbar.about_us);
        $('.navbar-nav').children("a").eq(1).text(language.eng.navbar.industry);
        $('.navbar-nav').children("a").eq(2).text(language.eng.navbar.products);
        $('.navbar-nav').children("a").eq(3).text(language.eng.navbar.contact_us);

        //carousel
        $('.carousel-inner').children("div").eq(0).children("img").attr("src", "Imagens/Carousel-Top/banner1-en.webp");
        $('.carousel-inner').children("div").eq(1).children("img").attr("src", "Imagens/Carousel-Top/banner2-en.webp");
        $('.carousel-inner').children("div").eq(2).children("img").attr("src", "Imagens/Carousel-Top/banner3-en.webp");
        $('.carousel-inner').children("div").eq(3).children("img").attr("src", "Imagens/Carousel-Top/banner4-en.webp");

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

        //sobre fort rocha
        $('#page-fort-rocha').children("div").children("h1").text(language.eng.infos.fort_rocha.title);
        $('#page-fort-rocha').children("div").children("p").eq(0).text(language.eng.infos.fort_rocha.page_info.text_1);
        $('#page-fort-rocha').children("div").children("p").eq(1).text(language.eng.infos.fort_rocha.page_info.text_2);
        $('#page-fort-rocha').children("div").children("p").eq(2).text(language.eng.infos.fort_rocha.page_info.text_3);
        $('#page-fort-rocha').children("div").children("p").eq(3).text(language.eng.infos.fort_rocha.page_info.text_4);
        $('#page-fort-rocha').children("div").children("p").eq(4).text(language.eng.infos.fort_rocha.page_info.text_5);
        $('#page-fort-rocha').children("div").children("p").eq(5).text(language.eng.infos.fort_rocha.page_info.text_6);

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

        //fale conosco banner
        $('.fale-conosco').children("div").children("h1").text(language.eng.contact_us_banner.title);
        $('.fale-conosco').children("div").children("p").text(language.eng.contact_us_banner.text);
        $('.fale-conosco').children("div").children("button").text(language.eng.contact_us_banner.button);

        //footer
        $('footer').children("div").children("div").eq(0).children("div").eq(0).children("a").children("img").attr("src", "Imagens/Footer/footer-logo-en.webp"); 
        $('footer').children("div").children("div").children("div").eq(1).children("p").eq(0).children("a").text(language.eng.navbar.about_us);
        $('footer').children("div").children("div").children("div").eq(1).children("p").eq(1).children("a").text(language.eng.navbar.industry);
        $('footer').children("div").children("div").children("div").eq(1).children("p").eq(2).children("a").text(language.eng.navbar.products);
        $('footer').children("div").children("div").children("div").eq(1).children("p").eq(3).children("a").text(language.eng.navbar.contact_us);
        $('footer').children("div").children("div").children("div").eq(2).children("h5").text(language.eng.footer.company);
        $('footer').children("div").children("div").children("div").eq(2).children("p").eq(0).children("a").text(language.eng.footer.address);
        $('footer').children("div").children("div").children("div").eq(2).children("p").eq(1).children("a").text(language.eng.footer.zip_code);


    }


    $('.btn-language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

    var menuBarHeight = $('#header').height();

    var buttonFortRocha = document.querySelectorAll('.fort-rocha button');
    var buttonIndustria = document.querySelectorAll('.industria button');

    buttonFortRocha.forEach(button => button.addEventListener('click', function(){
        window.location.href = "sobre-fort-rocha.php";
    }));

    buttonIndustria.forEach(button => button.addEventListener('click', function(){
        window.location.href = "industria.php";
    }));

    if(location.href.split('/').pop()  === "fale-conosco.php"){
        const buttonSendForm = document.querySelector('.submitForm');

        buttonSendForm.addEventListener('click', getFormInfos);


    }
    $('.fale-conosco button').click(function(){
        window.location.href = "fale-conosco.php";
    })

    $('#header').addClass('fixed');

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
        if(nome === "" || email === ""){
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
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            To: 'fort-rocha@hotmail.com',
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} tem interesse no seu produto`,
            Body: `${message}`,
        }).then(function(message){
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