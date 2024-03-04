import { Router } from "express";
import getPosts from "./get-posts.js";
import loginUser from "./user-login.js";
import signUpUser from "./user-signUp.js";
import getPost from "./get-post.js";
import storePost from "./store-post.js";
import deletePost from "./delete-post.js";
import catchAll from "./catch-all.js";

const router = Router();

router.get("/posts", getPosts);
router.route("/post/:postId?").get(getPost).post(storePost).delete(deletePost);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.use(catchAll);

export default router;

// POSTMAN
/* GET ==> http://localhost:3000/api/post/2  --> {"post": "2"} 

--------------------------------------------------------------------------------

  POST ==> http://localhost:3000/api/post     //body -> raw -> json
   Post data -->    {
                    "title" : "My Post",
                    "content": "This is my content"
                    }

-------------------------------------------------------------------------------

   DELETE ==> http://localhost:3000/api/post/12                   
    -->     {
            "post": "12"
            }

----------------------------------------------------------------------------------

    For non existing path
    ==> http://localhost:3000/api/hello
    --> {
        "error": {
                    "code": 404,
                    "message": "Route not found"
                 }
        }
*/
