class Admin::RealtorsController < ApplicationController
  def index
    @realtors = Realtor.all
  end

  def create
    @realtor = Realtor.new realtor_params

    respond_to do |format|
      if @realtor.save
        flash[:message] = "Saved successfully."
        format.html { redirect_to admin_realtors_url }
      else
        format.html { render view: :new }
      end
    end
  end

  def new
    @realtor = Realtor.new
  end

  private
  # Paperclip attachment
  # for create and update
  def realtor_params
    params.require(:realtor).permit(:avatar)
  end
end
