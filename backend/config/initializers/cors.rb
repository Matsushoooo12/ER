Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      # Front(React)側は3000ポートで繋ぐのでoriginsは3000を許可します
      origins 'localhost:3000'
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end

    # 本番環境用のオリジン設定
    allow do
        origins ENV["FRONT_BASEURL"].to_s

        resource '*',
            headers: :any,
            methods: [:get, :post, :put, :patch, :delete, :options, :head],
            credentials: true
    end
end