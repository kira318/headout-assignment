# headout-assignment

to run:

Build the image:
docker build -t your-image-name:latest .

run the container:
docker run -p 8080:8080 --platform=linux/amd64 --platform=linux/arm64 --memory=1500m --cpus=2 your-image-name:latest
