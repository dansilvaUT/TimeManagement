module CurrentUserConcern
    extend ActiveSupport::Concern

    included do
        before_action :set_current_user
    end

    def set_current_user
        if session[:user_id]
            @current_user = User.find(session[:user_id])
        end
    end

    private
    
    def current_user
        if @current_user
            render json: { status: 200 }
        else
            render json: { status: 401 }
        end
    end

end