class User < ApplicationRecord
    has_secure_password
    has_many :tasks
    validates_presence_of :username, :email
    validates_uniqueness_of :username, :email
    def total_tasks
        tasks.count
    end
end