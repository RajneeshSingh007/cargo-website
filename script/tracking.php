<?php
header('Content-Type: application/json');

$host = '18.197.109.20';
$db = 'escargo';
$user = 'preego';
$pass = 'Es5892Ey38##!!';

// Create a new PDO instance
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

// Retrieve and sanitize inputs
$musteri_kodu = filter_input(INPUT_GET, 'musteri_kodu', FILTER_SANITIZE_STRING);
$kabul_no = filter_input(INPUT_GET, 'kabul_no', FILTER_SANITIZE_STRING);

// Validate inputs
if (empty($musteri_kodu) || empty($kabul_no)) {
    echo json_encode(['error' => 'Missing customer code or acceptance number']);
    exit;
}

// Prepare and execute the SQL query securely
$sql = "SELECT KargoRefNo as cargo_ref, KabulSiraNo as sir_no, gonderen as gonderen, kg_toplam as cargo_weight, tarih AS initial_date, teslimat_tarih AS arrival_date, TahminiTarihi AS estimated_date FROM kabul_fisi WHERE musteri_kodu = :musteri_kodu AND kabul_no = :kabul_no";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':musteri_kodu', $musteri_kodu, PDO::PARAM_STR);
$stmt->bindParam(':kabul_no', $kabul_no, PDO::PARAM_STR);
$stmt->execute();

// Fetch the result
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $response = $result;
} else {
    $response = ['error' => 'No data found for the provided customer code and acceptance number.'];
}

echo json_encode($response);
?>
