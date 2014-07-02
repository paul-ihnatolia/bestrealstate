class Admin::RealtorsController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @realtors = Realtor.all
  end

  def create
    @realtor = Realtor.new realtor_params

    respond_to do |format|
      if @realtor.save
        puts '-------testtttttttttttttt'
        puts testimonials_params
        testimonials_params.each do |num, body|
          puts '---------text-----------'

          @realtor.testimonials.create(text: body['text'], name: body['name'], admin_id: current_user.id)
        end

        flash[:message] = "Saved successfully."
        format.html { redirect_to admin_realtors_url }
      else
        format.html { render view: :new }
      end
    end
  end

  def edit
  end

  def new
    @realtor = Realtor.new
    @realtor.testimonials = [Testimonial.new]
  end

  def add_testimonial
    realtor = Realtor.find_by_id(params[:realtor_id])
    testimonial = realtor.testimonials.create(text: params[:text], name: params[:name], admin_id: current_user.id)
    render partial: 'testimonial_item', locals: {testimonial: testimonial}
  end

  def edit_testimonial
    testimonial = Testimonial.find_by_id(params[:testimonial_id])
    testimonial.update_attributes(text: params[:text], name: params[:name])
    render json: 'Ok'
  end

  def delete_testimonial
    testimonial = Testimonial.find_by_id(params[:testimonial_id])
    testimonial.destroy
    render json: 'Deleted'
  end

  def show
  end

  def search_by_params
    realtors={}
    param = params[:param]
    case params[:filter]
      when 'email'
        realtors = Realtor.where("email like ?", "%#{param}%")
      when 'city'
        realtors = Realtor.where("city like ?", "%#{param}%")
      when 'company'
        realtors = Realtor.where("company like ?", "%#{param}%")
      when 'name'
        realtors = Realtor.where("firstname like ? or lastname like ? ", "%#{param}%", "%#{param}%")
      when ''
        realtors = Realtor.all
    end
    render partial: 'search_result', locals: {realtors: realtors}
  end

  def destroy
    @realtor.destroy
    respond_to do |format|
      format.html { redirect_to admin_realtors_url, notice: 'User was successfully destroyed.' }
    end
  end

  def update
    respond_to do |format|
      if @realtor.update(realtor_params)
        # format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.html { redirect_to admin_realtors_url, notice: 'User was successfully destroyed.' }
      else
        format.html { render :edit }
      end
    end
  end


  private
    def set_user
      @realtor = Realtor.find(params[:id])
    end
  # Paperclip attachment
  # for create and update
  def testimonials_params
    params[:testimonials] || {}
  end

  def realtor_params
    params.require(:realtor).permit(:avatar, :firstname, :lastname, :description, :phone_number, :email,
                                    :address, :video_url, :g_plus_profile,:facebook_profile, :twitter_profile,
                                    :listings_url, :city, :company)
  end

end
