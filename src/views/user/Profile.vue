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
  name: "Profile"
};
</script>

<style scoped></style>
