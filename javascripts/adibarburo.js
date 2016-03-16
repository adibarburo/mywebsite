!function(e){e.fn.responsiveVideo=function(){e("head").append('<style 

type="text/css">.responsive-video-wrapper{width:100%;position:relative;padding:0}.responsive-

video-wrapper iframe,.responsive-video-wrapper object,.responsive-video-wrapper embed

{position:absolute;top:0;left:0;width:100%;height:100%}</style>');var t=e(this).find('iframe

[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"], 

iframe[src*="dailymotion.com"],iframe[src*="kickstarter.com"][src*="video.html"], object, 

embed');t.not("object object").each(function(){var t=e(this);t.parents("object").length||

(t.prop("id")||t.attr("id","rvw"+Math.floor(999999*Math.random())),t.wrap('<div 

class="responsive-video-wrapper" style="padding-top: '+t.attr("height")/t.attr("width")*100+'%" 

/>').removeAttr("height").removeAttr("width"))})}}(jQuery);

var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:

[500,100]},controlHTML:'<img src="http://1.bp.blogspot.com/-

5bTwiVUZBeM/VWcSrxOW6kI/AAAAAAAAA_s/eTLHkl1uVHA/s1600/sageatatop.png" />',controlattrs:

{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!

1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN

(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof 

t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate

({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery

(window),o=t.scrollLeft()+t.width()-this.$control.width()-

this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-

this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function()

{var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed

(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!

this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration

[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.

$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!

1)},init:function(){jQuery(document).ready(function(t){var 

o=scrolltotop,s=document.all;o.cssfixedsupport=!s||

s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t

(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div 

id="topcontrol">'+o.controlHTML+"</div>").css

({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlatt

rs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Top pagina"}).click(function(){return 

o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text

()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword

+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t)

{o.togglecontrol()})})}};

function showrecentposts(t){for(var e=0;e<numposts;e++){for(var i,n,r,d,a=t.feed.entry

[e],c=a.title.$t,o=0;o<a.link.length;o++)if("alternate"==a.link[o].rel){n=a.link

[o].href,i=a.link[o].title;try{r=t.feed.entry[e].media$thumbnail.url,d=0}catch(u){d=1}break}

c=c.link(n);var m=a.published.$t,s=m.substring(0,4),l=m.substring(5,7),w=m.substring(8,10),v=new 

Array;if(v[1]="Jan",v[2]="Feb",v[3]="Mar",v[4]="Apr",v[5]="May",v[6]="Jun",v[7]="Jul",v

[8]="Aug",v[9]="Sep",v[10]="Oct",v[11]="Nov",v[12]="Dec","content"in a)var h=a.content.$t;else 

var h="";var g=/<\S[^>]*>/g;h=h.replace(g,""),standardstyling||document.write

(""),document.write("<li>"),document.write('<div class="item-thumbnail-only">'),0==d?

(document.write('<div class="item-thumbnail">'),document.write('<a href="'+n

+'">'),document.write('<img src="'),document.write(r),document.write('"/>'),document.write

("</a>"),document.write("</div>")):(document.write('<div class="item-

thumbnail">'),document.write('<a href="'+n+'">'),document.write("<p>Nicio imagine 

asociata</p>"),document.write("</a>"),document.write("</div>")),document.write('<div 

class="item-title">'),standardstyling&&document.write(""),document.write

(c),standardstyling&&document.write(""),1==showpostdate&&document.write(" - "+s+" "+w+" "+v

[parseInt(l,10)]),document.write("</div>"),document.write("</div>"),document.write('<div 

style="clear: both;"></div>'),document.write("</li>"),standardstyling&&document.write("")}}
