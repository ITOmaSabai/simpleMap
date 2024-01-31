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
      redirect_to maps_path, notice: "Map was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def map_params
    params.require(:map).permit(:lat, :lng, :text)
  end
end
