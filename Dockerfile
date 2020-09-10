FROM nginx:1.15.8-alpine
RUN apk add --no-cache nano
COPY dist/gravity-admin /usr/share/nginx/html
COPY drc.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd
