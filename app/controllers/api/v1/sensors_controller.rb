class Api::V1::SensorsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create
    puts params
  end

  def read
  end

  def update
  end

  def delete
  end
end
