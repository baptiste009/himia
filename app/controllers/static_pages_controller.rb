class StaticPagesController < ApplicationController

  def index
  end

  def thank_you
  @name = params[:name]
  @email = params[:email]
  @message = params[:message]
  ActionMailer::Base.mail(:from => @email,
      :to => 'timseithe@googlemail.com',
      :subject => "Neue Nachricht von #{@name}",
      :body => @message).deliver_now
end

end
