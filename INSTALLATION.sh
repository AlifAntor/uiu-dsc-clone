#!/bin/bash

# UIU Data Science Club Website - Installation Script

echo "╔════════════════════════════════════════╗"
echo "║  UIU Data Science Club Website Setup   ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo "✓ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✓ Dependencies installed"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# UIU Data Science Club Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo "✓ .env.local created"
else
    echo "✓ .env.local already exists"
fi

echo ""
echo "✓ Installation complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "📱 Open http://localhost:3000 in your browser"
echo ""
