class SiteController {

    // [GET] /
    index(req, res) {
        res.render('home');

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    // app.get("/", (req, res) => {
    //     res.render("home");
    // });

    // app.get("/search", (req, res) => {
    //     console.log(req.query.author)
    //     res.render("search");
    // });

    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send("");
    // });
}

module.exports = new SiteController