class Task < ApplicationRecord
  belongs_to :user
  validates :title, :description, :start_time, :end_time, presence: true
end
