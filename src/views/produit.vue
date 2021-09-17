<template>
  <div>
    <Myproduit :produits="produits"/>
  </div>
</template>

<script>
import Myproduit from "../components/front/shopping/produit";

export default {
  name: "produit",
  data() {
    return {
      produits: {},
    };
  },
  components: {
    Myproduit,
  },
  created() {
    alert("ok");
    this.axios
      .get("http://localhost:3000/produit/all")
      .then((res) => {
        
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped></style>
