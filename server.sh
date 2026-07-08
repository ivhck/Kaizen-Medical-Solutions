#!/bin/bash
# Simple HTTP server para desarrollo local

echo "Iniciando servidor web local..."
echo "Visitа: http://localhost:8000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Detectar si Python 3 está disponible
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Si no, intentar Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
# Si no, intentar Node.js
elif command -v npx &> /dev/null; then
    npx http-server . -p 8000
else
    echo "Error: No se encontró Python ni Node.js"
    echo "Por favor instala Python 3 o Node.js"
    exit 1
fi
