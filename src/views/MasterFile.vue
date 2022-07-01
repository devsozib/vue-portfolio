<template>
  <div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Start Preloader
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--> 
    <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div><!-- /preloader-icon -->
        </div><!-- /preloader-inner -->
    </div><!-- /preloader -->


    <!-- header-section start -->
   <Header/>
    <!-- header-section end -->


    <!-- version-change-area start -->
    <div class="version-change-area">
        <button type="button" class="v-open-btn">Light Demo</button>
        <div class="version-list-wrapper" id="demoBar" data-simplebar>
            <div class="single-item">
                <h6 class="title">Light_Home</h6>
                <div class="version-list">
                    <a href="index-two.html" class="bg_img" data-background="frontend/assets/images/demo/02_home_02.jpg"><span>Top Navbar</span></a>
                    <a href="index.html" class="bg_img" data-background="frontend/assets/images/demo/01_home_01.jpg"><span>Side Navbar</span></a>
                </div>
            </div>
            <div class="single-item">
                <h6 class="title">Light_home-snow</h6>
                <div class="version-list">
                    <a href="index-two-particle.html" class="bg_img" data-background="frontend/assets/images/demo/02_home_02.jpg"><span>Top Navbar</span></a>
                    <a href="index-particle.html" class="bg_img" data-background="frontend/assets/images/demo/01_home_01.jpg"><span>Side Navbar</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- version-change-area end -->

    <!-- version-change-area start -->
    <div class="version-change-area-two">
        <button type="button" class="v-open-btn-two">Dark Demo</button>
        <div class="version-list-wrapper" id="demoBar" data-simplebar>
            <div class="single-item">
                <h6 class="title">Dark_Home</h6>
                <div class="version-list">
                    <a href="index-dark-two.html" class="bg_img" data-background="frontend/assets/images/demo/04_home_04.jpg"><span>Top Navbar</span></a>
                    <a href="index-dark.html" class="bg_img" data-background="frontend/assets/images/demo/03_home_03.jpg"><span>Side Navbar</span></a>
                </div>
            </div>
            <div class="single-item">
                <h6 class="title">Dark_home-snow</h6>
                <div class="version-list">
                    <a href="index-dark-two-particle.html" class="bg_img" data-background="frontend/assets/images/demo/04_home_04.jpg"><span>Top Navbar</span></a>
                    <a href="index-dark-particle.html" class="bg_img" data-background="frontend/assets/images/demo/03_home_03.jpg"><span>Side Navbar</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- version-change-area end -->


        <div class="fixed-item fixed-item-two">
            
           <router-view></router-view>
         <ContactSection/>
         <Footer/>
            
        </div>
    </div>
</template>

<script>

import Header from '../components/frontend/Header.vue';
import Footer from '../components/frontend/Footer.vue';
import ContactSection from '../components/frontend/ContactSection.vue';
export default {
  name: 'MasterFile',
  components:{Header, Footer, ContactSection}
}
</script>