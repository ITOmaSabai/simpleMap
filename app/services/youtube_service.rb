require 'google/apis/youtube_v3'

class YoutubeService
  def initialize(api_key:)
    @youtube = Google::Apis::YoutubeV3::YouTubeService.new
    @youtube.key = api_key
  end

  def search_videos(keyword, lat, lng)
    @youtube.list_searches(
        'snippet',
        q: keyword,
        location: "#{lat}, #{lng}",
        max_results: '10',
        order: 'viewCount',
        type: 'video'
        # fields: 'items(id,snippet(title,channel_title,thumbnails))'
    )
    # ログにparamsの内容を出力
    Rails.logger.info "YouTube API Search Params: #{params.inspect}"

  end
end
