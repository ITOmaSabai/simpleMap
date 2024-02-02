require 'google/apis/youtube_v3'

class YoutubeService
  def initialize(api_key:)
    @youtube = Google::Apis::YoutubeV3::YouTubeService.new
    @youtube.key = api_key
  end

  def search_videos(keyword, max_results = 25)
    params = {
      q: keyword,
      type: 'video',
      max_results: max_results,
      part: 'id,snippet',
      fields: 'items(id,snippet(title,channel_title,thumbnails))'
    }
    @youtube.list_searches(params)
  end
end
