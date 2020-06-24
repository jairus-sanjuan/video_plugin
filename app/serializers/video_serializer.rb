class VideoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :file, :thumbnail, :user_id
end
