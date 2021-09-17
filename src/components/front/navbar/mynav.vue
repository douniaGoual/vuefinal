 <template>
   <div>
     <header class="header">
       <a href="" class="logo logoIcone">DG SHOP</a>
       <input class="menu-btn" type="checkbox" id="menu-btn" />
       <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
       <ul class="menu">
         <li><a href="">Femme</a></li>
         <li><a href="">Homme</a></li>
      <router-link to="/login">
           <li class="Connecter gauche"><a href="">
           <li v-if="connex" @click="connexion">Connecter</li></a></li>

          </router-link>
          <router-link to="/register">
           <li class="inscri gauche"><a href="">
           <li v-if="inscrix" @click="inscription">inscription</li></a>
           </li>
         </router-link>
         <router-link to="/">
        
           <li class="deco gauche"> 
             <a href=""> <li v-if="decox" @click="Deconnection">Déconnecté</li></a></li>
          
         </router-link>
        
       </ul>
       <div class="sectionnav">
 <!-- <input class="cherche" type="search" id="recherche"> -->
     <!-- <li><a href="./panier">panier</a></li> -->
          <li><a href="../shopping2"> <img src="../../../assets/recherche.png" alt="" width="35px " > </a></li>
          <li><a href="../panier"><img src="../../../assets/shopping-bag.png" alt="" width="35px"></a></li>
       </div>
       
   
    <!-- <select class="languu" name="langue" id="langue"> 
        <option value="1" class="lang">Français</option>
        <option value="2" class="lang">Anglais</option>
        <option value="3" class="lang">Espagnol</option>
    </select>  -->
        
     </header>
   </div>
 </template>
 <script>
   export default {
     data() {
       return {
         connex: true,
         decox: false,
         inscrix: true
       }

     },
     created() {
       if (localStorage.getItem('token')) {
         this.connex = false
         this.decox = true
         this.inscrix = false
       } else if (!localStorage.getItem('token')) {
         this.connex = true
         this.decox = false
         this.inscrix = true
       }

     },
     methods: {
       connexion() {
         this.$router.push('/login')

       },
       Deconnection() {
         localStorage.removeItem('token')
         this.$router.push('/')


         //Recharge la page en cours de consultation.
         //Equivalent à l'action du bouton Actualiser
         window.location.reload()

       },
       inscription() {
         this.$router.push('/register')
       }
}

   }
 </script>
 <style scoped>
 .languu {
   width: 20px;
   background-color: goldenrod;
 }

  /* .sectionnav {
   width: 11%;
   height: 50px;
   position: relative;
   display: flex;
   margin-top:-60px;
  margin-left: 1000px;
  text-decoration: none;

 }   */
 /* .sectionnav .cherche {
 width: 148px;
height: 32px;
margin-left: -70px;
margin-top: 18px;
  

 } */
 
   .logoIcone {
     color: #f4f4f4;
     font-family: 'Montserrat', sans-serif;
   }

   body {
     margin: 0;
     font-family: Helvetica, sans-serif;
     background-color: #f4f4f4;
   }

   a {
     color: #000;
   }

   /* header */

   .header {
     position: fixed;
     background-color: #C0C0C0;
     box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
     position: fixed;
     width: 100%;
     z-index: 3;
     
   }

   .header ul {
     margin: 0;
     padding: 2px;
     list-style: none;
     overflow: hidden;
     background-color: #C0C0C0;
   }

   .header li a {
     
     line-height: 50px;
     font-size: 17px;
     font-family: 'Montserrat', sans-serif;
     
   }

   /* .header li a:hover,
   .header .menu-btn:hover {
    
    
    
   } */

   .header .logo {
     display: block;
     float: left;
     font-size: 2.7em;
     padding: 10px 14px;
     margin-top: 13px;
     text-decoration: none;
     font-family: 'fantasy' sans-serif;
     background: #C0C0C0;
   
   /* menu */
}

   .header .menu {
     clear: both;
     max-height: 0;
     transition: max-height .9s ease-out;
     background: #C0C0C0;
     margin-left: 300px;

   }

   /* menu icon */

   .header .menu-icon {
     cursor: pointer;
     display: inline-block;
     padding: 25px 30px;
     position: relative;
     user-select: none;
     background-color: rgb(22, 67, 216);
     align-items:30px;
   }

   .header .menu-icon {
     float: right;
   }

   .header .menu-icon .navicon {
     background: #000;
     display: block;
     height: 3px;
     position: relative;
     transition: background .2s ease-out;
     width: 15px;
      
   }

   .header .menu-icon .navicon:before,
   .header .menu-icon .navicon:after {
     background: rgb(0, 0, 0);
     content: '';
     display: block;
     height: 100%;
     position: absolute;
     transition: all .4s ease-out;
     width: 100%;
   }

   .header .menu-icon .navicon:before {
     top: 5px;
   }

   .header .menu-icon .navicon:after {
     top: -5px;
   }

   /* menu btn */

   .header .menu-btn {
     display: none;
   }

   .header .menu-btn:checked~.menu {
     max-height: 400px;
     /* background-color: rgb(172, 23, 23); */
     margin-left: 250px;
   
     
   }

   .header .menu-btn:checked~.menu-icon .navicon {
     background: transparent;
   }

   .header .menu-btn:checked~.menu-icon .navicon:before {
     transform: rotate(-45deg);
   }

   .header .menu-btn:checked~.menu-icon .navicon:after {
     transform: rotate(45deg);
   }

   .header .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
   .header .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
     top: 0;
   }



   @media (min-width: 1024px) {
      
      
      
  .sectionnav {
    width: 11%;
    height: 50px;
    position: relative;
    display: flex;
    margin-top:-60px;
    margin-left: 1000px;
    text-decoration: none;

 }
    

     .logoIcone {
       color:rgb(255, 255, 255);
       
     }

     .header li {
       float: left;
       font-family: 'Montserrat', sans-serif;
     }

     .header li a {
       padding: 13px 7px;
       font-family: 'Montserrat', sans-serif;
       position: relative;
       left: 60px;
       white-space:break-spaces;

     }

     .header .gauche {
      float: right;
      margin-top: 19px;
      margin: 5px;
      
     }
     .header .menu {
       clear: none;
       margin-left: 0px;
      margin-top:10px;
       max-height: none;
     }

     .header .menu-icon {
       display: none;
     }
     .img {
       background-color:green;
       margin-top: 20px;
       left: 30px;
   }
   } 
 </style>