<template>
<!-- Footer -->
	<section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>COMMENT POUVONS-NOUS VOUS AIDER ?</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Service client</a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Suivre ma commande</a></li>
					
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>INFORMATION</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Information sur la livraison</a></li>
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Bénéficiez en exclusivité d’offres et & de mises à jour</a></li>
					
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>QUI SOMMES-NOUS ?</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>En savoir plus sur DG SHOP</a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				
			</div>	
			<div class="row">
				
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">& All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
					<div class="copy"><footer>&copy; Copyright  DG SHOP  2020</footer>
					<h1 id="haut"></h1>
    
<div><a id="cRetour" class="cInvisible" href="#haut"></a></div>
				</div>
				
</div>
			</div>	
		</div>
	</section>

    
</template>
<script>

// document.addEventListener('DOMContentLoaded', function() {
//   window.onscroll = function() {
//     document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
//   };
// });

</script>

<style>
/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}
a#cRetour{
  border-radius:3px;
  padding:10px;
  font-size:15px;
  text-align:center;
  color:rgb(109, 102, 102);
  background:rgba(0, 0, 0, 0.25);
  position:fixed;
  right:20px;
  opacity:1;
  z-index:99999;
  transition:all ease-in 0.2s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  text-decoration: none;
}
a#cRetour:before{ content: "\25b2"; }
a#cRetour:hover{
  background: #f6cfca;
  transition:all ease-in 0.2s;
}
a#cRetour.cInvisible{
  bottom:-35px;
  opacity:0;
  transition:all ease-in 0.5s;
}

a#cRetour.cVisible{
  bottom:20px;
  opacity:1;
}
section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: #f6cfca!important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}
  
.revenir{
    width: 100%;
	height: 30px;
    padding-bottom: 20px;
    position: relative;
    }


@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}

}

</style>