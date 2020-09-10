# Gravity Admin
Simple admin app for [gravity-operator](https://github.com/moiot/gravity-operator) which provides config template(in json editor) and talks to operator to maintain gravity pipelines.

## Create .htpasswd file
```bash
htpasswd -c .htpasswd <username>
```

## Build from source
```bash
$ npm install
$ npm run build -- --prod
$ sudo docker build -t markhaakman/gravity-admin:TAG .
```

## Test locally
```bash
sudo docker run -it -p 80:80 markhaakman/gravity-admin:TAG
```
The admin panel is now available at http://localhost
