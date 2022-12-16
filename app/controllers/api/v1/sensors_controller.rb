class Api::V1::SensorsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    puts params_check
  end

  def read
  end

  def update
  end

  def delete
  end

  def params_check
    params.require(:sensor).permit(:Nodeid, :Battery, :X, :Y, :Z, :Time, :Sent)
  end
end
