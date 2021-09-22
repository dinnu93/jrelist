class Episode < ApplicationRecord
	self.primary_key = :id
	has_and_belongs_to_many :tags
end

