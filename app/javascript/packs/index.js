$(document).on('turbolinks:load', function(){
	

	$(".button-add-tag").click(function(){
		episode_id = $(this).attr('id');
		tag = $('input#'+episode_id).val();
		
		if (tag !== "") {
			$.ajax({
				method: "POST",
				url: "/episodes/"+episode_id+"/tags",
				data: { tag: tag},
				dataType: "json"
			})
			.done(function(data) {
				last_tag = data;
				tag = data.tags.at(-1)

				$("div."+data.id).append('<span class="badge bg-secondary"><a href="/tags/'+tag.id+'/episodes" class="tag-link">'+ tag.name +'</a></span>');
			});
		}

  		$('input#'+episode_id).val("");
		
	});



});
