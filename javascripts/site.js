function mobileViewUpdate(){$(window).width()<768?($(".row.projects-row").removeClass("row").addClass("gallery-mobile1"),$(".col-md-8").removeClass("right").addClass("gallery-mobile2")):($(".gallery-mobile1").removeClass("gallery-mobile1").addClass("row"),$(".gallery-mobile2").removeClass("gallery-mobile2").addClass("right"))}$(window).on("resize",mobileViewUpdate),$(window).on("load",function(){$(".rolldown-list a ").each(function(){var a=$(this).index()/4+"s";$(this).css({webkitAnimationDelay:a,mozAnimationDelay:a,animationDelay:a})}),mobileViewUpdate(),$(".navbar-brand").click(function(){$("#navbarNavAltMarkup").removeClass("show")}),$(".projects-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".projects").offset().top},1200),!1}),$(".about-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".about").offset().top},1200),!1}),$(".blog-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".blogs").offset().top},1200),!1}),$(".resume-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".resume").offset().top},1200),!1}),$(".contact-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".contact").offset().top},1200),!1});var a=$(document),o=$(".navbar"),l="navbar-default";navbarTransparent="navbar-transparent",a.scroll(function(){a.scrollTop()>=100?(o.addClass(l),o.removeClass(navbarTransparent)):(o.addClass(navbarTransparent),o.removeClass(l))});var e=[""],r=0;$("#skills").typeIt({speed:200,autoStart:!0});var t=window.setInterval(function(){r==e.length&&clearInterval(t),$("#skills").typeIt({strings:e[r],speed:100,autoStart:!0}),r+=1},3e3)});