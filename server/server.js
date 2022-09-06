const config = require("./config");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    try {
        config.database.query("SELECT * FROM Personne", (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            res.send(result);
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/users", (req, res) => {
    try {
        console.log("req.body", req.body.user);
        const { name, firstName, email, phoneNumber, paypalLink, budget } =
            req.body.user;

        const login = req.body.userLogin;

        config.database.query(
            "UPDATE personne SET `nom` = ?,`prenom` = ?,`email_personne` = ?,`telephone` = ?,`prix_max_personne` = ?,`paypal` = ? WHERE `login` = ?",
            [name, firstName, email, phoneNumber, budget, paypalLink, login],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(result);
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(config.port, () => {
    console.log(`Yey, your server is running on port ${config.port}`);
});
