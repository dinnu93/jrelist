module EpisodesHelper
	def date_converter(date)
		d_list = date.split("-").map {|i| i.to_i}
		d = Date.new(d_list[0],d_list[1],d_list[2])
		return d.strftime('%d %b %Y')
	end

	def minute_converter(ms)
		return (ms/(60 * 1000)).to_i
	end

	def replace_newlines(s)
		return s.gsub("\n","<br>")
	end

	def short_description(des)
		html_tag = des.index("<")
		if !html_tag.nil? && html_tag <= 200
			html_tag_index = html_tag - 1
			short_des = des[0..html_tag_index]
		else
			short_des = des[0..200]
		end
		return replace_newlines(short_des)
	end
	
end
