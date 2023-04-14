
FROM node:latest as node

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application files to the container
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose port 80 for the web server
EXPOSE 80

# Define the command to run when the container starts
CMD ["npm", "start"]