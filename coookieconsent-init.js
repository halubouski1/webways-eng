window.addEventListener('load', function () {

  CookieConsent.run({

    guiOptions: {
      consentModal: {
        layout: 'bar',
        position: 'bottom',
        equalWeightButtons: false,
        flipButtons: false
      }
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {
        enabled: false,
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' }
          ]
        }
      }
    },

    language: {
      default: 'ru',
      translations: {
        ru: {
          consentModal: {
            title: 'We use cookies',
            description: 'We use cookies to ensure the website works properly and to analyze traffic.',
            acceptAllBtn: 'Accept',
            acceptNecessaryBtn: 'Decline',
            footer: '<a href="/privacy_policy.pdf">Privacy Policy</a>'
          }
        }
      }
    }

  });

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  if (CookieConsent.acceptedCategory('analytics')) {
    gtag('js', new Date());
    gtag('config', 'G-EDBSSXJLQ7');
  }

  window.addEventListener('cc:onConsent', function () {
    if (CookieConsent.acceptedCategory('analytics')) {
      gtag('js', new Date());
      gtag('config', 'G-EDBSSXJLQ7');
    }
  });

});