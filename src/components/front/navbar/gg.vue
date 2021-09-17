<template>
 <div>
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
 </div>
   
</template>
<script>
  export default {

  }
</script>
<style  scoped>
.plateform {
    color:  #FD6C96;
  }

  .logoIcone {
    color:  #FD6C96;
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
 #menu-deroulant ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

#menu-deroulant {
/* on centre le menu dans la page */
        text-align: right;
 
}

#menu-deroulant li {
/* on place les liens du menu horizontalement */
    display: inline-block;
}

#menu-deroulant a {
    text-decoration: none;
    display: block;
	color:rgb(163, 53, 84);
  margin: auto;
}

#menu-deroulant ul {
    position: absolute;
/* on cache les sous menus complètement sur la gauche */
    left: -100em;
    text-align: left;
    z-index: 1000;
}

#menu-deroulant li:hover ul {
/* Au survol des li du menu on replace les sous menus */
    left: auto ;
   
}

  .header {
    background-color: #f4f4f4;
    box-shadow: 1px 1px 4px 0 rgba(51, 196, 7, 0.1);
    width: 100%;
    z-index: 3;
  
  }

  .header ul {
    margin: 0;
    padding: 5;
    list-style: none;
    overflow: hidden;
  
  }

  .header li a {
    display: block;
    padding: 2px 1px;
    text-decoration: none;
    font-size: 15px;
    text-decoration: underline overline rgb(189, 16, 137);
  }

  
  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 4px 20px;
    text-decoration: none;
    margin: 13px;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
    background: #f4f4f4;

  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 90px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon {
    float: right;
  }

  .header .menu-icon .navicon {
    background: white;
    display: block;
    height: 1.5px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .3s ease-out;
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
    max-height: 302px;
   
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

 



  @media (min-width: 1025px) {
 
 .login {
      float:right;
      padding: 50px;
      margin-top: -100px;

}
.loginn {
      float: right;
      padding: 50px;
      margin-top: -100px;
}
.logoIcone {
      color: #000;
      padding: 30px 20px;
    }

    .header li {
      float: left;
      padding: 2px 1px;
    }

    .header li a {
        padding: 20px 20px;

    }

    .header .menu {
      clear: none;
      margin-left: 10%;

      max-height: none;
    }

    .header .menu-icon {
      display: none;
    }
    
    }
   
  
</style>

