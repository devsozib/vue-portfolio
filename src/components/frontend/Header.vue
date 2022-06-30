<template>
  <div>
   <header class="header-section">
        <div class="header">
            <div class="header-bottom-area">
                <div class="container">
                    <div class="header-menu-content">
                        <nav class="navbar navbar-expand-lg p-0" >
                            <a class="site-logo site-title" href="index.html"><img src="frontend/assets/images/logo.png" alt="site-logo"></a>
                            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="fas fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav main-menu ml-auto">
                                    <li><a href="index-two.html" class="active">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service.html">Service</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="#0">Blog</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-1.html">Blog Post One</a></li>
                                            <li><a href="blog-2.html">Blog Post Two</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
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