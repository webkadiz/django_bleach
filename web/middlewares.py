def allow_origin(get_response):
    def middleware(request):
        response = get_response(request)

        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'

        return response

    return middleware
