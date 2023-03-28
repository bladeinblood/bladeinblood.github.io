import flask
import json

app = flask.Flask(__name__)

@app.route('/')
def home_page():
    data_set = {'code': 200, 'message': 'Successfully loaded Home page'}
    return json.dumps(data_set)

@app.route('/user/')
def request_page():
    user_query = flask.request.args.get('user')
    if user_query is not None:
        return json.dumps(
            {
                'code': 200,
                'message': 'Successfully',
                'name': user_query
            }
        )
    else:
        return json.dumps({
            'code': 401,
            'message': 'Unauthorized'
        })

if __name__ == "__main__":
    app.run(port=1000)