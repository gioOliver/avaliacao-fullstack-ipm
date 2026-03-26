<?php
require_once __DIR__ . '/../src/Database/Connection.php';

$conn = Connection::getConnection();

$stmt = $conn->query("SELECT 1 as test");
$result = $stmt->fetch();

echo "Conexão OK 🚀<br>";
echo "Teste query: " . $result['test'];