class StaticController < ApplicationController
    
    def index
        # render the App.js file in app/components/app
        render component: "App"
    end
end
