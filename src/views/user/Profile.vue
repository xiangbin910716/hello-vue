<template>
  <!--  所有的元素必须在根节点下-->
  <div>
    <h1>个人信息</h1>
    <!-- {{ $route.params.id }} -->
    {{ id }}
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "Profile",
  //过滤器，
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前"); //加载数据
    next(vm => {
      vm.getData(); //进入路由之前执行getData方法
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开个人信息页");
    next();
  },
  //axios
  methods: {
    getData: function() {
      this.axios({
        method: "get",
        headers: { "Content-Type": "application/json" },
        url: "http://127.0.0.1:8080/static/mock/data.json"
      }).then(function(response) {
        console.log(response);
      });
    }
  }
};
</script>

<style scoped></style>
