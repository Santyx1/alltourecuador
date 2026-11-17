<?php
/**
 * Guarda tours.json desde el panel admin.
 * Recibe un array JSON por POST y sobrescribe tours.json (en la raíz).
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// --- Token simple (cámbialo y pon el MISMO en admin.js) ---
$TOKEN_ESPERADO = 'CAMBIA_ESTE_TOKEN';
$tokenRecibido  = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';

if ($tokenRecibido !== $TOKEN_ESPERADO) {
    http_response_code(401);
    echo json_encode(['error' => 'No autorizado']);
    exit;
}

// --- Leer body ---
$raw = file_get_contents('php://input');
$tours = json_decode($raw, true);

if (!is_array($tours)) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido o no es un array']);
    exit;
}

// --- Ruta destino (raíz, junto a save-tours.php) ---
$destino = __DIR__ . '/tours.json';

// --- Backup antes de sobrescribir ---
if (file_exists($destino)) {
    $backupDir = __DIR__ . '/backups/';
    if (!is_dir($backupDir)) {
        @mkdir($backupDir, 0755, true);
    }
    $backupFile = $backupDir . 'tours-' . date('Ymd-His') . '.json';
    @copy($destino, $backupFile);
}

// --- Escribir ---
$json = json_encode($tours, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if (file_put_contents($destino, $json, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo escribir tours.json. Verifica permisos.']);
    exit;
}

echo json_encode([
    'ok'    => true,
    'count' => count($tours),
    'file'  => 'tours.json'
]);
