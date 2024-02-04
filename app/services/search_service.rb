class SearchService
  def self.call(keyword:, lat:, lng:, neighborhood:)
    youtube_service = YoutubeService.new(api_key: ENV['GOOGLE_MAP_API_KEY'])
    @videos = youtube_service.search_videos(keyword, lat, lng, neighborhood)
  rescue Google::Apis::Error => e
    # APIからのエラーを適切に処理する
    flash[:alert] = '動画の検索中にエラーが発生しました。'
    redirect_to root_path
  end
end