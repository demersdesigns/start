guard 'compass' do
  watch('^src/(.*)\.s[ac]ss')
end

# This will concatenate the javascript files specified in :files to public/js/all.js
guard :concat, type: "js", files: %w(), input_dir: "public/js", output: "public/js/all"

guard :concat, type: "css", files: %w(), input_dir: "public/css", output: "public/css/all"

guard 'livereload' do
  watch(%r{.+\.(css|js|html)$})
end

guard 'sass', :input => 'sass', :output => 'css'

guard 'uglify', :destination_file => "public/javascripts/application.js" do
  watch (%r{app/assets/javascripts/application.js})
end

# http://thechangelog.com/using-imageoptim-with-guard-shell/
guard 'shell' do
  watch %r{^img/.} do |file|
    n file[0], "#{file[0]} changed"
    `open #{file[0]} -a ImageOptim`
  end
end