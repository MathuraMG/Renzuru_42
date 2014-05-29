require "rubygems"
require "sinatra"

get "/" do
	erb :HomePage
end

get "/Home" do
	erb :Home
end

get "/About" do
	erb :AboutMe
end

get "/Charcoal" do
	erb :Charcoal
end

get "/Pencil" do
	erb :Pencil
end

get "/Pastels" do
	erb :Pastels
end

get "/Pen" do
	erb :Pen
end

get "/Other" do
	erb :Other
end

