class Api::PostsController < ApplicationController
  # before_action :set_user
  before_action :set_post, only: [:update, :destroy]

  def index
    render json: current_user.posts
  end

  def create
    post = Post.new(post_params) do |post|
      post.user = current_user
    end

    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:comment)
  end

end
