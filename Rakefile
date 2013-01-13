require 'dotenv'

task :default => [:mouch]

task :mouch do
  Dotenv.load ".env.#{ENV['target']}", '.env'
  system "./mouch app.json.erb"
  puts "Target COUCH_URL = #{ENV['COUCH_URL']}"
end