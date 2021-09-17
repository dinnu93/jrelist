class EpisodesController < ApplicationController
  before_action :set_episode, only: %i[ show edit update destroy ]

  # GET /episodes or /episodes.json
  def index
    q = params[:q]
    if q.blank?
      @q = ""
      @episodes = Episode.paginate(page: params[:page], per_page: 15)
    elsif q.match(/#[0-9]+/)
      @q = q
      @episode = Episode.where("MATCH (name) AGAINST ('#{q}' IN NATURAL LANGUAGE MODE)")[0]
      if @episode.blank?
        render file: "#{Rails.root}/public/404", status: :not_found 
      else
        redirect_to "/episodes/#{@episode.id}"
      end
    else
      @q = q
      if params[:search].blank?
        @episodes = Episode.where("MATCH (name, description) AGAINST ('#{q}' IN NATURAL LANGUAGE MODE)").paginate(page: params[:page], per_page: 15)
      elsif params[:search] == "name"
        @episodes = Episode.where("MATCH (name) AGAINST ('#{q}' IN NATURAL LANGUAGE MODE)").paginate(page: params[:page], per_page: 15)
      end
    end
  end

  # GET /episodes/1 or /episodes/1.json
  def show
    q = params[:q]
    if q.blank?
      @q = Episode.find(params[:id]).name
    elsif q.match(/#[0-9]+/)
      @q = q
      @episode = Episode.where("MATCH (name, description) AGAINST ('#{q}' IN NATURAL LANGUAGE MODE)")[0]
      
      if @episode.blank?
        render file: "#{Rails.root}/public/404", status: :not_found 
      else
        redirect_to "/episodes/#{@episode.id}"
      end
    else
      @q = q
      redirect_to "/?q=#{@q}"
    end
  end

  # GET /episodes/new
  def new
    @episode = Episode.new
  end

  # GET /episodes/1/edit
  def edit
  end

  # POST /episodes or /episodes.json
  def create
    @episode = Episode.new(episode_params)

    respond_to do |format|
      if @episode.save
        format.html { redirect_to @episode, notice: "Episode was successfully created." }
        format.json { render :show, status: :created, location: @episode }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @episode.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /episodes/1 or /episodes/1.json
  def update
    respond_to do |format|
      if @episode.update(episode_params)
        format.html { redirect_to @episode, notice: "Episode was successfully updated." }
        format.json { render :show, status: :ok, location: @episode }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @episode.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /episodes/1 or /episodes/1.json
  def destroy
    @episode.destroy
    respond_to do |format|
      format.html { redirect_to episodes_url, notice: "Episode was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def privacy_policy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_episode
      @episode = Episode.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def episode_params
      params.require(:episode).permit(:q, :search, :audio_preview_url, :description, :duration_ms, :web_url, :id, :image_url, :name, :release_date, :uri)
    end
end
