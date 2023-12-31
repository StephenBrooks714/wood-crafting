const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controllers/homePage");
const contactController = require("../controllers/contactPage");
const sendFormController = require("../controllers/sendContactForm");
// blogs
const newPostController = require("../controllers/newPostPage");
const storePostController = require("../controllers/storePost");
const blogsController = require("../controllers/blogs");
const postController = require("../controllers/singlePostPage");
const deletePostController = require("../controllers/deletePost");
// projects
const newProjectController = require("../controllers/newProjectPage");
const storeProjectController = require("../controllers/storeProject");
const projectsController = require("../controllers/projectPage");
const singleProjectController = require("../controllers/singleProjectPage");
const deleteProjectController = require("../controllers/deleteProject");
// users
const registerController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUser");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUser");
const logoutController = require("../controllers/logoutUser");
const adminController = require("../controllers/adminPage");

const auth = require("../middleware/ifAuthorized");

router.get("/", cache(2), homeController);
router.get("/contact", cache(2), contactController);
router.post("/send/form", sendFormController);
// blogs
router.get("/newPost", auth, newPostController);
router.post("/store/post", storePostController);
router.get("/blogs", blogsController);
router.get("/post/:id", postController);
router.get("/delete/post/:id", auth, deletePostController);
// projects
router.get("/newProject", auth, newProjectController);
router.post("/store/project", storeProjectController);
router.get("/projects", cache(2), projectsController);
router.get("/singleProject/:id", cache(2), singleProjectController);
router.get("/delete/project/:id", auth, deleteProjectController);
// users
router.get("/register", registerController);
router.post("/store/user", storeUserController);
router.get("/login", loginController);
router.post("/login/user", loginUserController);
router.get("/logout", logoutController);
router.get("/admin", auth, cache(2), adminController);

module.exports = router;