# README

1. Fork
2. git clone

## 初始化
### Initialize
```
git remote https://github.com/elliotcs30/movie-express-grading.git 
npm install

### Node.js & Express 相關套件
```
  "node.js": "14.16.0"
  "express": "4.17.1"
  "express-handlebars": "5.3.3"
  "method-override": "3.0.0"
  "nodemon": "2.0.12"
```

### MySQL 資料庫相關套件
```
  "mysql2": "2.3.0"
  "sequelize": "6.6.5"
  "sequelize-cli": "6.2.0"
```

### 登入驗證相關套件
```
  "express-session": "1.17.2"
  "passport": "0.4.1"
  "passport-local": "1.0.0"
  "bcryptjs": "2.4.3"
```

### 其他小工具
```
  "faker": "5.5.3"
  "connect-flash": "0.1.1"
  "dayjs": "1.10.6"
  "multer": "1.4.3"
  "imgur": "1.0.2"
  "dotenv": "10.0.0"
```

### 程式碼格式整理相關套件
```
  "eslint": "7.32.0"
  "eslint-config-standard": "16.0.3"
  "eslint-plugin-import": "2.23.4"
  "eslint-plugin-node": "11.1.0"
  "eslint-plugin-promise": "5.1.0"
```

### 測試相關套件
```
  "chai": "4.3.4"
  "mocha": "9.1.1"
  "sinon": "11.1.2"
  "supertest": "6.1.6
```

### Bootstrap 相關套件
```
  Bootstrap 5.0.2 (CDN)
  popper.js 2.9.2 (CDN)
```

### 設定資料庫
需要與 config/config.json 一致

```
create database movies;
```

### 執行測試
```
npm run test
```

## 共用帳號
請一律設定下面 2 組帳號以利驗收：
* 第一組帳號有 admin 權限：
  * email: root@example.com
  * password: 12345678
* 第二組帳號沒有 admin 權限：
  * email: user1@example.com
  * password: 12345678