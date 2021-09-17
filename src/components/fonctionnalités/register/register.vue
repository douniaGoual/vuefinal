<template>
    <div>
        <div id="login">
            <h3 class="text-center text-white pt-5">S'inscrire</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">

                            <!-------------------------------- FORM --------------------------------------------->

                                     <!-- Utiliser on utilise @click il ne fonctionnera pas si on des attributs "obligatoires" sur certains de nos champs dont preferable d'utiliser @submit.prevent car "required" ne fonctionne que sous une forme, sur submit -->
                            <form id="login-form" class="form" @submit.prevent="register">
                                <h3 class="text-center text-info">S'inscrire</h3>
                                <div class="form-group">
                                    <label for="Nom" class="text-info">Nom</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="text" name="Nom" id="email" placeholder="Nom"
                                        class="form-control" required v-model="regist.nom">
                                </div>
                                      <div class="form-group">
                                    <label for="Prenom" class="text-info">Prenom</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="text" name="Prenom" id="email" placeholder="Prenom"
                                        class="form-control" required v-model="regist.prenom">
                                </div>
                                <div class="form-group">
                                    <label for="E-mail" class="text-info">E-mail</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="email" name="email" id="email" placeholder="E-mail"
                                        class="form-control" required v-model="regist.email">
                                </div>
                                  <div class="form-group">
                                    <label for="Numero Telephone" class="text-info">Numero Telephone</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="tel" name="Numero Telephone" id="tel" placeholder="Numero Telephone"
                                        class="form-control" required v-model="regist.numero_telephone">
                                </div>
                                <div class="form-group">
                                    <label for="Ville" class="text-info">Ville</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="text" name="Ville" id="ville" placeholder="Ville"
                                        class="form-control" required v-model="regist.ville">
                                </div>
                                   <div class="form-group">
                                    <label for="Code Postal" class="text-info">Code Postal</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="text" name="Code Postal" id="ville" placeholder="Code Postal"
                                        class="form-control" required v-model="regist.code_postal">
                                </div>
                                 <div class="form-group">
                                    <label for="Adresse" class="text-info">Adresse</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="text" name="Adresse" id="adresse" placeholder="Adresse"
                                        class="form-control" required v-model="regist.adresse">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br>
                                    <input type="password" name="password" id="password" class="form-control" required
                                    
                                        v-model="regist.password">
                                </div>
<div class="form-group">
                                    <label for="password" class="text-info"> Confirmation Password</label><br>
                                    <input type="password" name="password" placeholder="Confirmation Password" id="password" class="form-control" required
                                        v-model="regist.confirmationpassword">
                                </div>
                                <div class="form-group">
                                    <!-- required il est obligatoire de remplie les champs -->
                                   
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                                </div>
                                <div id="register-link" class="text-right">
                                    <router-link to="/login"><a href="#" class="text-info">S'identifier</a></router-link>
                                </div>
                            </form>

                            <!-------------------------------- FIN FORM --------------------------------------------->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                regist: {}
            }
        },
        methods: {
            /* J'inclus une méthods pour gérer le processus de connexion */
            register() {
                let url = 'http://localhost:5000/client/nouveauclient';
                this.axios.post(url, this.regist).then(() => {
                        this.$router.push("/login")
                    })
                    .catch(err => {
                        alert(err);
                    });

            },
        }
    };
</script>
   

<style scoped>
.register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    margin-top: 3%;
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}

</style>