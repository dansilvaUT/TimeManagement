class TasksController < ApplicationController

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

    #Private Methods
    private

    def task_params
        params.require(:task).permit(:title, :description, :start_time, :end_time, :user_id)
    end
    
end