class VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    
    if @video.save
      redirect_to videos_path, notice: "video was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:youtube_video_id, :thumbnail_url)
  end
end
