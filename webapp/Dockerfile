# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:15-alpine AS builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

ARG REACT_APP_MOVIE_SERVICE_URI
ARG REACT_APP_SHOP_SERVICE_URI
ARG REACT_APP_USER_SERVICE_URI

# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY my-site.cer /etc/ssl/certs/my-site.cer
COPY my-site.key /etc/ssl/private/my-site.key

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
