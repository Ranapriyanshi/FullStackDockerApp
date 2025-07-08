# backend/Dockerfile
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]