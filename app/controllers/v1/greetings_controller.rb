class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: { greeting: @greetings.sample.message }.to_json
  end
end
