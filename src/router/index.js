import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      //登录页配置name
      path: "/main/:name",
      component: Main, //嵌套路由
      props: true,
      children: [
        {
          path: "/user/profile/:id",
          name: "UserProfile",
          component: UserProfile,
          props: true
        },
        { path: "/user/list", component: UserList }
      ]
    },
    //首页
    {
      path: "/login",
      component: Login
    },
    {
      path: "/goHome",
      redirect: "/main"
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
