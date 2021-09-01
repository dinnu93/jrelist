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
		return replace_newlines(des[0..200])
	end
	
end
