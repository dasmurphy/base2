
// NOT CURRENTLY USED

var UIEvent = Event.extend({
  "@!(document.createEvent)": {
    initUIEvent: function(event, type, bubbles, cancelable, view, detail) {
      this.base(event, type, bubbles, cancelable);
      event.view = view;
      event.detail = detail;
    }
  }
});
