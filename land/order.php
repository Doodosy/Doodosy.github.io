<?php
 session_start();
 $_SESSION['done'];
// if($_GET)foreach($_GET as $key => $value) $_SESSION[$key] = $value;
// echo $_SESSION["sub1"];
// echo $_SESSION["sub2"];
// echo $_SESSION["sub3"];
const THANKS_URL = '/form.php'; // ссылка на страницу "спасибо"
// const FLOW_TOKEN = 'DjZrT'; // ТОКЕН ПОТОКА
// const CLIENT_TOKEN = 'IEGDJ6KQOIOY1GGOHGOBJW'; // ТОКЕН КЛИЕНТА (получается в настройках ПП)
const FLOW_TOKEN = 'BXj04'; // ТОКЕН ПОТОКА
const CLIENT_TOKEN = 'NJIWMDA0NWETNWE2NI00NJFLLWIZNDATYZIYOTJKNMU5YTUX'; // ТОКЕН КЛИЕНТА (получается в настройках ПП)

if (isset($_POST['name']) && $_POST['phone'] != '') {
    $post = [
			"stream_code" => FLOW_TOKEN,
			"client" => [
				'name' => $_POST['name'],
				'phone' => $_POST['phone'],
			],
			'sub1' => $_POST["sub1"],
			'sub2' => $_POST["sub2"],
			'sub3' => $_POST["sub3"],
			'sub4' => $_POST["sub4"],
			'sub5' => $_POST["sub5"]
    ];
    // отправляем заявку
    $ch = curl_init('https://affiliate.drcash.sh/v1/order');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Authorization: Bearer '.CLIENT_TOKEN));
    $response = json_decode(curl_exec($ch));
    curl_close($ch);
    if (isset($response->uuid)) {
        $arr = (array)$response;
        $arr['name'] = $_POST['name'];
        $arr['phone'] = $_POST['phone'];
        $arr['sub3'] = $_POST['sub3'];
        $url = THANKS_URL . (strrpos(THANKS_URL, '?') ? '&' : '?') .
        http_build_query($arr); // добавляем параметры
        header('Location: '. $url); // редирект
        exit;
    }
} else {
    header('Location: /'); // редирект
}
?>