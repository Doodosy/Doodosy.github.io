<?php
if(isset($_GET['name']) && $_GET['phone'] != ''){
    header('Location: /success.php?sub3=' . $_GET["sub3"]);
}
?>
<!DOCTYPE html>
<html lang="it" data-type="form">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Slim4Vit</title>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link media="all" href="assets/css/main.css" type="text/css" rel="stylesheet">
</head>
<body>

    <div class="dct-form-wrapper">
        
        <style>
            body {font-family: Arial, Helvetica, sans-serif;}
            .product-block {max-width:800px;margin: 0 auto 20px; text-align: center;}
            .product-block p {padding: 0 0 20px; font-size: 20px;}
            .product-block ul {list-style-type: none;}
            .product-block ul li {padding: 0 0 20px; font-size: 20px;}
        </style>
        <div class="product-block">
            <!-- <h2>Slim4Vit è un oggetto sovrappeso che non richiede una dieta rigorosa. Slim4Vit ha numerose preferenze rispetto alla dieta esemplare.</h2> -->
            <img src="assets/img/product.png" alt="Product" class="dct-product-image">
            <br><br>
            <p><b>PERCHÉ SLIM4VIT È COSÌ EFFICACE?</b></p>
            <ul>
                <li>+ CAFFEINA+ CURCUMA+ GINSENG+ GUARANÀ</li>
                <li>+ GLAMOUR + TÈ VERDE + ESTRATTO DI MISCELA DI PEPE.</li>
                <li>+ ESTRATTO DI GARCINIA + ESTRATTO DI TÈ VERDE + ESTRATTO DI ORTICA + SPIRULINA + MENTA PIPERITA.</li>
            </ul>
            
        </div>
        
        <div class="dct-form-container">

            <!-- <div class="delivery-info" id="dct-form-anchor">
                <div class="delivery-show-text">
                    <h3 class="delivery-title">Consegna</h3>
                    <p class="delivery-subtitle">Ci prendiamo cura dei nostri clienti, è per questo che abbiamo reso più sicura la consegna.</p>
                    <p class="pseudo-link"><span class="pseudo-link-text">Il che significa</span> <span class="lsaquo">&lsaquo;</span></p>
                </div>
                <div class="delivery-hide-text show">
                    <ul class="delivery-list">
                        <li class="delivery-list-item-1">Il prodotto viene spedito in un imballaggio ermetico</li>
                        <li class="delivery-list-item-2">I nostri corrieri lasciano il tuo pacco e si allontanano a 5 metri di distanza, dopo aver disinfettato la confezione con antisettico</li>
                        <li class="delivery-list-item-3">I corrieri fanno il tampone per la diagnosi da virus</li>
                        <li class="delivery-list-item-4">Hanno l’obbligo di indossare le maschere e i guanti e cambiarli dopo ogni consegna</li>
                    </ul>
                </div>
                <hr>
            </div> -->

            <form method="GET" action="order.php" class="dct-form" onsubmit="location.href=this.action+window.location.search;return false;">

                <label class="dct-form-label-name">Il tuo nome</label>
                <input name="name" type="text" placeholder="Nome">

                <label class="dct-form-label-phone">Il tuo numero di telefono</label>
                <input name="phone" type="tel" placeholder="+39">

                <span id="valid-msg" class="valid-msg hide">✓ Valid</span>
                <span id="error-msg" class="error-msg hide"></span>

                <button type="submit"><span class="sprite button-icon"></span><span class="button-text">ORDINARE</span>
                </button>

            </form>
            

            <!-- <div class="dct-timer-container">
                <div class="text">Lo sconto del 50% termina in:</div>
                <div id="timer" class="dct-timer">
                    <span class="hour">
                        <span class="dct-num hour0">1</span>
                        <span class="dct-num hour1">1</span>
                    </span>
                    <span class="dct-dot">:</span>
                    <span class="minute">
                        <span class="dct-num min0">3</span>
                        <span class="dct-num min1">6</span>
                    </span>
                    <span class="dct-dot">:</span>
                    <span class="dct-second">
                        <span id="sec0" class="dct-num sec0">3</span>
                        <span id="sec1" class="dct-num sec1">2</span>
                    </span>
                </div>
            </div> -->

            <br><br>
            
            <div class="dct-product-price">
                <div class="dct-price-old">
                    <span class="dct-price-old-text">Prezzo totale: </span>
                    <span class="dct-price-old-amount">78<span class="dct-currency-symbol">€</span></span>
                </div>
                <div class="dct-price-new">
                    <span class="dct-price-new-text">Prezzo promozionale: </span>
                    <span class="dct-price-new-amount">39<span class="dct-currency-symbol">€</span></span>
                </div>
            </div>
            
        </div>
    </div>

    <div class="dct-go-land">
        <a class="dct-go-land-btn" href="lp/" onclick="location.href=this.href+window.location.search;return false;">
            VAI AL SITO UFFICIALE
        </a>
    </div>

    <div class="dct-privacy-policy"><a href="/privacy_policy/?lang=IT" target="_blank">Politica sulla riservatezza</a></div>

</body>
</html>