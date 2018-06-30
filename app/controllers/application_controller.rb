class ApplicationController < ActionController::API

  def render_error(model)
    render json: { errors: model.errors.full_messages.join(", ") }, status: 422
  end 

  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :authenticate_user!, if: proc { request.controller_class.parent == Api }
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:admin, :name, :street_address, :city, :zip, :telephone, :role])
  end
end
