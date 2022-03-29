class SessionsController < ApplicationController
    def new
        render component: "Login", props: { info: "yo" }
    end
end
