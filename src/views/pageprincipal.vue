<template>
  <div id="app">
   <!-- DANS L'ORDRE DASN LEQUEL ON VEUT LES VOIR APPARAITRE  -->
     <navbar></navbar>
     <logo></logo>
      <font2></font2>
     <shopping2></shopping2>
     <font3></font3>
     <footer1></footer1>

  </div>
</template>
<script>
// LA ON RAMENE NOS PAGE EN FAISANT LE CHEMAIN DE LEUR PLACE DASN LE PROJET 
import navbar from '../components/front/navbar/mynav' 
import shopping2 from '../components/front/shopping/shopping2'
import footer1 from '../components/front/footer/footer'
import font2 from '../components/front/logofont/imageHB/font2'
import font3 from '../components/front/logofont/imageHB/font3'
import logo from '../components/front/logofont/imageHB/logo'



export default{
   components:{
    navbar,
    shopping2,
    footer1,
    logo,
    font2,
    font3,
    
   }
 }
</script>
