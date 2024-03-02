import { Router } from "express";
import getPosts from "./get-posts.js";
import loginUser from "./user-login.js";
import signUpUser from "./user-signUp.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/login", loginUser);
router.post("/signup", signUpUser);

export default router;
