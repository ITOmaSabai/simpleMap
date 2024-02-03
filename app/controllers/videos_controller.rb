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

  def search
    keyword = params[:keyword]
    youtube_service = YoutubeService.new(api_key: ENV['GOOGLE_MAP_API_KEY'])
    @videos = youtube_service.search_videos(keyword, lat, lng)
  rescue Google::Apis::Error => e
    # APIからのエラーを適切に処理する
    flash[:alert] = '動画の検索中にエラーが発生しました。'
    redirect_to root_path
  end

  private

  def video_params
    params.require(:video).permit(:youtube_video_id, :thumbnail_url)
  end
end
