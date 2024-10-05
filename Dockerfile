# Use an official Node runtime as the base image
FROM node:18-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build Storybook
RUN npm run build-storybook

# Expose the port Storybook runs on
EXPOSE 6006

# Define the command to run Storybook
CMD ["npm", "run", "storybook"]

# Install xdg-utils
RUN apt-get update && apt-get install -y xdg-utils
