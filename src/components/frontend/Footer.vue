<template>
  <div>
 <!-- footer-section start -->
            <footer class="footer-section">
                <div class="container">
                    <div class="row justify-content-center ml-b-30">
                        <div class="col-lg-7 text-center mrb-30">
                            <div class="footer-widget widget-menu">
                                <div class="footer-logo">
                            <router-link class="site-logo site-title" :to="{name:'home'}">PORTFOLIO</router-link>
                                    
                                </div>
                                <p>Suspendisse Lectus Vivamus Donec Turpis Egestas, Sed At Massa Orci, Et Nibh Massa Augue Fermentum Arcu, Potenti Tellus Praesent Integer Aliquam.</p>
                                <ul class="footer-social">
                                    <li><a href="#0"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#0"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#0"><i class="fab fa-dribbble"></i></a></li>
                                    <li><a href="#0"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="privacy-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <p>Copyright © 2022. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>   
            <!-- footer-section end -->
  </div>
</template>

<script>



export default {
  name: 'Footer',
  components: {
    
  }
}
</script>