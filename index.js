const express = require("express");
var methodOverride = require('method-override')
const multer = require('multer');
const app = express();
const path = require("path");

const { v4: uuidv4 } = require('uuid');
uuidv4(); 

const upload = multer({ dest: 'public/uploads/' });

const port = 8080;

app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`Listening to port : ${port}`)
});

app.get("/", (req, res) => {
    res.send("Server working properly.")
});

let posts = [
    {
        id : uuidv4(),
        username : "Isaac Newton",
        content : "His laws of motion and universal gravitation laid the foundation for classical mechanics and our understanding of the universe. He also developed calculus and made significant contributions to optics.",
        photoPath: "/uploads/newton.jpg",
        caption: "A picture of Isaac Newton"
    },
    {
        id : uuidv4(),
        username : "World Map",
        content : "In 1893, Orlando Ferguson published a map depicting Earth as a concave plane, challenging the globe theory with Bible references. His work was part of a broader 19th-century flat-Earth movement in the U.S. Despite limited distribution, one of only two known copies now resides in the Library of Congress. The map’s strange legacy reflects the persistence of flat-Earth beliefs even after the age of exploration.",
        photoPath: "/uploads/world.jpeg",
        caption: "History of flat earth theory: Orlando Ferguson's map of the flat earth"
    },
    {
        id : uuidv4(),
        username : "Albert Einstein",
        content : "To inspire others, begin by believing in yourself.",
        photoPath: "/uploads/einstein.jpg",
        caption: "A picture of Albert Einstein"
    },
    {
        id : uuidv4(),
        username : "A. P. J. Abdul Kalam",
        content : "He was born in Rameswaram, Tamil Nadu, on October 15th, 1931. Kalam had been selling newspapers to support the income of his family. In 1960, he studied aeronautical engineering at the Madras Institute of Technology. His dream as a child was to become a fighter pilot.",
        photoPath: "/uploads/apjabdulkalam.jpg",
        caption: "A picture of A. P. J. Abdul Kalam"
    },
    {
        id : uuidv4(),
        username : "Tree Organization",
        content : "TTrees are crucial for life on Earth, offering numerous benefits. They produce oxygen, absorb carbon dioxide, provide food, and shelter for various species. Trees also help regulate climate, prevent soil erosion, and support biodiversity.",
        photoPath: "/uploads/tree.jpg",
        caption: "A picture of a tree"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", upload.single('photo'), (req, res) => {
    let { username, content, caption } = req.body;
    let photoPath = req.file ? `/uploads/${req.file.filename}` : null;
    let id = uuidv4();
    posts.push({ id, username, content, caption, photoPath });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", upload.single('photo'), (req, res) => {
    let { id } = req.params;
    let { content, caption } = req.body;
    let post = posts.find((p) => id === p.id);
    if (!post) return res.send("Post not found!");
    post.content = content;
    post.caption = caption;
    if (req.file) {
        post.photoPath = `/uploads/${req.file.filename}`;
    }
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id );
    res.redirect("/posts");
});