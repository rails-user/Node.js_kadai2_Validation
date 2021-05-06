//controllerモジュールをアプリケーションに追加
const controller = require("../controllers/controller.js");
//expressモジュールをアプリケーションに追加
express = require("express")
//ルーティング処理のインスタンス生成
const router = express.Router()
//バリデータ用インスタンスの生成
const { validationResult } = require('express-validator');

router.get("/login", (req, res) => {
    controller.getLogin(req, res);
})

router.get("/register", (req, res) => {
    controller.getRegister(req, res);
})

router.post("/login", (req, res) => {
    controller.postHomePage(req, res);
})

// 外部ファイル化したバリデーション読み込み
const validator = require('../validator/validator.js');
router.post("/register", validator, (req, res) => {
    const errors = validationResult(req);
    controller.postRegister(req, res, errors);
})

module.exports = router