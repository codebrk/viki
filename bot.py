from flask import Flask
import aiml
import os


abspath = os.path.dirname(os.path.abspath(__file__))
kernel = aiml.Kernel()
for file in os.listdir(abspath + "/brain"):
	if file.endswith(".aiml"):
		kernel.learn(abspath + "/brain/" + file)



app = Flask(__name__)


@app.route("/<query>")
def index(query):
	print abspath
	return kernel.respond(query)


if __name__ == "__main__":
	app.run(debug=True, port=3000)
