<template>
    <div class="image">
        <div class="petite-image">
            <!-- Le thismot-clé JavaScript fait référence à l'objet auquel il appartient. -->
            <!-- Dans une fonction, thisfait référence à l' objet global . -->
            <img src="https://www.iconcept.fr/7781-large_default/iphone-11-pro-max-argent.jpg" onclick="myFunction2(this)">
            <img src="https://www.iconcept.fr/7781-large_default/iphone-11-pro-max-argent.jpg" onclick="myFunction2(this)">
            <img src="https://www.iconcept.fr/7781-large_default/iphone-11-pro-max-argent.jpg" onclick="myFunction2(this)">
            <img src="https://www.iconcept.fr/7781-large_default/iphone-11-pro-max-argent.jpg" onclick="myFunction2(this)">
            <img src="https://www.iconcept.fr/7781-large_default/iphone-11-pro-max-argent.jpg" onclick="myFunction2(this)">

        </div>

        <div class="grand-image">

            <img id="image" src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/mode/mode-street-style/style-casual/64282876-1-fre-FR/Street-style-20-filles-qui-portent-bien-le-style-casual.jpg" alt="">

        </div>
    </div>  
    
</template>

<script>

function myFunction2(smallIng) {
    var grandeImg = document.getElementById("image");
    grandeImg.src = smallIng.src;
    console.log(smalling);
}


export default {
    
}
</script>

<style scoped >

.petite-image img {
    height: 61px;  
      margin: 10px 0 ;
    cursor: pointer;
    display: block;
    opacity: .6;

}
.petite-image img:hover{
    opacity: 1;
}
.petite-image{
    float: left;
}

.image {
    top: 222%;
    left: 45%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    position: absolute;
}

.grand-image img { 
    height: 345px;
}

.grand-image{
    float: right;
    padding: 10px;
}

</style>




   