<template>
    <div>
        <h1>
           bonjour {{user.nom}}
        </h1>
    </div>
</template>

<script>
export default {
    created() {
        if (localStorage.getItem("auth")) {
            console.log(localStorage.getItem("auth"));
            var user = jwt.decode(localhost.gatItem ("token"));
            if (user.role != "admin") {
                 localStorage.removeItem("token");
                 localStorage.removeItem("auth");
                 this.$router.push({path:"/admin/login"});
            }
        } else {
                 localStorage.removeItem("token");
                 localStorage.removeItem("auth");
                 this.$router.push({path:"/admin/login"});

        }
    },
};
</script>
<style >

</style>