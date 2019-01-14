class Api::V1::DanosReportController < ApplicationController
	before_action :validate_token_user
	before_action :set_token_siniestro

	namespece :api do 
		namespece :V1 do
			scope :report_dano do
				resurces :opercione, only: [:create, :update, :index, :show]
			end
		end
	end