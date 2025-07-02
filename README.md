## 🧠 Nemesis-Null Blog

**Break things. Understand them. Rebuild better.**
This is a minimalist blog platform built with **Express.js** and **EJS**, designed to capture the chaos, experimentation, and obsession of real learning — the kind that comes from crashing, debugging, and rising again.

---

### 🚀 Features

* 📝 Create, edit, delete, and view posts
* 🗂 In-memory post storage (for now — perfect for experimentation)
* 📅 Timestamped entries
* 📄 Custom EJS templates for views
* 📌 FAQ, About, and Contact pages included
* 🔧 Clean, beginner-friendly Express.js setup

---

### 📁 Project Structure

```
project-root/
├── public/               # Static files (CSS, images, etc.)
├── views/
|   ├── partials/
|   |   ├── header.ejs    # Main Header
|   |   ├── footer.ejs    # Main Footer
│   ├── index.ejs         # Main blog feed
│   ├── post.ejs          # New post form
│   ├── update.ejs        # Edit form
│   ├── viewer.ejs        # Post viewer
│   ├── about.ejs         # About page
│   ├── contact.ejs       # Contact form
│   └── faq.ejs           # FAQ page
├── index.js              # Main Express app
```

---

### 🛠️ Installation & Usage

1. **Clone the repo:**

```bash
git clone https://github.com/mrphoenix/nemesis-null-blog.git
cd nemesis-null-blog
```

2. **Install dependencies:**

```bash
npm install && npm audit fix
```

3. **Run the server:**

```bash
node index.js
```

4. **Visit:**
   [http://localhost:3000](http://localhost:3000)

---

### ⚙️ Tech Stack

* **Node.js + Express** – Backend server and routing
* **EJS** – Templating engine
* **Bootstrap** – Styling (assumed from `.card`, `.btn`, etc.)
* **Body-parser** – Parsing form data
* **Vanilla JS logic** – No DB yet, stored in memory

---

### 📌 Future Plans

* 🔄 Add persistent storage (e.g., MongoDB, SQLite)
* 🧠 Markdown support
* 👤 User accounts
* 💾 Export/import posts

---

### 🧑‍💻 Author

**Nemesis-Null**
Student | Developer | Explorer of Chaos

---