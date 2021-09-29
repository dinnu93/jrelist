class TagsController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
		if (params[:episode_id]).blank?
			@tags = Tag.all
		else
			@episode = Episode.includes(:tags).find(params[:episode_id])
			@tags = @episode.tags
		end
		respond_to do |format|
			format.json { render :_tag}
		end
	end

	def create
		@episode = Episode.includes(:tags).find(params[:episode_id])
		@tags = @episode.tags
		@tag = params[:tag]

		if !(Tag.all.map {|t| t.name}).include?(@tag)
			@new_tag = Tag.create(name: params[:tag])
			@tags << @new_tag
		elsif !(@tags.map {|t| t.name}).include?(@tag)
			@tags << Tag.where(name: @tag).first
		end

		@episode = Episode.includes(:tags).find(params[:episode_id])
		respond_to do |format|
			format.json { render :_episode}
		end
	end

end
