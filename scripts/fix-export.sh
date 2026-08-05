#!/bin/bash
set -Eeuo pipefail

# Fix Next.js static export file structure
# Moves root-level HTML files to their correct folder locations

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"
OUT_DIR="${COZE_WORKSPACE_PATH}/out"

echo "Fixing static export file structure..."

# Function to move HTML file to folder
move_to_folder() {
    local html_file="$1"
    local folder_name="$2"
    
    if [ -f "${OUT_DIR}/${html_file}" ]; then
        # Create folder if it doesn't exist
        mkdir -p "${OUT_DIR}/${folder_name}"
        
        # Move HTML file to folder as index.html
        mv "${OUT_DIR}/${html_file}" "${OUT_DIR}/${folder_name}/index.html"
        echo "Moved ${html_file} -> ${folder_name}/index.html"
    fi
}

# Move root-level HTML files to their folders
move_to_folder "about.html" "about"
move_to_folder "contact.html" "contact"
move_to_folder "products.html" "products"

# Move product detail pages
move_to_folder "hq26a.html" "products/hq26a"
move_to_folder "hq1530.html" "products/hq1530"
move_to_folder "pulse-cleaning.html" "products/pulse-cleaning"
move_to_folder "nitrogen-generator.html" "products/nitrogen-generator"

# Clean up __next.*.txt files (build artifacts)
echo "Cleaning up build artifacts..."
find "${OUT_DIR}" -name "__next.*.txt" -type f -delete

echo "File structure fixed!"
echo ""
echo "Final structure:"
ls -la "${OUT_DIR}/"
