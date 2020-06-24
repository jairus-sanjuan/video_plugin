class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :key, :secret

  has_many :videos
end
