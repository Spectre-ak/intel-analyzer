from flask import Flask

app = Flask(__name__)

@app.route("/")
def helloworld():
    return "Hi this image is from github sefsefactions and now we can do CI and CD :) "

app.run(debug=True, host='0.0.0.0')
