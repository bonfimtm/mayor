#!/bin/sh
# Example: ./convert-images.sh 'src/assets/images/*'
for file in $1
do
    cwebp -q 50 "$file" -o "${file%.*}.webp"
done
