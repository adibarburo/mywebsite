function showrecentposts(t) {
    for (var e = 0; e < numposts; e++) {
        for (var i, n, r, d, a = t.feed.entry[e], c = a.title.$t, o = 0; o < a.link.length; o++)
            if ("alternate" == a.link[o].rel) {
                n = a.link[o].href, i = a.link[o].title;
                try {
                    r = t.feed.entry[e].media$thumbnail.url, d = 0
                } catch (u) {
                    d = 1
                }
                break
            }
        c = c.link(n);
        var m = a.published.$t,
            l = m.substring(0, 4),
            s = m.substring(5, 7),
            w = m.substring(8, 10),
            v = new Array;
        if (v[1] = "Jan", v[2] = "Feb", v[3] = "Mar", v[4] = "Apr", v[5] = "May", v[6] = "Jun", v[7] = "Jul", v[8] = "Aug", v[9] = "Sep", v[10] = "Oct", v[11] = "Nov", v[12] = "Dec", "content" in a) var h = a.content.$t;
        else var h = "";
        var b = /<\S[^>]*>/g;
        h = h.replace(b, ""), standardstyling || document.write(""), document.write("<li>"), document.write('<div class="item-thumbnail-only">'), 0 == d ? (document.write('<div class="item-thumbnail">'), document.write('<a href="' + n + '">'), document.write('<img src="'), document.write(r), document.write('"/>'), document.write("</a>"), document.write("</div>")) : (document.write('<div class="item-thumbnail">'), document.write('<a href="' + n + '">'), document.write("<p>Nicio imagine asociata</p>"), document.write("</a>"), document.write("</div>")), document.write('<div class="item-title">'), standardstyling && document.write(""), document.write(c), standardstyling && document.write(""), 1 == showpostdate && document.write(" - " + l + " " + w + " " + v[parseInt(s, 10)]), document.write("</div>"), document.write("</div>"), document.write('<div style="clear: both;"></div>'), document.write("</li>"), standardstyling && document.write("")
    }
}

var scrolltotop = {
    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control 
    //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top). 
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1000,
        fadeduration: [500, 100]
    },
    controlHTML: '<img src="http://1.bp.blogspot.com/-5bTwiVUZBeM/VWcSrxOW6kI/AAAAAAAAA_s/eTLHkl1uVHA/s1600/sageatatop.png" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol" 
    controlattrs: {
        offsetx: 5,
        offsety: 5
    }, //offset of control relative to right/ bottom of window corner 
    anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links
    state: {
        isvisible: false,
        shouldvisible: false
    },
    scrollup: function() {
        if (!this.cssfixedsupport) //if control is positioned using JavaScript 
            this.$control.css({
                opacity: 0
            }) //hide control immediately after clicking it 
        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto)
        if (typeof dest == "string" && jQuery('#' + dest).length == 1) //check element set by string exists 
            dest = jQuery('#' + dest).offset().top
        else
            dest = 0
        this.$body.animate({
            scrollTop: dest
        }, this.setting.scrollduration);
    },
    keepfixed: function() {
        var $window = jQuery(window)
        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
        var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
        this.$control.css({
            left: controlx + 'px',
            top: controly + 'px'
        })
    },
    togglecontrol: function() {
        var scrolltop = jQuery(window).scrollTop()
        if (!this.cssfixedsupport)
            this.keepfixed()
        this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({
                opacity: 1
            }, this.setting.fadeduration[0])
            this.state.isvisible = true
        } else if (this.state.shouldvisible == false && this.state.isvisible) {
            this.$control.stop().animate({
                opacity: 0
            }, this.setting.fadeduration[1])
            this.state.isvisible = false
        }
    },

    init: function() {
        jQuery(document).ready(function($) {
            var mainobj = scrolltotop
            var iebrws = document.all
            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode 
            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body')
            mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + '</div>')
                .css({
                    position: mainobj.cssfixedsupport ? 'fixed' : 'absolute',
                    bottom: mainobj.controlattrs.offsety,
                    right: mainobj.controlattrs.offsetx,
                    opacity: 0,
                    cursor: 'pointer'
                })
                .attr({
                    title: 'Top pagina'
                })
                .click(function() {
                    mainobj.scrollup();
                    return false
                })
                .appendTo('body')
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != '') //loose check for IE6 and below, plus whether control contains any text 
                mainobj.$control.css({
                    width: mainobj.$control.width()
                }) //IE6- seems to require an explicit width on a DIV containing text 
            mainobj.togglecontrol()
            $('a[href="' + mainobj.anchorkeyword + '"]').click(function() {
                mainobj.scrollup()
                return false
            })
            $(window).bind('scroll resize', function(e) {
                mainobj.togglecontrol()
            })
        })
    }
}

/**
 * jQuery.responsiveVideo
 * Version 1.1
 * Copyright (c) 2014 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 01/16/2014
 **/
(function($) {
    $.fn.responsiveVideo = function() {
        // Add CSS to head
        $('head').append('<style type="text/css">.responsive-video-wrapper{width:100%;position:relative;padding:0}.responsive-video-wrapper iframe,.responsive-video-wrapper object,.responsive-video-wrapper embed{position:absolute;top:0;left:0;width:100%;height:100%}</style>');

        // Gather all videos
        var $all_videos = $(this).find('iframe[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"], iframe[src*="dailymotion.com"],iframe[src*="kickstarter.com"][src*="video.html"], object, embed');

        // Cycle through each video and add wrapper div with appropriate aspect ratio if required
        $all_videos.not('object object').each(function() {
            var $video = $(this);

            if ($video.parents('object').length)
                return;

            if (!$video.prop('id'))
                $video.attr('id', 'rvw' + Math.floor(Math.random() * 999999));

            $video
                .wrap('<div class="responsive-video-wrapper" style="padding-top: ' + ($video.attr('height') / $video.attr('width') * 100) + '%" />')
                .removeAttr('height')
                .removeAttr('width');
        });
    };
})(jQuery);
