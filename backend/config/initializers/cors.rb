Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      # Front(React)側は3000ポートで繋ぐのでoriginsは3000を許可します
      origins 'localhost:3000'
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
end