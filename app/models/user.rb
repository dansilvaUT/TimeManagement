class User < ApplicationRecord
    has_secure_password
    has_many :tasks

    def total_tasks
        tasks.count
    end
end