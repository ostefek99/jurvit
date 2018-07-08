window.onload = function() {
  if (Enabler.isInitialized()) {
    AdUnit.adVisible();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, AdUnit.adVisible);
  }
};

var AdUnit = (function() {
  return {
    adVisible: function() {
      var json, title, article, ord;
      json = '//d885pvmm0z6oe.cloudfront.net/feeds/json/89360_accenture/89360_accenture_feed.js';
      AdUnit.fetchJSON(json);
    },
    fetchJSON: function(json){
      $.getJSON(json, function(data) {
        AdUnit.initCIU(data);
      });
    },
    initCIU: function(data) {
      //Shuffle post array
      var obj = data.posts;
      obj = _.slice(obj, [start = 0], [end = 9]);
      // obj = _.shuffle(obj);

      //Tracking ID json
      var line_items_url = 'js/line_items.js';
      var line_items_obj;

      //Fetch AdOps Line Items
      $.ajax({
        url: line_items_url,
        async: true,
        dataType: 'json',
        success: function(data) {
          line_items_obj = data;
          AdUnit.renderCIU(obj, line_items_obj);
        }
      });
    },
    renderCIU: function(obj, line_items_obj) {

      //Number of articles
      var articleLength = 10;

      //Check object length if it's less than article length then article length becomes object length
      var objectLength = obj.length;
      if (objectLength < articleLength) {
        articleLength = objectLength;
      }

      // Get fetch index of line item in line item array.
      var getLineitem = Enabler.getDartAdId();
      var fetchIndex = _.findLastIndex(line_items_obj, function(o) {
        return o.line_item_id == getLineitem;
      });

      //Lets check if we get a match, if we don't match we set source match as banner, else get the source match from the array
      if (fetchIndex === -1) {
        var utm_source_match = 'banner';
      } else {
        utm_source_match = line_items_obj[fetchIndex].utm_source;

      }

      // CAMPAIGN TRACKING INFO
      var campaign_opts = {
        op1: 89360,
        mod: getLineitem,
        utm_source: utm_source_match,
        utm_medium: "WSJ",
        utm_content: "970x250",
      }
      utm_campaign = campaign_opts.op1 + "_" + campaign_opts.mod;
      var trackingInfo = "/?mod=" + campaign_opts.utm_source + "&utm_source=" + campaign_opts.utm_source + "&utm_medium=" + campaign_opts.utm_medium + "&utm_content=" + campaign_opts.utm_content + "&utm_campaign=" + utm_campaign;
      var html = '';

      //Title and Snipper Max Lengths Options
      var opts = {
        max_title_length: 50,
        max_snippet_length: 90
      };

      //Loop through the articles
      for (var i = 0; i < articleLength; i++) {
        var title = obj[i].title;
        var excerpt = obj[i].excerpt;
        var permalink = obj[i].permalink;
        var article_thumbnail = obj[i].article_thumbnail;
        var categories = obj[i].categories;
        var categories = obj[i].categories;
        var isVideo = _.indexOf(obj[i].categories,"Video") === 1 ? true : false;

        //Lets set a CTA depending if the post category is set to Video
        if(isVideo){
          var the_cta = "Watch Video";
        } else {
              the_cta = "Read Article";
        }

        //Check if there is a thumbnail, if not use a FPO image.
        if (article_thumbnail) {
          article_thumbnail = article_thumbnail.replace('http:', document.location.protocol);
        } else {
          article_thumbnail = 'img/600x400.png';
        }

        //Trim the snippet to the max allowed snippet length and then respect full words.
        var snippet = obj[i].excerpt.substring(0, opts.max_snippet_length); // takes first 100 characters.
        snippet = AdUnit.respectFullWordsSnippet(snippet);

        //Trim title length to max length if it's greater than the max length and not the first item in the feed.
        if (title.length > opts.max_title_length) {
          title = title.substring(0, opts.max_title_length);
          title = AdUnit.respectFullWordsTitle(title, opts.max_title_length);
        }
        //===========================================
        permalink = permalink + trackingInfo;
        //===========================================
        html += '<div class="swiper-slide" data-href="' + permalink + '" data-slot="slot' + (i + 1) + '">';
        html += '<img class="image-slot" src="' + article_thumbnail + '" width="310" height="207" style="display:block">';
        html += '<div class="article-title">' + title + '<span class="article-snippet">'+excerpt+'</span><span class="read-more">'+the_cta+'</span>' + '</div>';
        html += '</div>';
      }
      $('.swiper-wrapper').append(html);
      AdUnit.initSwiper();
      AdUnit.events();
    },
    initSwiper: function() {
      //Initialize Swiper
      var count = 1;
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        grabCursor: true,
        spaceBetween: 10,
        on: {
          init: function(swiper) {
            $('#loader').fadeOut(200);
          },
          slideChange: function(){
            if(count===6){
              mySwiper.autoplay.stop();
            }
            count = count + 1;
          }
        }
      });
    },
    respectFullWordsSnippet: function(snippet) {
      return snippet.substr(0, Math.min(snippet.length, snippet.lastIndexOf(" ")));
    },
    respectFullWordsTitle: function(title, max_title_length) {
      return title.substr(0, Math.min(max_title_length, title.lastIndexOf(" "))) + "...";
    },
    set_enabler_events: function(){
      //Sets Native CIU events in DFP
      Enabler.exit("backup_image");
      Enabler.counter("slot1", true);
      Enabler.counter("slot2", true);
      Enabler.counter("slot3", true);
      Enabler.counter("slot4", true);
      Enabler.counter("slot5", true);
      Enabler.counter("slot6", true);
      Enabler.counter("slot7", true);
      Enabler.counter("slot8", true);
      Enabler.counter("slot9", true);
      Enabler.counter("slot10", true);
    }
  }
}());

//Event: On slide click
$(".container").on('click',".swiper-slide",function() {
  var slot = $(this).data("slot");
  var permalink = $(this).data("href");
  Enabler.counter(slot, true);
  window.open(permalink, "_blank");
});

//Event: Previous Arrow
$(".container").on("click",".swiper-button-prev", function() {
  Enabler.counter("left arrow", true);
});

//Event: Next Arrow
$(".container").on("click",".swiper-button-next", function() {
  Enabler.counter("right arrow", true);
});

//Event: Breadcrumb Click
$(".container").on('click', ".swiper-pagination-bullet", function() {
  Enabler.counter("breadcrumb", true);
});
