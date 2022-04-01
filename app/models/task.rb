class Task < ApplicationRecord
  belongs_to :user
  validates :title, :description, :start_time, :end_time, presence: true

  #Return task details for a given task
  def task_details
    self
  end

  #TODO edit this task
  def total_task_time
    self.start_time.to_datetime - self.end_time.to_datetime
  end
end
