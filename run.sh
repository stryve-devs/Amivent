#!/bin/bash
echo "🚀 Starting Amivent Full-Stack..."

if docker-compose up -d --build; then
    echo "✅ System is running!"
    echo "🔗 Frontend: http://localhost:3001"
    echo "🔗 Backend:  http://localhost:5001"
else
    echo "❌ Build failed. Check the errors above."
    exit 1
fi