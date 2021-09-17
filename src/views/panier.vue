<template>
    <div>
        <panier/>
    </div>
</template>

<script>
import panier from "../components/fonctionnalités/panier/mypanier"
export default {
    components : {
        panier,
    },
    data() {
        return {
            panier : [] ,
     };
    },
    created() {
        if (!localStorage.getItem("panier")) {
            return;
            }
    }
    
}
</script>