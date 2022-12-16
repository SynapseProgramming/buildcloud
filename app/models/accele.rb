class Accele < ApplicationRecord

      validates :Nodeid, presence: true
      validates :Battery, presence: true
      validates :X, presence: true
      validates :Y, presence: true
      validates :Z, presence: true
      validates :Time, presence: true
      validates :Sent, presence: true
end
