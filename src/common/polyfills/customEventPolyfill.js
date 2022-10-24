/**
 * This polyfill is to address problems in IE9, 10, and 11 related to the following call in
 * react-use's useLocation():
 *
 *    const event = new Event(method.toLowerCase());
 *
 * This is because those versions of IEs don't support CustomEvent() constructor. For more
 * information, please see the following resources:
 *
 *  1. https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 *  2. https://github.com/streamich/react-use/issues/73
 */
// eslint-disable-next-line consistent-return,func-names
(function () {
  if (typeof window.Event === "function") {
    return false;
  } // If not IE

  function CustomEvent(event, params) {
    // eslint-disable-next-line no-param-reassign
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined,
    };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.Event = CustomEvent;
})();
