class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');

    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('New details');
    }

    //   app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news')
    //   })
}

module.exports = new NewsController