class Video < ApplicationRecord
  mount_uploader :file, VideoUploader
  mount_uploader :thumbnail, ImageUploader
  belongs_to :user
end
