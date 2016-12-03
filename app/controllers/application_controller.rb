class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
      @today = Date.today
      @early_bird = Date.new(2016,12,31)
      render :template => 'index'
  end
end
