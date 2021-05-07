exports.getLogin = (req, res) => {
    res.render("../views/login.ejs");
}

exports.getRegister = (req, res) => {
    res.render("../views/register.ejs", {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errMessage: ''
        });
}

exports.postHomePage = (req, res) => {
    res.render("../views/home.ejs", {name: req.body.username});
}

exports.postRegister = (req, res, errors) => {
    const errArray = errors.array();
    //エラーの場合
    if(!errors.isEmpty()) {
        res.render("../views/register.ejs", {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        errMessage: errArray
        })
    //エラーではない場合
    } else {
        res.render("../views/home.ejs", {name: req.body.username});
    }
}
