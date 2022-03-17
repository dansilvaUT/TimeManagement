class StaticController < ApplicationController
    def index
        render component: "Home", props: { info: "yo" }
    end
end
