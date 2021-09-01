class Episode < ApplicationRecord
	self.primary_key = :id
	searchkick
end

