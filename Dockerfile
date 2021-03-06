FROM node:12.7-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

## the production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]