 <template>
    <div>
        <div id="loginshop">
            <h3 class="text-center text-white pt-5">S'identifier</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <!-------------------------------- FORM --------------------------------------------->


       <!-- Utiliser on utilise @click il ne fonctionnera pas si on des attributs "obligatoires" sur certains de nos champs dont preferable d'utiliser @submit.prevent car "required" ne fonctionne que sous une forme, sur submit -->
                            <form id="login-form" class="form" @submit.prevent="LoginShop">
                                <h3 class="text-center text-info">S'identifier</h3>
                                <div class="form-group">
                                    <label for="E-mail" class="text-info">E-mail</label><br>
                                    <!-- v-model est essentiellement du sucre syntaxique(Qui est relatif à la syntaxe) pour mettre à jour les données lors des évènements de saisie utilisateur sur les champs -->
                                    <input type="email" name="email" id="email" placeholder="E-mail" class="form-control" required v-model="email">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br>
                                    <input type="password" name="password" id="password" class="form-control" required
                                        v-model="password">
                                </div>
                                <div class="form-group">
                                    <!-- required il est obligatoire de remplie les champs -->
                                 
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                                </div>
                                <div id="register-link" class="text-right">
                                    <router-link to="/register"><a href="#" class="text-info">Register here</a></router-link>

                                </div>
                                <div>
                                    <router-link to="/"><button> Retour</button></router-link>
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
   /* J'ajoute les attributs de données qui seront liés au template */
  export default {
    data() {
      return {
        email: "",
        password: ""

      }
    },
        /*J'inclus une méthods pour gérer le processus de connexion */

    methods: {
      LoginShop () { 
          let url = "http://localhost:5000/client/login"
        this.axios.post( url, {email:this.email, password:this.password }) 
        .then((response) => {
            
            
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
        
        if (localStorage.getItem('token') != undefined) {
            this.$router.push('/')
        
        }

        else {
            alert('salut')
            this.$router.push('/login')
        }

        

        })
        .catch()

      }


      
      }
    }
    
  
</script>