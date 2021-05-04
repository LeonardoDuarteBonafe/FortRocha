<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <!--<script>
            var pageLanguage = localStorage.getItem("language");
            $(function(){
                if(pageLanguage == "eng"){
                    $('#header').load('php/headernaven.html');
                }
                else{
                    $('#header').load('php/headernav.html');
                }
            });

            $(function(){
                if(pageLanguage == "eng"){
                    $('#faleconosco').load('php/faleconoscoen.html');
                }
                else{
                    $('#faleconosco').load('php/faleconosco.html');
                }
            });

            $(function(){
                if(pageLanguage == "eng"){
                    $('#footer').load('php/footeren.html');
                }
                else{
                    $('#footer').load('php/footer.html');
                }
            });
        </script>-->

        <link rel="icon" href="Imagens/site-icon.png">
        <title>Fort Rochas</title>
    </head>
    <body>
        <?php 
            include 'php/headernav.html';
        ?>
        <!--<div id="header"></div>

        <div class="language">
            <a data-reload id="pt" class="btn-language"><img src="Imagens/language-pt.png"></a>
            <a data-reload id="eng" class="btn-language"><img src="Imagens/language-eng.png"></a>
        </div>-->

        <div class="container form">
            <div class="row justify-content-between">
                <div class="col-12 col-sm-6 text-center">
                    <h1>Fale Conosco</h1>
                    <div class="blue-square"></div>
                    <p>Entre em contato preenchendo o formulário ou através do telefone ou e-mail.</p>
                </div>
                <div class="col-12 col-sm-5 justify-content-end">
                    <form>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label>Seu nome (obrigatório)</label>
                                <input type="text" class="form-control" required id="nome" name="nome">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label>Seu e-mail (obrigatório)</label>
                                <input type="email" class="form-control" required id="email" name="email">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label>Assunto</label>
                                <input type="text" class="form-control" id="assunto">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Sua Mensagem</label>
                            <textarea class="form-control" rows="5" id="mensagem"></textarea>
                        </div>
                        <button type="button" class="btn submitForm">Enviar</button>
                        <!--<input class="submitForm" value="Enviar2">-->
                    </form>
                </div>
            </div>
        </div>

        <?php 
            include 'php/footer.html';
        ?>

        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script type="text/javascript" src="main.js"></script>

    </body>
</html>