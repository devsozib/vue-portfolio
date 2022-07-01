<template>
  <div>
   <header class="header-section">
        <div class="header">
            <div class="header-bottom-area">
                <div class="container">
                    <div class="header-menu-content">
                        <nav class="navbar navbar-expand-lg p-0" >
                     
                            <router-link class="site-logo site-title" :to="{name:'home'}">PORTFOLIO</router-link>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="fas fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu ml-auto">
                                    <li><router-link :to="{name:'home'}" class="active">Home</router-link></li>
                                    <li><router-link :to="{name:'about'}">About</router-link></li>
                                    <li><router-link :to="{name:'service'}">Service</router-link></li>
                                    <li><router-link :to="{name:'portfolio'}">Portfolio</router-link></li>
                                    <li><a href="#0">Blog</a>
                                        <ul class="sub-menu">
                                            <li><router-link :to="{name:'blog'}">Blog Post One</router-link></li>
                                            <li><router-link :to="{name:'blog_details'}">Blog Details</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link :to="{name:'contact'}">Contact</router-link></li>
                                </ul>
                                <div class="search-bar">
                                    <a href="#0"><i class="fas fa-search"></i></a>
                                    <div class="header-top-search-area">
                                        <form class="header-search-form">
                                            <input type="search" name="header_search" id="header_search" placeholder="Search here...">
                                            <button class="header-search-btn"><i class="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>



export default {
  name: 'Header',
  components: {
    
  }
}
</script>