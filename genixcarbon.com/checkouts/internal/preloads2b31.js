
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DgHYkVzi.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CWiPlPFL.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.Z1r1g5up.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.BA6bfolk.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.CbJ7J6zw.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.QkC4E0-Z.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.2gJntO2o.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.C2hXmmWr.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.Dbyba086.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.DXLPL7nL.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.C8zlCfAE.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.BeEDl8uI.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.5Efk8vej.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BWJ0SATI.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.D55QYihW.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.hCmun5ub.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.BQfsPnm5.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.DbJvMgX2.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.Bw66rvCQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BzU2xGBb.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/dm_sans/dmsans_n4.ec80bd4dd7e1a334c969c265873491ae56018d72.woff2?h1=Z2VuaXhjYXJib24uY29t&hmac=39659a9010d42ec5d97b2f7ef7e2cfc62a4f55e5a18119d93342face7d3447cd","https://fonts.shopifycdn.com/dm_sans/dmsans_n7.97e21d81502002291ea1de8aefb79170c6946ce5.woff2?h1=Z2VuaXhjYXJib24uY29t&hmac=4f623856390aae0193a2e74909b6e7df6d41b5a06ba38a475834624ab77d2641"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0665/1854/8537/files/Shopify-Logo_a7eacab2-0013-4e59-891f-39ef1ff37639_x320.png?v=1721663387"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  