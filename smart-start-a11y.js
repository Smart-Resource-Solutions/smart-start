/* ============================================================
   SMART Start accessibility helpers (no visual change)

   1. Gives every form field an accessible name. Several tools show a
      visible label next to a field without linking the two, so screen
      readers announced an unnamed box. This copies the visible label
      text onto the field as aria-label. Fields that tools add later
      (extra rows, outcomes, criteria) are handled as they appear.
   2. Makes clickable step tabs work from the keyboard (Tab to reach,
      Enter or Space to choose).
   ============================================================ */
(function(){
  'use strict';

  function text(el){ return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; }

  function nameFor(field){
    var box = field.closest('.ss-field, .field-group, .check-item, .ss-card, .task-cell, .task-row, tr');
    var label = box && box.querySelector('label, .ss-box-title');
    var t = text(label);
    // Numbered rows ("1.", "2.") get the nearest heading for context.
    if(/^\d+\.?$/.test(t)){
      var card = field.closest('.ss-card');
      var heading = card && card.querySelector('h2, h3, h4, .ss-box-title');
      t = (text(heading) || 'Item') + ' ' + t.replace('.', '');
    }
    if(!t && field.classList.contains('action-select')) t = 'What to do with this task';
    return t;
  }

  function labelFields(root){
    (root || document).querySelectorAll('input, select, textarea').forEach(function(f){
      if(f.type === 'hidden' || f.getAttribute('aria-label') || f.getAttribute('aria-labelledby')) return;
      if(f.id && document.querySelector('label[for="' + f.id + '"]')) return;
      if(f.closest('label')) return;
      var n = nameFor(f);
      if(n) f.setAttribute('aria-label', n);
    });
  }

  function keyboardTabs(root){
    (root || document).querySelectorAll('.step-tab[onclick]').forEach(function(tab){
      if(tab.getAttribute('role')) return;
      tab.setAttribute('role', 'button');
      tab.setAttribute('tabindex', '0');
      tab.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); tab.click(); }
      });
    });
  }

  function run(){
    labelFields(); keyboardTabs();
    new MutationObserver(function(){ labelFields(); keyboardTabs(); })
      .observe(document.body, { childList: true, subtree: true });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
