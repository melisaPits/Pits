class Api::V1::DanosReportController < ApplicationController
	before_action :validate_token_user
	before_action :set_token_siniestro

	
end