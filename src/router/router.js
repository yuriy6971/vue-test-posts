import MainPage from "../pages/MainPage"
import ProfilePage from "../pages/ProfilePage"
import PostsPage from "../pages/PostsPage"
import PostIdPage from "../pages/PostIdPage"
import MyPostsPage from "../pages/MyPostsPage"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {path : "/", component : MainPage},
    {path : "/profile", component : ProfilePage},
    {path : "/posts", component : PostsPage},
    {path : "/posts/:id", component : PostIdPage},
    {path : "/my_posts", component : MyPostsPage}
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router