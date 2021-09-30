$(document).on('turbolinks:load', function(){
  var options = {
    url: "/tags.json",
    getValue: "name",
    list: {
      match: {
        enabled: true
      }
    },

    theme: "square"
  };
  
  $('*[data-behavior="autocomplete"]').easyAutocomplete(options);

});