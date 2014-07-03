Sinatra Colors
==============

A Sinatra app for discovering and collecting color palettes, integrated with ActiveRecord and PostgreSQL. (View live demo)[sinatra-colors.herokuapp.com]

![screenshot-colors](https://cloud.githubusercontent.com/assets/7177481/3475419/a62bb522-02f0-11e4-9e9e-413977c4e5b5.png)

### Dependencies
Colour Lovers API: http://www.colourlovers.com/api/

```
gem 'sinatra'
gem 'sinatra-reloader'
gem 'httparty'
gem "pg"
gem "activerecord"
gem "sinatra-activerecord"
```

### Install
After cloning the project directory, create a database for the project in psql and replace the name:

```
db_url = ENV['DATABASE_URL'] || 'postgres://[username]:[password]@localhost/[db name]'
```

Deploying to heroku:
```
heroku addons:add heroku-postgresql
rake db:migrate
```
