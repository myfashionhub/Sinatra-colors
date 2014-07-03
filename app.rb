require 'bundler'
Bundler.require

require './config.rb'

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







