$(document).on('turbolinks:load', function(){
  var options = {};
  $.ajax({
    method: "GET",
    url: "/tags.json",
    dataType: "json"
  })
  .done(function(tag_data) {
    tags = tag_data;
    tag_names = tags.map(t => t.name);
    console.log(tags);
    console.log(tag_names);
    options = {
      data: tag_names
    };

    $('*[data-behavior="autocomplete"]').easyAutocomplete(options);
  });

  

});