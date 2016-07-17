# 使用说明

## 测试环境
- ubuntu 14.04 desktop
- LEMP
- drupal-7.50
- Omega-7.x-44
- nodejs v4.4.7

## 安装
安装nodejs 参考:https://github.com/nodesource/distributions

```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

安装 gulp 参考：https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

```
$ npm install --global gulp-cli
```

主题部分

```
$ cd sites/all/themes/{THEME}
$ npm install
$ gulp
```
