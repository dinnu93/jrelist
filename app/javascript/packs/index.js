$(document).on('turbolinks:load', function(){
	

	$(".button-add-tag").click(function(){
		episode_id = $(this).attr('id');
		tag = $('input#'+episode_id).val();
		$('input#'+episode_id).val("")
		$.ajax({
  			method: "POST",
  			url: "/episodes/"+episode_id+"/tags",
  			data: { tag: tag},
  			dataType: "json"
		})
			.done(function(data) {
				last_tag = data;
				tag_name = data.tags.at(-1).name
    			
    			$("div."+data.id).append('<span class="badge bg-secondary">'+ tag_name +'</span>');
  			});
		
	});



});
