class RunSerializer < ActiveModel::Serializer
  attributes :id, :date, :distance, :total_time, :calories, :elevation, :average_heartrate, :average_pace, :fastest_split, :favorite, :user_id
  
end
