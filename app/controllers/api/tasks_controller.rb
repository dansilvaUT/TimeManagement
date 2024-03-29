module Api
    class TasksController < ApplicationController
        include CurrentUserConcern
        before_action :current_user

        def create_task
            task = Task.new(task_params)
            
            if task.save
                render json: { status: 200, task: task}
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end
    
        def destroy
            task = Task.find(params[:id])
    
            if task.destroy
                render json: { status: 200, destroyed: true, message: "Task suffessfully Deleted" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end
    
        def update
            task = Task.find(params[:id])
    
            if task.update(task_params)
                render json: { status: 200, edited: true, message: "Task suffessfully Edited" }
            else
                render json: { status: 500, message: "Something went wrong" }
            end
        end

        #TODO: Need to filter out users who arren't associated with this task
        def show_task
            task = Task.find(params[:id])

            if task
                render json: { status: 200, task: task }
            else
                render  json: { status: 404, message: "No Task Found" }
            end
        end

        #Custom methods
        def get_user_tasks
            tasks = Task.where(user_id: @current_user.id)
            if tasks
                render json: { status: 200, tasks: tasks }
            else
                render json: { status: 404, message: "No tasks found" }
            end
        end
    
        #Private Methods
        private
    
        def task_params
            params.require(:task).permit(:title, :description, :start_time, :end_time, :user_id, :id)
        end
        
    end
end
