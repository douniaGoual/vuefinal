<template>
    <div class="panier">
   <h1> Panier </h1>
   <table class="table">
       <thead class="thead-dark">
<tr>
    <th>id</th>
    <th>nom</th>
    <th>quantite</th>
    <th>prix</th>
     <th>sous-total</th>
</tr>
       </thead>
       <tbody>
           <tr v-for="(item,index) in panier" :key="index">
               <td> {{ item.produitId }} </td>
             <td> {{item.nom}}</td>
<td>
    <input 
    type="button"
    class="btn btn-dark"
    @click="updateqtn(index)"
    value="-"
    />
{{ item.quantite}}
    <input 
    type="button"
    class="btn btn-dark"
    @click="update(index)"
    value="+"
   />   
</td>
<td> {{ (item.quantite * item.prix_unitaire).toFixed(2)   }} € </td>
<td>
    <button class="btn btn-dark btn-block" @click="supprimer(index)">  
        <i class="fa fa-transh-o fa-lg"></i>
    </button>
</td>
</tr>
<tr>
    <td colspan="6"></td>
    <td> {{total}}</td>
    <td colspan="2"></td>
</tr>
       </tbody>

   </table>
    </div>
</template>
 <script>
export default {
    //
    name:panier,
    props:["panier"],
    data() {
        return{};
    },
    //un computed cest ce qu'on appelle des getters un getter est une propriete qui 
    //agit comme une function(method) cela sert a calculer au sein d'un meme objet
    computed:{
        total : function(){
            let total = 0
            for(let el of this.panier){
                total += element.prix_unitaire * el.quantite;
            }
return total.toFixed(2);
        },
    },
    //Ce sont exactement ce à quoi ils ressemblent (oui, nommer!). 
    //Ce sont des fonctions qui se détachent d'un objet, généralement l'instance Vue elle-même ou un composant Vue.
    methods : {
        // 
        update: function(index){
            this.panier[index].quantite ++;
            this.panier[index].soustotal = this.panier[index].prix_unitaire;
            console.log(this.panier)
            localStorage.removeItem("panier");
            localStorage.setItem("panier" , JSON.stringify(this.panier));
        },
        updateqtn : function (index) {
            if ( this.panier[index].quantite > 1) {
                this.panier[index].quantite --;
                console.log(this.panier)
                localStorage.removeItem("panier");
                localStorage.setItem("panier", JSON.stringify(this.panier));

            } else {
                this.supprimer(index);
            }
        },
        supprimer : function (index) {
            this.panier.splice(index, 1);
            localStorage.removeItem("panier");
            if (this.panier.lengt > 0 ) {
                localStorage.setItem("panier" ,JSON.stringify(this.panier) );
            }
        },
        valide : function () {
            if (localStorage.getItem('token')) {
                var client = VueJwtDecode.decode(localStorage.getItem("token"))
            var produitId = [];
            var prix = [];
            var quantite = [];
            this.panier.forEach( (item) => {
             produitId.push(item.produitId);
             prix.push(item.prix_unitaire);
             quantite.push(item.quantite);
             });
                this.axios
                .post("http://localhost:3000/command/new" , {
                    clientId : 1,
                    panier: this.panier,
                    produitId : produitId,
                    prix: prix,
                    quantite: quantite,

                })
                .then ((res) => {
                    console.log(res.data);
                    this.$router.push({
                    name: "paypal" ,
                    params: { total: this.total} ,
                    });
                })
                .catch((err) =>  {
                    alert("error");
                    console.log(err);
                });
            } else {
                this.$router.push({ name : "login"});
            }
        }
    }
}
</script>
