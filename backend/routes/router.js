const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const newHomeController = require("../controllers/newHomeContent");
const storeHomeContentController = require("../controllers/storeHomeContent");
const deleteHomeController = require("../controllers/deleteHomeContent");
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
// schedule
const newScheduleController = require("../controllers/newSchedulePage");
const storeScheduleController = require("../controllers/storeSchedule");
const scheduleController = require("../controllers/schedulePage");
const deleteScheduleController = require("../controllers/deleteSchedule");
// home article
const newHomeArticleController = require("../controllers/newHomeArticle");
const storeHomeArticleController = require("../controllers/storeHomeArticle");
const deleteHomeArticleController = require("../controllers/deleteHomeArticle");
// home subscription
const newHomeSubscriptionController = require("../controllers/newHomeSubscription");
const storeHomeSubscriptionController = require("../controllers/storeHomeSubscription");
const deleteHomeSubscriptionController = require("../controllers/deleteHomeSubscription");
// about
const newAboutMeController = require("../controllers/newAboutPage");
const storeAboutController = require("../controllers/storeAboutMe");
const deleteAboutController = require("../controllers/deleteAboutMe");

const auth = require("../middleware/ifAuthorized");

router.get("/newHome", auth, newHomeController);
router.post("/store/home", storeHomeContentController);
router.get("/delete/home/:id", auth, deleteHomeController);
router.get("/", cache(2), homeController);
router.get("/contact", cache(2), contactController);
router.post("/send/form", sendFormController);
// about
router.get("/newAbout", newAboutMeController);
router.post("/store/about", storeAboutController);
router.get("/delete/about/:id", deleteAboutController);
// home subscription data
router.get("/newSubscription", newHomeSubscriptionController);
router.post("/store/subscription", storeHomeSubscriptionController);
router.get("/delete/homeSubscription/:id", deleteHomeSubscriptionController);
// home article section
router.get("/newHomeArticle", newHomeArticleController);
router.post("/store/homeArticle", storeHomeArticleController);
router.get("/delete/homeArticle/:id", deleteHomeArticleController);
// schedule
router.get("/newSchedule", auth, newScheduleController);
router.post("/store/schedule", storeScheduleController);
router.get("/schedule", auth, cache(2), auth, scheduleController);
router.get("/delete/schedule/:id", auth, deleteScheduleController);
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