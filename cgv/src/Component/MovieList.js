import React from 'react';
import $ from 'jquery';

function MovieList()
   {

      const owlCarousel = () => ({
            items: 4,
            margin: 10,
            loop: true,
            nav: true,
            navText: ['이전', '다음'],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
      });


      $(function () {
         $('.owl-carousel').owlCarousel({
            items: 3,
            margin: 10,
            loop: true,
            nav: true,
            navText: ['이전', '다음'],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
         });
      });
      return (
         
         <div>
            <script src="js/jquery-3.5.1.min.js"></script>
            <script src="js/owl.carousel.js"></script>
            <script src="js/owl.autoplay.js"></script>
            <script src="js/owl.navigation.js"></script>
            <div id="wrapper">
               <div class="owl-theme">
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85833/85833_320.jpg"></img></div>
                  <div class="item"><img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85939/85939_320.jpg"></img></div>
               </div>
            </div>
         </div>
      );
  }
  

 export default MovieList;