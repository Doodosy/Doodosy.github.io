<!DOCTYPE html>
<html lang="it">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dzięki! Twoje zamówienie zostało zaakceptowane!</title>

</head>
<body>


<!-- Facebook Pixel Code -->
<!-- <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '<?php echo $_GET['sub3'];?>');
    fbq('track', 'PageView');
    fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=<?php echo $_GET['sub3'];?>&ev=PageView&noscript=1"/>
</noscript> -->
<!-- End Facebook Pixel Code -->

<!-- Facebook Pixel Code -->
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo $_GET['sub3'];?>&ev=Lead&noscript=1"/>
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo $_GET['sub3'];?>&ev=PageView&noscript=1"/>
<!-- End Facebook Pixel Code -->

<div id="wrapper">
    <div class="order-block">
        <div class="text-holder">
            <h2><span>Grazie!</span> Il tuo ordine è stato accettato!</h2>
            <div class="attention">
                <p>Orario del Call center: 10:00&nbsp;-&nbsp;22:00<br>Sarete contattati durante l'Orario di lavoro</p>
            </div>
            <p>Uno dei nostri operatori ti contatterà per confermare il tuo ordine.</p>
            <p>La consegna verrà effettuata da un corriere. Pagamento - alla consegna!</p>
        </div>
    </div>
</div>

<style>
    body {
    margin: 0;
    color: #fff;
    font: 17px/25px Georgia, "Times New Roman", Times, serif;
    background: #1f242a;
}

#wrapper {
    overflow: hidden;
    padding: 50px 15px;
}

.order-block {
    width: 100%;
    max-width: 540px;
    position: relative;
    text-align: center;
    font-size: 22px;
    line-height: 30px;
    margin: 0 auto;  
    padding: 35px;
    border: 5px dashed #fcca49;
    border-radius: 30px;
    background: linear-gradient(to bottom, #262d36, #9a6d1e, #262d36);
    background: -webkit-linear-gradient(to bottom, #262d36, #9a6d1e, #262d36);
    background: -moz-linear-gradient(to bottom, #262d36, #9a6d1e, #262d36);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#262d36, endColorstr=#9a6d1e);  
    -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#262d36, endColorstr=#9a6d1e); 
    box-sizing: border-box; 
}

.order-block:after {
    display: block;
    clear: both;
    content: '';
}

.text-holder {
    width: 100%;
    text-align: center;
}

.attention {
    border: 5px dashed #fcca48;
    padding: 15px 10px;
    margin-bottom: 40px;
}

.order-block h2 {
    font: 30px/35px "Lobster", Arial, Helvetica, sans-serif;
    margin: 0 0 40px;
    color: #fff;
}

.order-block h2 span {
    display: block;
    font-size: 45px;
    line-height: 45px;
    color: #fcca49;
    margin: 0 0 30px;
}

.order-block p {
    margin: 0 0 18px;
}

.attention  p {
    margin-bottom: 0;
}

@media screen and (max-width: 1120px) {
    .order-block {
        font-size: 20px;
    }
    #wrapper {   
        padding: 23px 15px; }
}
</style>
</body></html>