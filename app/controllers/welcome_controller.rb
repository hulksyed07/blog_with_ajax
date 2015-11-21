class WelcomeController < ApplicationController
  def index
  	@product= Product.new
  	@article= Article.new
  end
end
