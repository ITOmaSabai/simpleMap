class MapsController < ApplicationController
  def index
    @maps = Map.all
  end

  def new
    @map = Map.new
  end

  def create
    @map = Map.new(map_params)
    
    if @map.save
      # @videos = ::SearchService.call(keyword: params[:keyword], lat: params[:lat], lng: params[:lng])
      videos_data = SearchService.call(
        keyword: params[:map][:keyword],
        lat: @map.lat,
        lng: @map.lng,
        neighborhood: params[:map][:country]
      )

      videos_data.items.each do |video_data|
        @map.videos.create(
          youtube_video_id: video_data.id.video_id,
          thumbnail_url: video_data.snippet.thumbnails.high.url
        )
      end

      redirect_to maps_path, notice: "Map was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @map = Map.includes(:videos).find(params[:id])
    @videos = @map.videos
  end

  private

  def map_params
    params.require(:map).permit(:lat, :lng, :text)
  end
end
