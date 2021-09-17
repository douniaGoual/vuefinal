<template>
 <div>
     <shopping/>
    <produit :produits="produits"/>
  </div>

</template>

<script>
import produit from "./produit";
import shopping from "../components/front/shopping/shopping2";

export default {
  name: "produit",
  data() {
    return {
      produits: {},
      shopping: {},
    };
   
  },

  components: {
    produit,
    shopping,
  },

  
};
</script>

<style scoped></style>
