<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" type="text/css" href="lightbox.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <script type="text/javascript" src="lightbox-plus-jquery.min.js"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

        <script type="text/javascript" src="main.js"></script>

        <link rel="icon" href="Imagens/Site-Icon/site-icon.webp">
        <title>Fort Rochas</title>
    </head>
    <body>
        <?php 
        include 'php/headernav.html';
        ?>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="Imagens/Carousel-Top/banner1.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="Imagens/Carousel-Top/banner2.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="Imagens/Carousel-Top/banner3.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="Imagens/Carousel-Top/banner4.webp" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>

        <div class="infos">
            <div class="row fort-rocha">
                <div class="col-12 col-sm-5 align-self-center texts">
                    <h1>Sobre Fort Rocha</h1>
                    <p class="text-justify">Uma empresa experiente, que iniciou no mercado com a comercialização do belo Mármore Branco Super White e prestando serviços de serrada.</p>
                    <button class="button-before">Saiba mais...</button>
                </div>
                <div class="col-12 col-sm-7 d-flex justify-content-end">
                    <a href="Imagens/Infos/image-sobre-fort-rocha.webp" data-lightbox="mygallerySobreFort" data-title="Fort Rocha"><img src="Imagens/Infos/image-sobre-fort-rocha.webp"></a>
                </div>
                <div class="col-12 align-self-center button-after">
                    <button>Saiba mais...</button>
                </div>
            </div>
            <div class="row industria">
                <div class="col-12 col-sm-5 align-self-center texts">
                    <h1>Indústria</h1>
                    <p class="text-justify">Contamos com um pátio industrial moderno, com maquinários de qualidade e de alta tecnologia para produzir sempre um material perfeito para você.</p>
                    <button class="button-before">Saiba mais...</button>
                </div>
                <div class="col-12 col-sm-7 d-flex justify-content-end">
                    <a href="Imagens/Infos/image-industria.webp" data-lightbox="mygalleryIndustria" data-title="Indústria"><img src="Imagens/Infos/image-industria.webp"></a>
                </div>
                <div class="col-12 align-self-center button-after">
                    <button>Saiba mais...</button>
                </div>
            </div>
        </div>
        <?php
        include 'php/produtos.html';
        ?>
        <div class="pedreira">
            <h1>Pedreira</h1>
            <div class="box">
                <a href="Imagens/Pedreira/imagem1.webp" data-lightbox="mygalleryPedreira" data-title="Super White"><img src="Imagens/Pedreira/imagem1.webp"></a>
                <p>Crystal</p>
            </div>
            <div class="box">
                <a href="Imagens/Pedreira/imagem2.webp" data-lightbox="mygalleryPedreira" data-title="Lançamento"><img src="Imagens/Pedreira/imagem2.webp"></a>
                <p>Lançamento</p>
            </div>
        </div>
        <?php
        include 'php/maps.html';
        include 'php/faleconosco.html';
        include 'php/footer.html'
        ?>
    </body>
</html>