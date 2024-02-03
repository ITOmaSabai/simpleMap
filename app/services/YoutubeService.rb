require 'google/apis/youtube_v3'

class YoutubeService
  def initialize(api_key:)
    @youtube = Google::Apis::YoutubeV3::YouTubeService.new
    @youtube.key = api_key
  end

  def search_videos(keyword, max_results = 10, lat, lng)
    params = {
      q: keyword,
      type: 'video',
      location: "#{lat}, #{lng}",
      locationRadius: '10km',
      max_results: max_results,
      order: 'viewCount',
      safeSearch: 'moderate',
      type: 'video',
      part: 'id,snippet',
      # fields: 'items(id,snippet(title,channel_title,thumbnails))'
    }
    @youtube.list_searches(params)
  end
end
