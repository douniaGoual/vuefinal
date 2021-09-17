<template>
    <div>
        <form @submit.prevent="loginSubmit">
            <label for="email">Email</label>
            <input type="email" v-model="email">
            <label for="password">password</label>
            <input type="password" id="password" v-model="password">
            <input type="submit" value="login">
        </form>
    </div>
</template>
<script>

    import vueJwtDecode from 'vue-jwt-decode'
    import {mapState, mapActions} from 'vuex'

export default {
    name: "login",
    data(){
        return{
            email: '',
            password: '',
            client:{},
            statue: false,
            ClientError: "",
            clientSuccessful:"",
        }
    },
    computed:{
        ...mapState(
            [
                'loggingIn',
                'loginError',
                'loginSuccessful',
            ])
    },
    methods: {
        ...mapActions([
            'doLogin',
            'logout'
        ]),
      loginSubmit(){
            this.doLogin({
            email:this.email,
            mot_de_passe:this.mot_de_passe_client,
                });
        },
      addclient(){

        let url = 'http://localhost:3000/client/new';
            this.axios.post(url, this.client).then((res) => {
                // eslint-disable-next-line no-mixed-spaces-and-tabs
                this.clientSuccessful = res.data;
            })
            .catch(err =>{
                this.ClientError = err;
            });
            }
    }
}
</script>