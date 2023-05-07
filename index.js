const express = require("express");
const app = express();
const eta = require("eta");


app.engine("eta", eta.renderFile);
eta.configure({ views: "./views", cache: true });
app.set("views", "./views");
app.set("view cache", true);
app.set("view engine", "eta");
app.use(express.static('assets'));

app.get("/", function (req, res) {
    res.render("index.eta", {});
});

app.get("/qui-sommes-nous", function (req, res) {
    res.render("whoweare.eta", {});
});

app.get("/nos-produits", function (req, res) {
    let products = [
        { id: 1, name: "Rolex Submariner", descriptionShort: "Montre de plongée iconique avec une lunette tournante pour mesurer les temps de plongée.", descriptionLong: "La Submariner est l'une des montres les plus emblématiques de Rolex. Elle est appréciée pour son design élégant et intemporel, ainsi que pour sa qualité de fabrication exceptionnelle. La version actuelle est dotée d'un boîtier en acier inoxydable de 40 mm, d'un bracelet Oyster en acier inoxydable et d'un cadran noir." },
        { id: 2, name: "Omega Speedmaster", descriptionShort: "Montre de sport chic avec un boîtier en acier inoxydable et un bracelet en maillons.", descriptionLong: "La Speedmaster est une montre emblématique qui a été portée sur la lune lors de la mission Apollo 11 en 1969. Elle est connue pour sa fiabilité et son style intemporel. La version actuelle est dotée d'un boîtier en acier inoxydable de 42 mm, d'un bracelet en acier inoxydable et d'un cadran noir." },
        { id: 3, name: "Audemars Piguet Royal Oak", descriptionShort: "Montre de luxe classique avec un boîtier rectangulaire et un bracelet en cuir élégant.", descriptionLong: "La Royal Oak est une montre de luxe qui a été introduite en 1972. Elle est connue pour son boîtier octogonal en acier inoxydable et son bracelet intégré. La version actuelle est dotée d'un boîtier en acier inoxydable de 41 mm, d'un bracelet en acier inoxydable et d'un cadran bleu." },
        { id: 4, name: "Patek Philippe Nautilus", descriptionShort: "Montre de sport en acier inoxydable avec un cadran octogonal et un bracelet intégré.", descriptionLong: "La Nautilus est une montre de luxe sportive qui a été introduite en 1976. Elle est connue pour son boîtier octogonal en acier inoxydable et son bracelet intégré. La version actuelle est dotée d'un boîtier en acier inoxydable de 40 mm, d'un bracelet en acier inoxydable et d'un cadran bleu." },
        { id: 5, name: "Cartier Tank", descriptionShort: "Montre de luxe emblématique avec un boîtier rectangulaire qui se retourne pour protéger le cadran.", descriptionLong: "La Tank est une montre de luxe intemporelle qui a été introduite en 1917. Elle est connue pour son design élégant et sa simplicité. La version actuelle est dotée d'un boîtier en or rose de 34,3 mm, d'un bracelet en cuir noir et d'un cadran argenté." }
    ]
    res.render("products.eta", { products: products });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});