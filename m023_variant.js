(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "bm-m-23";
    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          var items =[];
          for (let index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
         html: function (v) {
                  return typeof v == 'undefined'
                    ? this.value[0].innerHTML
                    : this.each(function (i) {
                        i.innerHTML = v;
                      });
                },
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });
    var helper = _$();
    var bmContent = `<div class="bm-23-wrapper">
    <div class="bm-23-container">
      <div class="bm-23-main">
        <div class="bm-23-top">
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/Homepage_Hero_PLANOLY.gif" alt="bm-23-gif" />
        </div>
        <div class="bm-23-bottom">
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/TikTok_Icon.png" alt="" />
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/Instagram_Icon.png" alt="" />
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/YouTube_Icon.png" alt="" />
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/Pinterest_Icon.png"alt=""/>
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/Twitter_Icon.png" alt="" />
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/Facebook_Icon.png" alt=""/>
          <img src="https://d27c6j8064skg9.cloudfront.net/Codalift/M022+Exit+intent+Pop+Up/LinkedIn_Icon.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  `;
    /* Variation Init */
    function init() {
      helper.log('Log inside from init');
      _$('body').addClass(variation_name)
    }
    function bmAnimation(){
      document.querySelector(".banner-images-wrapper").insertAdjacentHTML("afterend",bmContent);
        setTimeout(function(){
          document.body.classList.add("bm-23-animation-trigger")
        },700)
    }
    function bannerDes() {
      _$("body").addClass("bm-m23");
      if(window.innerWidth > 390){
        _$("h1.banner-heading").html("The Social Tool You’ll <span class='bm-m23-animation'>Want to Use <div></div></span>  Every Day");
      }
      else {
        _$("h1.banner-heading").html("The Social Tool You’ll <span class='bm-m23-animation bm-one'>Want <div></div></span> <span class='bm-m23-animation bm-two'>to Use <div></div></span> Every Day");
      }
     
      
     setTimeout(function(){
      _$("body").addClass("bm-m23-animation-added"); 
     },1300);
    }
    /* Initialise variation */
    helper.waitForElement(".banner-description", bannerDes, 50, 15000);
    helper.waitForElement(".banner-images-wrapper",bmAnimation,50,30000);
    /* Initialise variation */
    helper.waitForElement("body", init, 50, 5000);
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
