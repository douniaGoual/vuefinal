<template>
    
<div>
        <div :key="produit.id" v-for="produit in produits">
            <h1>{{produit.nom}}</h1>
            <p>{{produit.poids}}</p>
            <p>{{produit.prix}} .00€</p>
            <button>Acheter maintenant</button>
            <button>Ajouter au panier</button>
        </div>
    </div>
</template>
<script>

export default {
    name: "Produit",
    props: ["produits"], 
}

</script>

<style scoped>

.imgM{
    width: 10%;
    height: 20%;
    margin-top: 3rem;
}
