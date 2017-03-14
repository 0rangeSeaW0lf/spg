class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
      @end_registration = DateTime.new(2017,03,18,00,00,00)
      @today = Time.now
      @early_bird = DateTime.new(2016,12,31,00,00,00)
      render :template => 'index'
  end
end
