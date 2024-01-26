# Use a multi-architecture base image
FROM --platform=linux/amd64 node:14-slim
FROM --platform=linux/arm64 node:14-slim

WORKDIR /app

# Copy the application files
COPY app.js /app/app.js
COPY tmp/data/ /app/tmp/data

# Install dependencies
RUN npm init -y && npm install express

# Expose port 8080
EXPOSE 8080

# Specify resource constraints
CMD ["node", "app.js"]
