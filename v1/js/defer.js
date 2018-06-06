// YouTube Responsive
(function(){var youtube=document.querySelectorAll(".youtube");for(var i=0;i<youtube.length;i++){var source="https://img.youtube.com/vi/"+youtube[i].dataset.embed+"/sddefault.jpg";var image=new Image();image.src=source;image.addEventListener("load",function(){youtube[i].appendChild(image);}(i));youtube[i].addEventListener("click",function(){var iframe=document.createElement("iframe");iframe.setAttribute("frameborder","0");iframe.setAttribute("allowfullscreen","");iframe.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1");this.innerHTML="";this.appendChild(iframe);});};})();
//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i");loadCSS("https://fonts.googleapis.com/css?family=Roboto+Slab:400,700");loadCSS("https://fonts.googleapis.com/icon?family=Material+Icons");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700");loadCSS("https://fonts.googleapis.com/css?family=Lato:400,300,700");loadCSS("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");loadCSS("https://fonts.googleapis.com/css?family=PT+Sans");
