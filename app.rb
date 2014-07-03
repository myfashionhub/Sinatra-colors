require 'bundler'
Bundler.require

db = URI.parse('postgres://postgres:postgres@localhost/sinatra_colors_development')

ActiveRecord::Base.establish_connection(
  :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
  :host     => db.host,
  :username => db.user,
  :password => db.password,
  :database => db.path[1..-1],
  :encoding => 'utf8'
)

class Palette < ActiveRecord::Base
  serialize :colors, Array
end

get '/' do
  erb :index
end

get '/random.json' do
  content_type :json
  data = HTTParty.get('http://www.colourlovers.com/api/palettes/random?format=json')
  data.to_json
end

get '/palettes' do
  @palettes = Palette.all
  erb :show
end

post '/palettes' do
  palette = Palette.create(title: params[:title], colors: params[:colors])
  { message: "#{palette.title} has been saved" }.to_json
end







