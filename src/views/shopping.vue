<template>
  <div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myMenu",
};
</script>
<style scoped>
ul {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
ul li {
  list-style: none;
}
ul li a {
  position: relative;
  display: block;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: #262626;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
}
ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid #262626;
  border-bottom: 2px solid #262626;
  transform: scaleY(2);
  opacity: 0;
  transition: 0.3s;
}
ul li a:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #262626;
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}
ul li a:hover {
  color: #fff;
}
ul li a:hover:before {
  transform: scaleY(1);
  opacity: 1;
}
ul li a:hover:after {
  transform: scaleY(1);
  opacity: 1;
}
</style>
