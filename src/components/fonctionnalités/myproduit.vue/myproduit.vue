<template>
    
</template>


<script>
    export default {
        name: "myproduit",
        props:["produits"],
        data(){
            return{
                Panier:[]

            }
        },
        created(){
           
            console.log(this.produits);
            this.getLocalStorage()

        },
        methods:{
            ajouter: function (id, nom, prix) {
                alert(`le produit ${nom} `)
             
                this.Panier = this.Panier || [];
                localStorage.removeItem("panier");
                if (this.Panier.length === 0) {
                    let quantite = 1;
                    this.Panier.push({
                        produitId: id,
                        nom: nom,
                        quantite: quantite,
                        prix_unitaire: prix,
                        soustotal: quantite * prix
                    });
                } else {
                    let allreadyProduit = false;
                    this.Panier.forEach(item => {
                        if (item.produitId === id) {
                            item.quantite++;
                            item.soustotal = item.quantite * prix;
                            allreadyProduit = true;
                        
                            console.log("produit existant");
                        }
                    });
                    //si
                    if (allreadyProduit === false) {
                        let quantite = 1;
                        this.Panier.push({
                            produitId: id,
                            nom: nom,
                            quantite: quantite,
                            prix_unitaire: prix,
                            soustotal: quantite * prix
                        });
                       
                        console.log("produit absent");
                    }
                  
                    console.log(this.Panier);

                    this.allreadyProduit = id;
                 
                    console.log(this.allreadyProduit);
                }

                localStorage.setItem("panier", JSON.stringify(this.Panier));
            },
            getLocalStorage() {
                let getlocalSt = localStorage.getItem("panier");
                if (getlocalSt != null || getlocalSt !== undefined) {
                    this.Panier = JSON.parse(getlocalSt);
                   
                    console.log(this.Panier);
                }
            }


        }
    }
</script>