# frozen_string_literal: true

class Usuarios::SessionsController < Devise::SessionsController

  before_action :get_c_user, only: [:destroy]
  after_action :delete_token, only: [:destroy]

  protected
  def get_c_user
    @c_user = current_usuario
  end

  def delete_token
    unless usuario_signed_in?
      unless @c_user.token.nil?
        @c_user.token.delete
        @c_user = nil
      end
    end
  end
end
