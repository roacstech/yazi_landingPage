# Stage 1: Build the Astro static site
FROM node:22-alpine AS build

WORKDIR /app

# Copy package definitions
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy application source
COPY . .

# Build the static site into /app/dist
RUN npm run build

# Stage 2: Serve with high-performance Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
