FROM nginx:1.15.8-alpine
COPY dist/gravity-admin /usr/share/nginx/html
COPY drc.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd /etc/nginx/.htpasswd
