!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="dist",t(t.s=0)}([function(e,n,t){function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}var r=t(1);r.enableDevMode&&(t(2),t(3));var s=function(){function e(){i(this,e),this.imageNumber=1,this.timer=null,this.interval(),this.addEventListners()}return o(e,[{key:"setImage",value:function(){var e=document.getElementsByClassName("move-to-center");e[0].classList.add("move-to-out"),e[0].style.WebkitAnimationDuration="".concat(r.slideTime/2.5,"ms"),e[0].style.animationDuration="".concat(r.slideTime/2.5,"ms"),e[0].classList.remove("move-to-center");var n=document.getElementsByClassName("image-".concat(this.imageNumber));n[0].classList.add("move-to-center"),n[0].style.WebkitAnimationDuration="".concat(r.slideTime,"ms"),n[0].style.animationDuration="".concat(r.slideTime,"ms"),n[0].classList.remove("move-to-out");var t=document.getElementsByClassName("slide-nav-bar")[0].getElementsByTagName("button");Array.from(t).map(function(e){e.classList.remove("active")}),document.getElementsByClassName("slide-nav-bar-".concat(this.imageNumber))[0].classList.add("active")}},{key:"interval",value:function(){var e=this;this.timer=setInterval(function(){e.imageNumber+=1,e.adjustImageCount(),e.setImage()},r.slideTime)}},{key:"addEventListners",value:function(){var e=this,n=document.getElementsByClassName("slide-button");buttonElementArray=Array.from(n),buttonElementArray.map(function(n){n.addEventListener("click",function(t){clearInterval(e.timer),"inc"==n.value?e.imageNumber+=1:e.imageNumber-=1,e.adjustImageCount(),e.setImage(),e.interval()})});var t=document.getElementsByClassName("slide-nav-bar")[0].getElementsByTagName("button");Array.from(t).map(function(n){n.addEventListener("click",function(t){clearInterval(e.timer),e.imageNumber=n.value,e.setImage(),e.interval()})})}},{key:"adjustImageCount",value:function(){var e=document.getElementsByClassName("slide-image");this.imageNumber>e.length?this.imageNumber=1:this.imageNumber<1&&(this.imageNumber=4)}}]),e}(),d=function(){function e(){i(this,e),this.addEventListners()}return o(e,[{key:"addEventListners",value:function(){var e=this,n=document.getElementsByClassName("menu-bar-expanded")[0].getElementsByTagName("li");Array.from(n).map(function(n){n.addEventListener("click",function(t){var i=document.getElementsByClassName("menu-bar-expanded")[0].getElementsByTagName("li");Array.from(i).map(function(e){e.classList.remove("active")}),n.classList.add("active"),e.smoothScroll(n.getElementsByTagName("a")[0].getAttribute("value"))})});var t=document.getElementsByClassName("menu");t[0].addEventListener("click",function(e){t[0].classList.contains("close")?(t[0].classList.remove("close"),t[0].getElementsByTagName("ul")[0].classList.remove("active")):(t[0].classList.add("close"),t[0].getElementsByTagName("ul")[0].classList.add("active"))})}},{key:"curruntYPosition",value:function(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}},{key:"elementYPosition",value:function(e){for(var n=document.getElementsByClassName(e),t=n[0].offsetTop,i=n;i[0].offsetParent&&i[0].offsetParent!=document.body;)(i=[]).push(n[0].offsetParent),t+=i[0].offsetTop;return t-=document.getElementsByClassName("header")[0].offsetHeight}},{key:"smoothScroll",value:function(e){var n=this.curruntYPosition(),t=this.elementYPosition(e);console.log("".concat(n," : ").concat(t));var i=t>n?t-n:n-t;if(i<100)scrollTo(0,t);else{console.log("distance : ".concat(i));var a=Math.round(i/100);a>=20&&(a=20);var o=Math.round(i/25),r=t>n?n+o:n-o,s=0;if(!(t>n)){for(var d=n;d>t;d-=o)setTimeout("window.scrollTo(0, ".concat(r,")"),s*a),(r-=o)<t&&(r=t),s++;return!1}for(var l=n;l<t;l+=o)setTimeout("window.scrollTo(0, ".concat(r,")"),s*a),(r+=o)>t&&(r=t),s++}}}]),e}();new s,new d},function(e){e.exports={enableDevMode:!0,slideTime:1e4}},function(e,n){e.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <link rel="icon" type="image/x-icon" href="favicon.ico">\r\n    <title>Safety</title>\r\n    <link rel="stylesheet" href="index.css"/>\r\n</head>\r\n<body>\r\n    <div class="header">\r\n        <ul class="">\r\n            <li class="padding-0-5-rem"><a href="#">Logo</a></li>\r\n            <li class="menu">\r\n                <div class="menu-bar-button padding-0-5-rem">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n                <ul class="menu-bar-expanded">\r\n                    <li class="padding-0-5-rem active"><a href="#home" value="slide-show">Home</a></li>\r\n                    <li class="padding-0-5-rem"><a href="#services" value="service-header">Services</a></li>\r\n                    <li class="padding-0-5-rem"><a href="#about" value="about">About Us</a></li>\r\n                    <li class="padding-0-5-rem"><a href="#contact" value="footer">Contact Us</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class="content">\r\n        <div class="slide-show">\r\n            <div class="slide-image image-1 move-to-center">\r\n                <div class="skewed"></div>\r\n                <div class="text">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class="slide-image image-2">\r\n                <div class="skewed"></div>\r\n                <div class="text">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class="slide-image image-3">\r\n                <div class="skewed"></div>\r\n                <div class="text">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class="slide-image image-4">\r\n                <div class="skewed"></div>\r\n                <div class="text">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class="slide-nav-bar">\r\n                <button class="slide-nav-bar-1 active" value="1"></button>\r\n                <button class="slide-nav-bar-2" value="2"></button>\r\n                <button class="slide-nav-bar-3" value="3"></button>\r\n                <button class="slide-nav-bar-4" value="4"></button>\r\n            </div>\r\n            <div class="slide-buttons">\r\n                <button class="slide-button" value="dec"><</button>\r\n                <button class="slide-button" value="inc">></button>\r\n            </div>\r\n        </div>\r\n        <p class="service-header">This is why you should choose us...</p>\r\n        <div class="services">\r\n            <div class="service">\r\n                <img src="images/info1.png" alt="">\r\n                <div class="text">\r\n                    <p>Lorem ipsum dolor sit.</p>\r\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                </div>\r\n            </div>\r\n            <div class="service">\r\n                <img src="images/info2.jpg" alt="">\r\n                <div class="text">\r\n                    <p>Lorem ipsum dolor sit.</p>\r\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                </div>\r\n            </div>\r\n            <div class="service">\r\n                <img src="images/info3.png" alt="">\r\n                <div class="text">\r\n                    <p>Lorem ipsum dolor sit.</p>\r\n                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="footer">\r\n        <div class="contact">\r\n            <p class="contact-header">Enquiry</p>\r\n            <form>\r\n                <label for="cname">Name</label>\r\n                <input type="text" name="cname" id="">\r\n                <label for="cphone">Phone</label>\r\n                <input type="text" name="cphone" id="">\r\n                <label for="cemail">Email</label>\r\n                <input type="text" name="cemail" id="">\r\n                <label for="cmessage">Message</label>\r\n                <textarea name="cmessage" id="" cols="30" rows="5"></textarea>\r\n            </form>\r\n        </div>\r\n        <div class="about">\r\n            <div class="red-div"></div>\r\n            <p>About Us</p>\r\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto atque deleniti dolor saepe dolorum est odio optio. Reiciendis possimus nihil, sed enim distinctio adipisci quisquam, dolorem aliquam dolorum maiores id.</p>\r\n        </div>\r\n    </div>\r\n    <script type="text/javascript" src="dist/index.js"><\/script>\r\n</body>\r\n</html>'},function(e,n){e.exports='/* <reusable> */\n.padding-0-5-rem {\n  padding: 0.5rem;\n}\n\n/* </reusable> */\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\nhtml body {\n  margin: 0;\n}\nhtml body ul {\n  padding: 0;\n}\nhtml body ul li {\n  list-style: none;\n}\nhtml body a {\n  text-decoration: none;\n  color: #000000;\n}\nhtml body button {\n  border: 1px solid transparent;\n  background: #ffffff;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  font-size: 1rem;\n  background: #ffffff;\n  z-index: 1;\n}\n.header ul {\n  display: flex;\n  justify-content: space-around;\n}\n.header a {\n  white-space: nowrap;\n}\n.header .menu .menu-bar-button {\n  display: none;\n  width: 1em;\n}\n.header .menu .menu-bar-button div {\n  border-bottom: 1px solid #000000;\n  padding: 2px 0;\n}\n@media only screen and (max-width: 540px) {\n  .header .menu .menu-bar-button {\n    display: block;\n  }\n}\n.header .menu .menu-bar-expanded li {\n  border-bottom: 1px solid transparent;\n}\n.header .menu .menu-bar-expanded li:hover {\n  border-bottom: 1px solid #D9D9D9;\n}\n.header .menu .menu-bar-expanded > .active {\n  border-bottom: 1px solid red;\n}\n.header .menu .menu-bar-expanded > .active:hover {\n  border-bottom: 1px solid red;\n}\n@media only screen and (max-width: 540px) {\n  .header .menu .menu-bar-expanded {\n    display: none;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .header .menu > .active {\n    display: block;\n    text-align: center;\n    background: #ffffff;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    margin-top: 1em;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .header .close .menu-bar-button div:nth-child(odd) {\n    border-bottom: 1px solid transparent;\n  }\n  .header .close .menu-bar-button div:nth-child(even) {\n    animation: skew-button 250ms linear 1 forwards;\n  }\n  .header .close .menu-bar-button div:nth-child(even)::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-bottom: 1px solid black;\n    margin: -2px 0;\n    animation: skew-button-after 250ms linear 1 forwards;\n  }\n}\n\n.content {\n  margin-top: calc(2em + 2em + 0.3rem);\n  z-index: 0;\n  position: relative;\n  overflow: hidden;\n}\n.content .slide-show {\n  display: flex;\n  position: relative;\n  height: 60vh;\n  color: #ffffff;\n  text-shadow: 0 0 20px #000000;\n}\n.content .slide-show > div {\n  position: absolute;\n}\n.content .slide-show .slide-image {\n  width: 100%;\n  flex-shrink: 0;\n  display: flex;\n}\n.content .slide-show .slide-image .skewed {\n  width: 50%;\n  height: 60vh;\n  transform: skew(-20deg);\n  margin-left: 7%;\n  background: red;\n  opacity: 0.4;\n}\n.content .slide-show .slide-image .text {\n  width: 60%;\n  margin-left: -55%;\n  z-index: 1;\n}\n.content .slide-show .slide-image .text h1 {\n  font-size: 3.5vmax;\n  margin-left: 30%;\n  margin-bottom: 0;\n}\n@media only screen and (max-width: 540px) {\n  .content .slide-show .slide-image .text h1 {\n    font-size: 4.5vmax;\n  }\n}\n.content .slide-show .slide-image .text p {\n  font-size: 1.6vmax;\n  margin-top: 0;\n  margin-left: 20%;\n}\n@media only screen and (max-width: 540px) {\n  .content .slide-show .slide-image .text p {\n    font-size: 2.7vmax;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .content .slide-show .slide-image .text {\n    width: 70%;\n  }\n}\n.content .slide-show .slide-nav-bar {\n  display: flex;\n  flex-direction: column;\n  right: 0.6em;\n  height: 90%;\n  justify-content: center;\n}\n.content .slide-show .slide-nav-bar button {\n  width: 0.5em;\n  height: 2em;\n  margin: 1em;\n  box-shadow: 0 0 1em 0 black;\n}\n.content .slide-show .slide-nav-bar .active {\n  background: red;\n}\n.content .slide-show .slide-buttons {\n  bottom: 0.6em;\n  right: 0.2em;\n}\n.content .slide-show .slide-buttons .slide-button {\n  margin-right: 0.8em;\n  padding: 0.8em;\n  box-shadow: 0 0 1em 0 black;\n}\n.content .slide-show .image-1 {\n  background: url("images/5.png");\n  background-size: cover;\n  background-position: center;\n  left: 100%;\n}\n.content .slide-show .image-2 {\n  background: url("images/6.jpg");\n  background-size: cover;\n  background-position: center;\n  left: 100%;\n}\n.content .slide-show .image-3 {\n  background: url("images/7.jpg");\n  background-size: cover;\n  background-position: center;\n  left: 100%;\n}\n.content .slide-show .image-4 {\n  background: url("images/8.png");\n  background-size: cover;\n  background-position: center;\n  left: 100%;\n}\n.content .slide-show .move-to-center {\n  -webkit-animation: move-to-center 8s 0s 1 forwards;\n  -moz-animation: move-to-center 8s 0s 1 forwards;\n  -o-animation: move-to-center 8s 0s 1 forwards;\n  animation: move-to-center 8s 0s 1 forwards;\n}\n.content .slide-show .move-to-out {\n  -webkit-animation: move-to-out 3s 0s 1 forwards;\n  -moz-animation: move-to-out 3s 0s 1 forwards;\n  -o-animation: move-to-out 3s 0s 1 forwards;\n  animation: move-to-out 3s 0s 1 forwards;\n}\n.content .service-header {\n  font-size: 1.3rem;\n  text-align: center;\n}\n.content .services {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  color: #000000;\n}\n.content .services .service {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5em;\n  width: 21vmax;\n}\n.content .services .service > img {\n  margin: 0.5em;\n  height: 16em;\n  align-self: center;\n}\n@media only screen and (max-width: 540px) {\n  .content .services .service > img {\n    height: 57vmax;\n  }\n}\n.content .services .service > .text {\n  margin: 1vmax;\n}\n.content .services .service > .text p:first-child {\n  font-size: 2rem;\n  margin: 0.5vmax 0;\n}\n@media only screen and (max-width: 540px) {\n  .content .services .service > .text {\n    margin: 0 5vmax;\n  }\n}\n.content .services .service:nth-child(2) {\n  border-left: 1px solid #D9D9D9;\n  border-right: 1px solid #D9D9D9;\n  padding: 0 3vmax;\n}\n@media only screen and (max-width: 1300px) {\n  .content .services .service:nth-child(2) {\n    padding: 0;\n    border: 0px;\n    border-top: 1px solid #D9D9D9;\n    border-bottom: 1px solid #D9D9D9;\n  }\n}\n@media only screen and (max-width: 1300px) and (min-width: 540px) {\n  .content .services .service {\n    flex-direction: row;\n    width: auto;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .content .services .service {\n    width: 60vmax;\n  }\n}\n@media only screen and (max-width: 1300px) {\n  .content .services {\n    flex-direction: column;\n  }\n}\n\n.footer {\n  position: relative;\n  background: #0D9361;\n  display: flex;\n  justify-content: space-around;\n  color: #ffffff;\n  padding-bottom: 50px;\n}\n.footer > div {\n  margin: 1em 2em;\n}\n.footer .contact p {\n  font-size: 2rem;\n}\n@media only screen and (min-width: 540px) {\n  .footer .contact p {\n    margin: 0.5vmax 0;\n  }\n}\n.footer .contact form {\n  display: flex;\n  flex-direction: column;\n}\n.footer .contact form label {\n  margin-top: 0.5vmax;\n}\n.footer .about {\n  width: 50%;\n  text-align: end;\n}\n.footer .about :nth-child(2) {\n  font-size: 2rem;\n}\n.footer .about .red-div {\n  position: absolute;\n  background: red;\n  width: 100%;\n}\n@media only screen and (max-width: 540px) {\n  .footer {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n/* <keyframes> */\n@-webkit-keyframes move-to-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-moz-keyframes move-to-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-o-keyframes move-to-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes move-to-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes move-to-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-moz-keyframes move-to-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-o-keyframes move-to-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes move-to-out {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes skew-button {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, 36deg);\n  }\n}\n@keyframes skew-button-after {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, -56deg);\n  }\n}\n/* </keyframes> */\n\n/*# sourceMappingURL=index.css.map */\n'}]);