;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M673.73995 163.499557c38.391443-43.334341 64.321663-103.544921 57.267236-163.499557-55.331667 2.079536-122.324735 34.23237-162.059878 77.518722-35.592067 38.407439-66.705132 99.593801-58.386986 158.460681C572.306558 240.458404 635.300517 206.753916 673.73995 163.499557zM812.269073 544.118721c-1.375693-129.715088 113.638671-191.909225 118.805519-195.044526-64.641592-87.964394-165.355144-100.041702-201.171161-101.417395-85.644911-8.094196-167.178737 46.949535-210.657047 46.949535-43.366334 0-110.471377-45.765799-181.495546-44.59806-93.419178 1.295711-179.511988 50.56473-227.597271 128.419377-97.018376 156.653083-24.826466 388.825334 69.728458 515.980993 46.229696 62.162145 101.337413 132.08256 173.641297 129.523131 69.696465-2.55943 96.0106-41.942651 180.231828-41.942651 84.285214 0 107.911947 41.942651 181.623518 40.64694 74.943296-1.263718 122.452706-63.329884 168.314484-125.715979 53.07617-72.207906 74.911303-142.144317 76.223011-145.663533C958.236538 750.50472 813.772738 698.980204 812.269073 544.118721z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M118.279 336.402h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '<path d="M118.279 647.52h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M207.622737 1024h608.754506c32.33363 0 63.353267-10.418093 86.395085-29.776036S939.04794 949.477786 939.04794 922.28281V295.648604c0-21.540111-21.98593-38.927063-47.608807-38.927063H774.798728V224.716409a193.391714 193.391714 0 0 0-19.991475-86.348157 225.256061 225.256061 0 0 0-55.539698-71.096444C649.992792 24.754726 584.410428 0.962055 514.346408 0.469307a311.862324 311.862324 0 0 0-52.51282 4.035838c-59.15318 9.667239-113.191171 36.627574-152.21209 75.953528a215.35418 215.35418 0 0 0-44.581929 65.160008A188.370381 188.370381 0 0 0 249.201252 222.205742v34.515799H125.380811C103.723379 256.721541 84.952041 271.410113 84.952041 289.571383v632.711427c0 27.171512 13.257258 52.559748 36.252147 71.91769s54.084919 29.7995 86.418549 29.7995zM307.861685 222.205742a146.721474 146.721474 0 0 1 16.424921-66.380145 173.939915 173.939915 0 0 1 43.901468-54.366489c38.481244-32.380559 89.562749-50.21333 143.577274-50.213331s105.049103 17.832772 143.530347 50.213331a174.878482 174.878482 0 0 1 44.276895 54.366489 146.721474 146.721474 0 0 1 16.565706 66.40361v34.492334H307.861685V222.205742z m-161.902795 86.13698h103.242362v76.070849c0 14.477395 12.107513 25.388235 29.330216 25.388235S307.861685 398.890965 307.861685 384.413571v-76.070849h408.276611v76.070849c0 14.477395 12.107513 25.388235 29.330216 25.388235S774.798728 398.890965 774.798728 384.413571v-76.070849h103.242362v613.940088c0 28.368185-27.969294 52.442427-61.663847 52.442427H207.622737c-33.694553 0-61.663847-24.050777-61.663847-52.442427V308.342722z" fill="#8F97A5" ></path>' +
    '' +
    '<path d="M121.133795 994.341285c23.11221 19.451799 53.967598 29.658715 86.488942 29.658715h608.754506c32.450951 0 63.353267-10.230379 86.465478-29.658715S939.04794 949.618571 939.04794 922.28281V295.648604c0-21.798217-21.727824-38.927063-47.608807-38.927063H777.145146V224.716409a194.916886 194.916886 0 0 0-20.976971-86.559335 227.156659 227.156659 0 0 0-56.126302-71.237229c-49.274763-42.587474-115.279482-66.356681-185.366967-66.919822H511.99999a312.073502 312.073502 0 0 0-50.166402 4.035838c-59.247037 9.690703-113.425813 36.697967-152.517125 76.094313a219.155376 219.155376 0 0 0-45.637816 65.300794A189.872088 189.872088 0 0 0 246.854835 222.205742v34.515799H125.380811c-21.915538 0-40.42877 14.430466-40.42877 32.849842v632.711427c0 27.335762 13.069544 52.606676 36.181754 72.058475zM84.952041 289.571383c0-18.372448 18.607089-32.849842 40.42877-32.849842H249.201252V222.205742c0-107.700554 91.862238-198.108013 213.218941-217.935239A301.983907 301.983907 0 0 1 514.346408 0.234665c145.196303 1.149744 260.452321 102.303795 260.45232 224.481744v32.005132h116.640405c25.81059 0 47.608807 17.222703 47.608807 38.927063v626.634206c0 56.314015-55.703947 101.71719-122.670697 101.71719H207.622737C140.655987 1024 84.952041 978.643753 84.952041 922.28281V289.571383z" fill="#8F97A5" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872.834 819.031l-0.021-0.020v0.020h0.021c6.611 7.724 9.929 16.273 9.929 25.645 0 10.485-3.728 19.446-11.186 26.902-6.683 6.903-16.034 11.188-26.387 11.188-0.189 0-0.376-0.002-0.564-0.006-4.4 0-8.664-0.7-12.804-2.079-6.214-2.076-11.451-5.687-15.438-10.387l0.112 0.893-204.607-206.068c-49.128 34.771-104.085 52.135-164.831 52.135-6.077 0-12.277-0.268-18.622-0.803-12.503-1.101-23.947-3.154-35.015-6.127-34.433-2.314-79.83-21.736-117.236-50.923-22.673-13.314-53.59-46.129-76.785-86.976-18.876-31.629-31.618-69.022-35.597-108.993 2.099 24.518-2.324-3.171-2.664-31.839 0.219 9.819 0.022 3.726 0.022-2.411 0-17.23 1.554-34.097 4.529-50.469 7.223-45.086 25.601-86.609 52.198-121.533 13.217-24.748 55.417-62.558 105.78-85.633-26.24 10.779 0.95-4.114 31.044-14.598 27.503-9.971 59.247-15.738 92.338-15.738 0.003 0 0.006 0 0.007 0 13.266 0 25.953 0.824 38.128 2.493 32.566 4.409 63.753 14.337 93.58 29.785 48.239 25.143 87.102 62.529 113.335 108.106-9.518-21.469 10.215 10.521 23.749 47.495 13.533 36.974 19.486 74.485 17.818 112.552-2.204 63.464-24.018 120.564-65.441 171.319l205.41 206.068h-0.803zM690.599 440.818c0.21-3.697 0.33-8.022 0.33-12.373 0-31.328-6.205-61.208-17.456-88.475-13.231-34.958-34.583-65.86-61.735-90.484 21.143 20.301 6.93 4.997-9.343-8.537-30.272-25.39-67.305-43.731-107.998-51.99 25.734 4.367-9.068-3.862-45.794-3.862-9.87 0-19.603 0.595-29.162 1.749-1.639-0.081-4.336 0.248-6.931 0.839l-4.358 0.695c-44.686 7.108-84.078 25.889-116.086 53.095-23.983 14.957-55.634 55.983-72.075 104.063-2.047-6.829-13.232 30.701-15.189 72.084-1.936 41.383 5.645 79.738 22.782 115.043 20.889 45.873 54.812 82.768 97.015 106.791-0.152 5.549 43.151 25.628 90.828 31.684 1.539 3.059 37.155 4.997 73.039-1.081 30.977-5.587 58.609-16.326 83.316-31.388 8.622-1.65 39.887-25.597 64.428-55.302-9.505 15.858 17.567-17.681 35.063-56.467-25.001 44.533-14.64 28.672-6.36 11.575v0.021c15.865-30.484 25.376-66.489 25.885-104.668z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)