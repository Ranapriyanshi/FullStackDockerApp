# frontend/Dockerfile
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose frontend port
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]