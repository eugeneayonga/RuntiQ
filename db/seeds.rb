# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: 'Sarah', password_digest: 'password')
user2 = User.create(username: 'Oscar', password_digest: 'password')
user3 = User.create(username: 'Abby', password_digest: 'password')
user4 = User.create(username: 'Molly', password_digest: 'password')
user5 = User.create(username: 'Mason', password_digest: 'password')
user6 = User.create(username: 'Mia', password_digest: 'password')
user7 = User.create(username: 'Lily', password_digest: 'password')
user8 = User.create(username: 'Oliver', password_digest: 'password')
user9 = User.create(username: 'Emma', password_digest: 'password')
user10 = User.create(username: 'Ava', password_digest: 'password')


user1.runs.create(date: '04/02/2022', distance: 4.97, total_time: '0:58:05', calories: 601, elevation: 195, average_heartrate: 167, average_pace: '00:11:40', fastest_split: '00:10:18')
user2.runs.create(date: '04/01/2022', distance: 1.50, total_time: '0:20:05', calories: 150, elevation: 5, average_heartrate: 140, average_pace: '00:20:40', fastest_split: '00:19:18')
user3.runs.create(date: '04/03/2022', distance: 3.10, total_time: '0:35:00', calories: 320, elevation: 30, average_heartrate: 160, average_pace: '00:15:40', fastest_split: '00:13:18')
user4.runs.create(date: '04/04/2022', distance: 2.50, total_time: '0:30:05', calories: 250, elevation: 25, average_heartrate: 150, average_pace: '00:15:40', fastest_split: '00:13:18')
user5.runs.create(date: '04/05/2022', distance: 1.50, total_time: '0:20:05', calories: 150, elevation: 5, average_heartrate: 140, average_pace: '00:20:40', fastest_split: '00:19:18')
user6.runs.create(date: '04/06/2022', distance: 3.10, total_time: '0:35:00', calories: 320, elevation: 30, average_heartrate: 160, average_pace: '00:15:40', fastest_split: '00:13:18')
user7.runs.create(date: '04/07/2022', distance: 2.50, total_time: '0:30:05', calories: 250, elevation: 25, average_heartrate: 150, average_pace: '00:15:40', fastest_split: '00:13:18')
user8.runs.create(date: '04/08/2022', distance: 1.50, total_time: '0:20:05', calories: 150, elevation: 5, average_heartrate: 140, average_pace: '00:20:40', fastest_split: '00:19:18')
user9.runs.create(date: '04/09/2022', distance: 3.10, total_time: '0:35:00', calories: 320, elevation: 30, average_heartrate: 160, average_pace: '00:15:40', fastest_split: '00:13:18')
user10.runs.create(date: '04/10/2022', distance: 2.50, total_time: '0:30:05', calories: 250, elevation: 25, average_heartrate: 150, average_pace: '00:15:40', fastest_split: '00:13:18')