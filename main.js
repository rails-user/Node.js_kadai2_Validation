//expressモジュールをアプリケーションに追加
express = require("express");
//インスタンスの生成
app = express();
//ブランチがdevelopなのでポート番号は3000を設定する
app.set("port", 3000);
//ejsの設定
app.set("view engine","ejs");

//bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//非推奨のbodyParser
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

//routeモジュールをアプリケーションに追加
const route = require("./routes/route.js");
app.use('/', route);

app.listen(app.get("port"), () => {
	console.log(`Server is listening on port number:${app.get("port")}`);
});