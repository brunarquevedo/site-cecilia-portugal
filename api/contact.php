<?php
/**
 * Contact Form Handler
 *
 * This script processes contact form submissions from /contato.html
 * and sends them via email using Hostinger's PHP mail() function.
 *
 * SETUP INSTRUCTIONS:
 * 1. Replace "TODO: contact@example.com" with the actual email address
 * 2. Ensure your email is configured in Hostinger control panel
 * 3. Test the form on your domain
 */

// Set content type to JSON
header('Content-Type: application/json; charset=UTF-8');

// Allow requests from your domain
$allowed_origins = array(
  'http://localhost:8000',
  'http://localhost:3000',
  // Add your live domain here when deployed:
  // 'https://www.TODO-DOMAIN.com',
  // 'https://TODO-DOMAIN.com'
);

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowed_origins)) {
  header('Access-Control-Allow-Origin: ' . $origin);
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
}

// Handle preflight (OPTIONS) requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(array(
    'success' => false,
    'message' => 'Método não permitido. Use POST.'
  ));
  exit;
}

/* ================================================================
   INPUT VALIDATION
   ================================================================ */

// Get and sanitize input
$nome = isset($_POST['nome']) ? trim(strip_tags($_POST['nome'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$mensagem = isset($_POST['mensagem']) ? trim(strip_tags($_POST['mensagem'])) : '';

// Validate required fields
if (empty($nome) || empty($email) || empty($mensagem)) {
  http_response_code(400);
  echo json_encode(array(
    'success' => false,
    'message' => 'Por favor, preencha todos os campos obrigatórios.'
  ));
  exit;
}

// Validate field lengths
if (strlen($nome) < 2 || strlen($nome) > 100) {
  http_response_code(400);
  echo json_encode(array(
    'success' => false,
    'message' => 'Nome deve ter entre 2 e 100 caracteres.'
  ));
  exit;
}

if (strlen($mensagem) < 10 || strlen($mensagem) > 2000) {
  http_response_code(400);
  echo json_encode(array(
    'success' => false,
    'message' => 'Mensagem deve ter entre 10 e 2000 caracteres.'
  ));
  exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(array(
    'success' => false,
    'message' => 'E-mail inválido. Por favor, verifique.'
  ));
  exit;
}

/* ================================================================
   RATE LIMITING (Simple IP-based)
   ================================================================ */

$client_ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
$cache_dir = sys_get_temp_dir();
$cache_file = $cache_dir . '/rate_limit_' . md5($client_ip) . '.txt';

// Check if this IP has recently submitted
if (file_exists($cache_file)) {
  $last_submission = (int)file_get_contents($cache_file);
  $time_diff = time() - $last_submission;

  // Allow only 1 submission per minute per IP
  if ($time_diff < 60) {
    http_response_code(429);
    echo json_encode(array(
      'success' => false,
      'message' => 'Muitas requisições. Por favor, aguarde um minuto antes de enviar outra mensagem.'
    ));
    exit;
  }
}

// Update rate limit timestamp
file_put_contents($cache_file, time());

/* ================================================================
   SEND EMAIL
   ================================================================ */

// TODO: Replace with actual email address
$to = 'TODO: contact@example.com';

// Email subject
$subject = 'Nova mensagem do site: ' . $nome;

// Email body
$body = "De: {$nome}\n";
$body .= "E-mail: {$email}\n";
$body .= "Data: " . date('d/m/Y H:i:s') . "\n";
$body .= "IP: {$client_ip}\n";
$body .= "---\n\n";
$body .= "Mensagem:\n";
$body .= "{$mensagem}\n";

// Email headers
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email using PHP's mail() function
if (mail($to, $subject, $body, $headers)) {
  // Success
  http_response_code(200);
  echo json_encode(array(
    'success' => true,
    'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
  ));
} else {
  // Failure
  http_response_code(500);
  echo json_encode(array(
    'success' => false,
    'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'
  ));
}
?>
