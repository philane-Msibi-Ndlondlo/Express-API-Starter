// SETUP PORT
const port = process.env.PORT || 1337;

module.exports = (app) => {

    app.listen(port, (error) => {

        if (error) {
            throw new Error(JSON.stringify(error));
        }

        console.log(`listening on http://localhost:${port}`)

    });

}