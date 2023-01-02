class Api::V1::SensorsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create
  incoming = Accele.create!(params_check)
  # puts params_check
  if incoming
    render json: true
  else 
    render json: false
  end
    
  end

  def read
    @all_data = Accele.all
    render json: @all_data
  end

  def update
  end

  def delete
  end

  def params_check
  params.require(:sensor).permit(:Nodeid, :Battery, :X, :Y, :Z, :Time, :Sent)
  end
end
