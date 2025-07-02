import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];

function middleWare(req, res, next) {
    next();
}

class Post {
    constructor(title, content) {
        this.id = Date.now().toString();
        this.title = title;
        this.content = content;
        this.date = new Date();
    }
}

app.use(middleWare);


let savedPost = new Post("Breaking Things to Understand Them", `There’s something strange about how we’re taught to learn.

We’re told to follow tutorials, memorize syntax, and avoid “breaking” things. But honestly? The biggest breakthroughs I’ve had came when everything fell apart.

When my server threw a 500 error.
When my layout collapsed into a mess of divs.
When my database just… didn’t.

Those moments sucked — but they also taught me more than any course ever could.

You don’t truly understand a system until you’ve seen it fail, broken it yourself, and rebuilt it stronger.

That’s why I love coding. It's like music, like hacking, like life:
You experiment, you screw up, you scream into the void, and then — suddenly — it clicks.

This blog is part of that process. It’s not here to be perfect. It’s here to reflect that chaos, that obsession, that fire to understand how things really work.

If you’re on the same path — breaking things, learning, rebuilding — then you’re doing it right.

Keep pushing.
– Nemesis-Null`);
posts.push(savedPost);

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts } );
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.get("/faq", (req, res) => {
    res.render("faq.ejs", { faqs: faqs});
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/submit-post", (req, res) => {
    var post = new Post(req.body["title"], req.body["content"]);
    console.log("\n");
    console.log("Title: " + post["title"]);
    console.log("Content: " + post["content"]);
    posts.push(post);
    res.render("index.ejs", { posts: posts});
});

app.post("/delete-post/:id", (req, res) => {
    const postId = req.params["id"];
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    res.redirect("/");
});

app.post("/edit-post/:id", (req, res) => {
    const postId = req.params["id"];
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
        res.render("update.ejs", { post: posts[index] });
    }
});

app.post("/view-post/:id", (req, res) => {
    const postId = req.params["id"];
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
        res.render("viewer.ejs", { post: posts[index] });
    }
});

app.post("/update-post/:id", (req, res) => {
    let updatedPost = new Post(req.body["title"], req.body["content"]);
    const postId = req.params["id"];
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) {
        posts.splice(index, 1, updatedPost);
    }
    res.redirect("/");
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


let faqs = [
    {
        question: "What kind of articles will I find on this blog?",
        answer: "In this blog you will find articles about programming, technology, hacking, music, philosophy and various personal interests. The topics are wide and varied.",
    },
    {
        question: "How can I contact you?",
        answer: "You can send me a message via the contact form that you will find on the “Contact” page.",
    },
    {
        question: "May I suggest a topic for an article?",
        answer: "Of course! I am open to suggestions and would be happy to hear what topics you are interested in.",
    },
    {
        question: "How can I support the blog?",
        answer: "Since it's an experimental project I haven't added any support mode, maybe in the future I'll add it and you can show support from there.",
    },
    {
        question: "Can I use your articles?",
        answer: "All content is protected by copyright. If you want to use something, contact me first to agree.",
    },
]
