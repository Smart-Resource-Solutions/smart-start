/* ============================================================
   SMART Start analytics (Google Analytics 4), PREPARED BUT INACTIVE

   Nothing in this file loads Google Analytics, sets cookies or sends
   any data until BOTH of these are true:

     1. GA_MEASUREMENT_ID below holds the real GA4 Measurement ID
        (it starts with "G-"). LAUNCH CONFIG: paste it in when supplied.
     2. hasAnalyticsConsent() returns true. There is no consent banner
        on SMART Start yet. LAUNCH CONFIG: connect this function to the
        consent tool once one is in place. Until then it returns false,
        so analytics stays off.

   Privacy rules built into ssTrack():
     - Only the event names in ALLOWED_EVENTS can be sent.
     - Only the parameter names in ALLOWED_PARAMS can be sent
       (resource_name, area_name, shortcut_name), and only as short
       fixed labels taken from the page, never from anything a visitor
       has typed or chosen in a questionnaire or tool.
     - Questionnaire answers, results and tool entries are never passed
       to this file.
   ============================================================ */
(function(){
  'use strict';

  var GA_MEASUREMENT_ID = ''; // LAUNCH CONFIG: real GA4 ID, e.g. starts with "G-"

  function hasAnalyticsConsent(){
    // LAUNCH CONFIG: return true only when the visitor has accepted
    // analytics cookies through the consent tool.
    return false;
  }

  var ALLOWED_EVENTS = [
    'questionnaire_start', 'questionnaire_complete', 'shortcut_click',
    'browse_area_click', 'resource_open', 'talk_with_us_click', 'booking_click'
  ];
  var ALLOWED_PARAMS = ['resource_name', 'area_name', 'shortcut_name'];

  var loaded = false;
  function active(){
    return /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && hasAnalyticsConsent();
  }
  function load(){
    if(loaded || !active()) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  // Safe to call anywhere: does nothing while analytics is inactive.
  window.ssTrack = function(eventName, params){
    try {
      if(ALLOWED_EVENTS.indexOf(eventName) === -1 || !active()) return;
      load();
      var clean = {};
      if(params){
        ALLOWED_PARAMS.forEach(function(k){
          if(typeof params[k] === 'string') clean[k] = params[k].slice(0, 80);
        });
      }
      window.gtag('event', eventName, clean);
    } catch(e){ /* analytics must never break the page */ }
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
