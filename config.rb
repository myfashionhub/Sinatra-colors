db_url = ENV['DATABASE_URL'] || 'postgres://postgres:postgres@localhost/sinatra_colors_development'
db = URI.parse(db_url)

ActiveRecord::Base.establish_connection(
  :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
  :host     => db.host,
  :username => db.user,
  :password => db.password,
  :database => db.path[1..-1],
  :encoding => 'utf8'
)
