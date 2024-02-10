class Api::V1::MapsCOntroller < ApplicationController
  def index
    @maps = Map.all
    render json: @maps
  end

  def show
    @map = Map.includes(:videos).find(params[:id])
    @videos = @map.videos
  end
end