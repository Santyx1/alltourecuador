<?php
/**
 * save-tours.php
 * Guarda data/tours.json desde el panel admin.
 *
 * Ubicación: raíz del proyecto (junto a index.html)
 * Recibe: POST con JSON (array de tours) y header X-Admin-Token
 */

header('Content-Type: application/json; charset=utf-8');

/* ------------------------------------------
   1. Solo permitir POST
------------------------------------------ */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

/* ------------------------------------------
   2. Token de seguridad
   ⚠️ Cambia 'CAMBIA_ESTE_TOKEN' por una cadena larga y aleatoria
   ⚠️ El MISMO valor debe estar en admin/admin.js (const TOKEN)
------------------------------------------ */
$TOKEN_ESPERADO = 'a7K9mP2xQ5vN8bR4tY6wZ1cL3jH0sD9f';
$tokenRecibido  = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';

if ($tokenRecibido !== $TOKEN_ESPERADO) {
    http_response_code(401);
    echo json_encode(['error' => 'No autorizado']);
    exit;
}

/* ------------------------------------------
   3. Leer el body (JSON enviado por fetch)
------------------------------------------ */
$raw = file_get_contents('php://input');
$tours = json_decode($raw, true);

if (!is_array($tours)) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido o no es un array']);
    exit;
}

/* ------------------------------------------
   4. Ruta destino: data/tours.json
   (__DIR__ = carpeta donde está este PHP = raíz)
------------------------------------------ */
$destino = __DIR__ . '/data/tours.json';

if (!file_exists($destino)) {
    http_response_code(500);
    echo json_encode(['error' => 'No existe data/tours.json. Verifica la ruta.']);
    exit;
}

/* ------------------------------------------
   5. Backup antes de sobrescribir
------------------------------------------ */
$backupDir = __DIR__ . '/backups/';
if (!is_dir($backupDir)) {
    @mkdir($backupDir, 0755, true);
}
$backupFile = $backupDir . 'tours-' . date('Ymd-His') . '.json';
@copy($destino, $backupFile);

/* ------------------------------------------
   6. Escribir el JSON formateado
------------------------------------------ */
$json = json_encode(
    $tours,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
);

if (file_put_contents($destino, $json, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode([
        'error' => 'No se pudo escribir data/tours.json. Verifica permisos (755 carpeta, 644 archivo).'
    ]);
    exit;
}

/* ------------------------------------------
   7. Respuesta OK
------------------------------------------ */
echo json_encode([
    'ok'     => true,
    'count'  => count($tours),
    'file'   => 'data/tours.json',
    'backup' => 'backups/' . basename($backupFile)
]);
