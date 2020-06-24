class User < ApplicationRecord
  has_many :videos

  validates_presence_of :key
  validates_uniqueness_of :key
end
