(this["webpackJsonprapport-alternance"]=this["webpackJsonprapport-alternance"]||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/fd_black.913733af.png"},38:function(e,a,t){e.exports=t.p+"static/media/loading.9f0bb82a.gif"},40:function(e,a,t){e.exports=t.p+"static/media/logo-the-mask.f82bb365.png"},41:function(e,a,t){e.exports=t.p+"static/media/fd_white.98b0acee.png"},44:function(e,a,t){e.exports=t(66)},60:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(26),c=t.n(i),s=t(12),m=t(13),r=t(16),o=t(15),d=t(23),u=t.n(d),p=t(22),E=t(6),v=t(30),N=t(19),g=t.n(N),f=t(29),h=t(37),b=t.n(h),w=t(38),x=t.n(w),_=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.isVisible?l.a.createElement("div",{className:"splash-tab"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"splash-screen-logo"},l.a.createElement("img",{src:b.a,width:"450",alt:"Logo Free Center"})),l.a.createElement("div",{className:"splash-screen-loading"},l.a.createElement("img",{src:x.a,alt:"Loading",height:"180"})))):l.a.createElement("div",null,this.props.children))}}]),t}(n.Component);function y(e){e.currentPage;var a=e.returnPage;return l.a.createElement("header",{id:"site_header",className:"header"},l.a.createElement("div",{className:"header-content clearfix"},l.a.createElement("div",{className:"text-logo"},l.a.createElement("a",{href:"#",onClick:function(){return a(1)}},l.a.createElement("div",{className:"logo-symbol"},"RS"),l.a.createElement("div",{className:"logo-text"},"Romain ",l.a.createElement("span",null,"Soubrane")))),l.a.createElement("div",{className:"site-nav animate mobile-menu-hide"},l.a.createElement("ul",{id:"menu-classic-menu",className:"leven-classic-menu site-main-menu"},l.a.createElement("li",{id:"menu-item-160",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160"},l.a.createElement("a",{href:"#",onClick:function(){return a(2)},"data-hover":"1"},"A propos")),l.a.createElement("li",{id:"menu-item-174",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-174"},l.a.createElement("a",{href:"#",onClick:function(){return a(3)},"data-hover":"1"},"Entreprise")),l.a.createElement("li",{id:"menu-item-28",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-28"},l.a.createElement("a",{href:"#",onClick:function(){return a(4)},"data-hover":"1"},"Missions")),l.a.createElement("li",{id:"menu-item-240",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-240"},l.a.createElement("a",{href:"#",onClick:function(){return a(5)},"data-hover":"1"},"Bilan")),l.a.createElement("li",{id:"menu-item-191",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-191"},l.a.createElement("a",{href:"#",onClick:function(){return a(6)},"data-hover":"1"},"T\xe9moignage")))),l.a.createElement("a",{className:"menu-toggle mobile-visible"},l.a.createElement("i",{className:"fas fa-bars"}))))}function k(){return l.a.createElement("footer",{className:"site-footer clearfix"},l.a.createElement("div",{className:"footer-social"},l.a.createElement("ul",{className:"footer-social-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"Instagram")))),l.a.createElement("div",{className:"footer-copyrights"},l.a.createElement("p",null,"\xa9 2020 Tous droits r\xe9serv\xe9s. Romain Soubrane.")))}var P=function(e,a,t){d.store.addNotification({title:a,message:t,type:e,insert:"top",container:"bottom-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3},dismissable:{click:!0}})},R=t(20),O=t.n(R),S=(t(55),t(57),t(67),{apiKey:"AIzaSyD0hXHujkjaxajBNhRm930q9hQuoekbtEQ",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DATABASE_URL,projectId:"rapport-alternance",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGING_SENDER_ID,appId:"1:230835771057:web:e89848bb472e10452bf490",measurementId:"G-WRWK7FL4LN"});O.a.initializeApp(S),O.a.analytics();O.a.auth();var j=O.a.firestore(),T=function(){var e=Object(f.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,j.collection("products").get().then((function(e){e.docs.forEach((function(e){a.push(e.data())}))}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){e.returnPage;return l.a.createElement("div",{className:"fw-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-12 "},l.a.createElement("div",{id:"col_inner_id-5efa6e3571974",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{id:"home_content_111e4c729e81560ba288e46d8e0d933f",className:"home-content"},l.a.createElement("div",{className:"row flex-v-align flex-direction-reverse"},l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"home-photo"},l.a.createElement("div",{className:"hp-inner",style:{backgroundPosition:"calc(50% + -9.77913px) calc(50% + 3.67075px);"}}))),l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"home-text"},l.a.createElement("h1",null,"Rapport alternance - Free"),l.a.createElement("p",null,"D\xe9veloppeur web chez Free"),l.a.createElement("div",{className:"home-buttons"},l.a.createElement("a",{href:"https://themeforest.net/item/leven-vcard-wordpress-theme/25289671",target:"_blank",className:"btn btn-primary"},"Download CV"))))))))))}t(60);function D(){return l.a.createElement("div",{id:"content",className:"page-content site-content single-post",role:"main"},l.a.createElement("article",{id:"post-323",className:"post-323 page type-page status-publish hentry"},l.a.createElement("div",{className:"entry-content"},l.a.createElement("div",{className:"fw-page-builder-content"},l.a.createElement("section",{className:"fw-main-row"},l.a.createElement("div",{className:"fw-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-12 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6c00b",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{id:"home_content_cc1afe4be543928ea39a628af5774616",className:"home-content third-style"},l.a.createElement("div",{className:"start-page-full-width"},l.a.createElement("div",{className:"row flex-direction-reverse"},l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"inner-content"},l.a.createElement("div",{className:"fill-block","data-container":".start-page-full-width .inner-content .fill-block","data-img":"//lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/cesar-rincon-1024x1024.jpg"}))),l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},l.a.createElement("div",{className:"inner-content text-reverse"},l.a.createElement("div",{className:"hp-text-block"},l.a.createElement("div",{className:"owl-carousel text-rotation owl-loaded owl-drag"},l.a.createElement("div",{className:"owl-stage-outer"},l.a.createElement("div",{className:"owl-stage",style:{transform:"translate3d(-1380px, 0px, 0px)",transition:"all 0s ease 0s; width: 2760px"}},l.a.createElement("div",{className:"owl-item cloned",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Frontend-developer"))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Web Designer"))),l.a.createElement("div",{className:"owl-item",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Frontend-developer"))),l.a.createElement("div",{className:"owl-item animated owl-animated-in fadeIn active",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Web Designer"))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Frontend-developer"))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"450px",marginRight:"10px"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"sp-subtitle"},"Web Designer"))))),l.a.createElement("div",{className:"owl-nav disabled"},l.a.createElement("div",{className:"owl-prev"},"prev"),l.a.createElement("div",{className:"owl-next"},"next")),l.a.createElement("div",{className:"owl-dots disabled"})),l.a.createElement("h2",{className:"hp-main-title"},"Alex Smith"),l.a.createElement("p",null,"Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu."),l.a.createElement("div",{className:"hp-buttons"},l.a.createElement("a",{href:"https://themeforest.net/item/leven-vcard-wordpress-theme/25289671",target:"_blank",className:"btn btn-primary"},"Download CV")))))))),l.a.createElement("div",{className:"fw-divider-space",style:{paddingTop:"50px"}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-12 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6c52c",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"block-title"},l.a.createElement("h2",null,"What I Do"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-6 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6c878",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{id:"info-list-5efb2a8a6c9be",className:"info-list-w-icon"},l.a.createElement("div",{className:"info-block-w-icon"},l.a.createElement("div",{className:"ci-icon"},l.a.createElement("i",{className:"linecons linecons-pen"})),l.a.createElement("div",{className:"ci-text"},l.a.createElement("h4",null,"Copywrite"),l.a.createElement("p",null,"Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio."))),l.a.createElement("div",{className:"info-block-w-icon"},l.a.createElement("div",{className:"ci-icon"},l.a.createElement("i",{className:"linecons linecons-display"})),l.a.createElement("div",{className:"ci-text"},l.a.createElement("h4",null,"Web Design"),l.a.createElement("p",null,"Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.")))))),l.a.createElement("div",{className:" col-xs-12 col-sm-6 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6cad8",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{id:"info-list-5efb2a8a6cb9c",className:"info-list-w-icon"},l.a.createElement("div",{className:"info-block-w-icon"},l.a.createElement("div",{className:"ci-icon"},l.a.createElement("i",{className:"linecons linecons-shop"})),l.a.createElement("div",{className:"ci-text"},l.a.createElement("h4",null,"Ecommerce"),l.a.createElement("p",null,"Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio."))),l.a.createElement("div",{className:"info-block-w-icon"},l.a.createElement("div",{className:"ci-icon"},l.a.createElement("i",{className:"linecons linecons-megaphone"})),l.a.createElement("div",{className:"ci-text"},l.a.createElement("h4",null,"Marketing"),l.a.createElement("p",null,"Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio."))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-12 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6ce07",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"fw-divider-space",style:{paddingTop:"20px"}}),l.a.createElement("div",{className:"block-title"},l.a.createElement("h2",null,"Testimonials")),l.a.createElement("div",{id:"testimonials_f297ab5bd43f90472fa9bd5a896eb14a",className:"testimonials owl-carousel owl-loaded owl-drag","data-mobile-items":"1","data-tablet-items":"2","data-items":"2"},l.a.createElement("div",{className:"owl-stage-outer owl-height",style:{height:"223px"}},l.a.createElement("div",{className:"owl-stage",style:{transform:"translate3d(-1155px, 0px, 0px)",transition:"all 0s ease 0s; width: 4043px"}},l.a.createElement("div",{className:"owl-item cloned",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Gary Johnson"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Gary Johnson"),l.a.createElement("p",{className:"testimonial-firm"},"Locost Accessories")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Daniel Pringle"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Daniel Pringle"),l.a.createElement("p",{className:"testimonial-firm"},"Sagebrush")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item active",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Billy Adams"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Billy Adams"),l.a.createElement("p",{className:"testimonial-firm"},"Rolling Thunder")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item active",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Gary Johnson"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Gary Johnson"),l.a.createElement("p",{className:"testimonial-firm"},"Locost Accessories")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Daniel Pringle"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Daniel Pringle"),l.a.createElement("p",{className:"testimonial-firm"},"Sagebrush")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Billy Adams"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Billy Adams"),l.a.createElement("p",{className:"testimonial-firm"},"Rolling Thunder")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))),l.a.createElement("div",{className:"owl-item cloned",style:{width:"567.5px",marginRight:"10px"}},l.a.createElement("div",{className:"testimonial-item testimonial-testimonials-5efb2a8a6d0c5"},l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/11/main_photo.jpg",alt:"Gary Johnson"})),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,"Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.")),l.a.createElement("div",{className:"testimonial-author-info"},l.a.createElement("h5",{className:"testimonial-author"},"Gary Johnson"),l.a.createElement("p",{className:"testimonial-firm"},"Locost Accessories")),l.a.createElement("div",{className:"testimonial-icon"},l.a.createElement("i",{className:"fa fa-quote-left"})),l.a.createElement("div",{className:"testimonial-icon-big"},l.a.createElement("i",{className:"fa fa-quote-right"}))))))),l.a.createElement("div",{className:"owl-nav disabled"},l.a.createElement("div",{className:"owl-prev"}),l.a.createElement("div",{className:"owl-next"})),l.a.createElement("div",{className:"owl-dots"},l.a.createElement("div",{className:"owl-dot active"},l.a.createElement("span",null)),l.a.createElement("div",{className:"owl-dot"},l.a.createElement("span",null)))),l.a.createElement("div",{className:"fw-divider-space",style:{paddingTop:"20px"}}),l.a.createElement("div",{className:"block-title"},l.a.createElement("h2",null,"Clients")),l.a.createElement("div",{id:"clients_ea5ef3c3560c2e0e923f56acc53b32d4",className:"clients owl-carousel owl-loaded owl-drag","data-mobile-items":"1","data-tablet-items":"3","data-items":"6"},l.a.createElement("div",{className:"owl-stage-outer"},l.a.createElement("div",{className:"owl-stage",style:{transform:"translate3d(0px, 0px, 0px)",transition:"all 0s ease 0s; width: 1540px"}},l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"Envato"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"Envato"})))),l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"Google"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"Google"})))),l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"Adobe"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"Adobe"})))),l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"jQuery"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"jQuery"})))),l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"GitHub"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"GitHub"})))),l.a.createElement("div",{className:"owl-item active",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"LESS"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"LESS"})))),l.a.createElement("div",{className:"owl-item",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"Spotify"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"Spotify"})))),l.a.createElement("div",{className:"owl-item",style:{width:"182.5px",marginRight:"10px"}},l.a.createElement("div",{className:"client-block"},l.a.createElement("a",{href:"#",target:"_blank",title:"WordPress"},l.a.createElement("img",{src:"//lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client.png",alt:"WordPress"})))))),l.a.createElement("div",{className:"owl-nav disabled"},l.a.createElement("div",{className:"owl-prev"}),l.a.createElement("div",{className:"owl-next"})),l.a.createElement("div",{className:"owl-dots"},l.a.createElement("div",{className:"owl-dot active"},l.a.createElement("span",null)),l.a.createElement("div",{className:"owl-dot"},l.a.createElement("span",null)))),l.a.createElement("div",{className:"fw-divider-space",style:{paddingTop:"20px"}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-12 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6d614",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"block-title"},l.a.createElement("h2",null,"Fun Facts"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-xs-12 col-sm-3 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6d8b4",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"lm-info-block gray-default"},l.a.createElement("i",{className:"linecons linecons-heart"}),l.a.createElement("h4",null,"Happy Clients"),l.a.createElement("span",{className:"lm-info-block-value"},"578"),l.a.createElement("span",{className:"lm-info-block-text"})))),l.a.createElement("div",{className:" col-xs-12 col-sm-3 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6db0a",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"lm-info-block gray-default"},l.a.createElement("i",{className:"linecons linecons-clock"}),l.a.createElement("h4",null,"Working Hours"),l.a.createElement("span",{className:"lm-info-block-value"},"4,780"),l.a.createElement("span",{className:"lm-info-block-text"})))),l.a.createElement("div",{className:" col-xs-12 col-sm-3 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6dcae",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"lm-info-block gray-default"},l.a.createElement("i",{className:"linecons linecons-star"}),l.a.createElement("h4",null,"Awards Won"),l.a.createElement("span",{className:"lm-info-block-value"},"15"),l.a.createElement("span",{className:"lm-info-block-text"})))),l.a.createElement("div",{className:" col-xs-12 col-sm-3 "},l.a.createElement("div",{id:"col_inner_id-5efb2a8a6de89",className:"fw-col-inner","data-paddings":"0px 0px 0px 0px"},l.a.createElement("div",{className:"lm-info-block gray-default"},l.a.createElement("i",{className:"linecons linecons-cup"}),l.a.createElement("h4",null,"Coffee Consumed"),l.a.createElement("span",{className:"lm-info-block-value"},"1,286"),l.a.createElement("span",{className:"lm-info-block-text"})))))))))))}var A=t(42),q=t(68),W=t(69),I=t(70),L=t(71);function U(){var e=Object(n.useState)(1),a=Object(A.a)(e,2),t=a[0],i=a[1];return l.a.createElement(q.a,{fluid:!0},l.a.createElement("h1",null,"Enterprise Tab"),l.a.createElement(W.a,{className:"justify-content-center"},l.a.createElement(I.a,{className:"sub_menu"},l.a.createElement(L.a,{size:"lg",color:1===t?"primary":"secondary",onClick:function(){return i(1)},className:"switch-button"},"Free"),l.a.createElement(L.a,{size:"lg",color:2===t?"primary":"secondary",onClick:function(){return i(2)},className:"switch-button"},"Free Distribution"))),l.a.createElement(W.a,null,function(){switch(t){case 1:return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Description Free"));case 2:return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Description Free Distribution"));default:return null}}()))}function F(){return l.a.createElement(q.a,{fluid:!0},l.a.createElement("h1",null,"Missions Tab"))}function B(){return l.a.createElement(q.a,{fluid:!0},l.a.createElement("h1",null,"Bilan Tab"))}function G(){return l.a.createElement(q.a,{fluid:!0},l.a.createElement("h1",null,"Testimonials Tab"))}t(61);var K=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={currentPage:1,loading:!0,products:""},e.fetchData=Object(f.a)(g.a.mark((function a(){var t;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T();case 3:t=a.sent,e.setState({products:t}),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0),P("danger","R\xe9cuperation de la config","Une erreur Api est survenue");case 11:case"end":return a.stop()}}),a,null,[[0,7]])}))),e.handleReturnPage=function(a){e.setState({currentPage:a})},e.switchPage=function(){switch(e.state.currentPage){case 1:return l.a.createElement(C,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});case 2:return l.a.createElement(D,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});case 3:return l.a.createElement(U,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});case 4:return l.a.createElement(F,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});case 5:return l.a.createElement(B,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});case 6:return l.a.createElement(G,{currentPage:e.state.currentPage,returnPage:e.handleReturnPage});default:return null}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),this.setState({loading:!1}),P("success","R\xe9cuperation de la config","Config r\xe9cup\xe9r\xe9e avec succ\xe8s")}},{key:"render",value:function(){return l.a.createElement(_,{isVisible:this.state.loading},l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/"},l.a.createElement("div",{className:"page-scroll"},l.a.createElement("div",{id:"page_container",className:"page-container bg-move-effect theme-style-dark animated transition-flip-in-right","data-animation":"transition-flip-in-right"},l.a.createElement(y,{returnPage:this.handleReturnPage}),l.a.createElement("div",{id:"main",className:"site-main"},l.a.createElement("div",{id:"main-content",className:"single-page-content"},l.a.createElement("div",{id:"primary",className:"content-area"},this.switchPage()))),l.a.createElement(k,null))))))}}]),t}(n.Component),H=Object(v.b)((function(e){return{global:e.currentPage}}))(K),V=t(40),J=t.n(V),M=t(41),z=t.n(M),Q=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={signin:{},redirectToReferrer:!1,from:{pathname:"/"},notification:!1},e.login=function(){window.location="/"},e.handleChange=function(a){var t=e.state.signin;t[a.target.id]=a.target.value,e.setState({signin:t})},e.submitSignin=function(a){a.preventDefault(),e.state.progress||e.setState({progress:!0},(function(){e.login()}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirectToReferrer?l.a.createElement(E.a,{to:this.state.from}):l.a.createElement("div",{className:"Login"},this.state.notification?l.a.createElement("div",{className:"notifications"},l.a.createElement("div",{className:"notification error"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"icon message-alert"},l.a.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}))),l.a.createElement("div",{className:"right"},l.a.createElement("h2",null,"Une erreur est survenue"),l.a.createElement("p",null,"Votre login / mot de passe est erron\xe9")))):null,l.a.createElement("form",{className:"form-signin",onSubmit:function(a){return e.submitSignin(a)}},l.a.createElement("div",{className:"block_logo"},l.a.createElement("img",{className:"mb-4",src:J.a,alt:"",width:"400"})),l.a.createElement("div",{className:"block_form mx-auto w-100"},l.a.createElement("h1",null,"Bienvenue"),l.a.createElement("div",{className:"input"},l.a.createElement("input",{type:"text",id:"username",value:this.state.signin.username?this.state.signin.username:"",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Identifiant",required:!0})),l.a.createElement("div",{className:"input"},l.a.createElement("input",{type:"password",id:"password",value:this.state.signin.password?this.state.signin.password:"",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Mot de Passe",required:!0})),l.a.createElement("button",{className:"btn btn-primary my-4",type:"submit"},"Connexion ",l.a.createElement("span",{className:"fa fa-check"})),l.a.createElement("p",{className:"text-muted"},"\xa9 2020 - ",l.a.createElement("img",{className:"my-4",src:z.a,alt:"",width:"200"})))))}}]),t}(n.Component),X=t(43),Y=!!localStorage.getItem("user",!1),Z=function(e){var a=e.component,t=Object(X.a)(e,["component"]);return l.a.createElement(E.b,Object.assign({},t,{render:function(e){return!0===Y?l.a.createElement(a,e):l.a.createElement(E.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=(t(63),t(64),t(65),t(18)),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CURRENT_PAGE":return a.global;case"EDIT_PAGE":return a.newPage;default:return e}},ae=Object($.b)({global:ee}),te=Object($.c)(ae),ne=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{store:te},l.a.createElement(p.a,null,l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/login",render:function(e){return l.a.createElement(Q,e)}}),l.a.createElement(Z,{path:"/",component:function(e){return l.a.createElement(H,e)}}))),l.a.createElement(u.a,null))}}]),t}(n.Component);c.a.render(l.a.createElement(ne,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.eac229f1.chunk.js.map