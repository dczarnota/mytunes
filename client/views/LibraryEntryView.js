// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      $('tr').css('background-color', 'white');
      this.model.enqueue();
      this.$el.css('background-color', 'yellow');
      // this.model.highlight();
    },
    'click button': function(event) {
        event.stopPropagation();
        console.log(this);
        this.model.enqueue();

        // debugger;
        // songQueueLibrary.set({song: this.model});
      }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes)).append('<button class="addToQueue">+</button>');
  }

});
