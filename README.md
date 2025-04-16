# 📝 CRUD Post App Like Quora Using REST 
> Practice Project

A simple web app to **create, read, update, and delete posts**, similar to Quora. Built with **Express.js**, **EJS templates**, basic **RESTful routes** and **RESTful APIs**. This project is a hands-on practice to understand CRUD operations, routing, middleware, and view templating.

---

## 📹 Video Demo

👉 [Watch the demo](https://github.com/Priyash-Das/Photos/blob/main/CURD%20using%20REST.mp4)


---

## 🚀 Features

- View all posts 🧾  
- Create new post ✍️  
- View individual post 📖  
- Edit existing post ✏️  
- Delete post ❌  
- Styled with custom CSS  
- Quora-style flow with simple UX  

---

## 🧠 Project Structure & Diagrams

### 1️⃣ Flow: Create Post and Edit Post

```
+---------------------+ 			+---------------------+
|   View All Posts    | 			|      All Posts      |
+---------------------+ 			+---------------------+
          |						   |
          v						   v
+---------------------+ 			+---------------------+
|   Click Create New  | 			|      Click Edit     |
+---------------------+ 			+---------------------+
          |                                                | 
          v						   v
+---------------------+ 			+---------------------+
|        Form         |				|  Redirect to Edit   |
+---------------------+ 			|        Form         |
          | 					+---------------------+
          v						   |	
+---------------------+ 				   v	
|  Submit Form (Post  |				+---------------------+
|       Added)        | 			|  Submit New Content |
+---------------------+ 			+---------------------+
          |						   |	
          v						   v
+---------------------+ 			+---------------------+
|  Redirect to View   |				|   Return to All     |
|      All Posts      |				|       Posts         |
+---------------------+ 			+---------------------+

- After form submit, `post is added`            - After form submit, `post is updated`
```

---

### 3️⃣ Folder Structure (Views & Entry Point)

```
project-root/
	 ├──── node_modules/
	 ├──── public/
	 │    └──────── css/
	 │             └──────── css
	 │    └──────── updates/
	 ├──── views/
	 │   ├────── index.ejs
	 │   ├────── new.ejs
	 │   ├────── show.ejs
	 │   └────── edit.ejs
	 ├──── index.js
	 ├──── package-lock.json
	 ├──── package.json
```
Main server file: `index.js`

---

### 4️⃣ Additional Diagram

```
                      CURD Posts App
                            |
                           Post
                            |
            -----------------------------------
           |                                   |
        Username                            Content
           |                                   |
           V                                   V
        Actions                      Actions related to Post
           |                                   |
           V                                   V
    ----------------                   ----------------
   |       |        |                 |                |
  View     |        |            Edit/Update         Delete
    Individual View |
               Create Post
```
This diagram illustrates form interactions for **create/edit**, with visual arrows showing redirection paths.

---

## 🧰 Tech Stack
```
| Tool/Library        | Purpose                          |
|---------------------|----------------------------------|
| Express.js          | Backend framework                |
| EJS                 | Templating engine (views)        |
| method-override     | Enable PATCH/DELETE via POST     |
| uuid                | Generate unique post IDs         |
| multer              | (Optional) File upload handling  |
| nodemon             | Auto-reload for development      |
```
---
