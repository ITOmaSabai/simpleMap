class Map < ApplicationRecord
  has_many :videos, dependent: :destroy
end
