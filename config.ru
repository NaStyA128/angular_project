use Rack::Static,
  :urls => ["/js"],
  :root => "angular_src"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('angular_src/base.html', File::RDONLY)
  ]
}