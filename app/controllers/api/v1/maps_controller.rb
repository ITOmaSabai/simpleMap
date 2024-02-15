class Api::V1::MapsCOntroller < ApplicationController
  def index
    @maps = Map.where.not(lat: nil, lng: nil)
    render json: @maps
  end

  def show
    @map = Map.includes(:videos).find(params[:id])
    @videos = @map.videos
  end
end