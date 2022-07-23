from flask import *
from configyre.config import *
import sys

app = Flask(__name__)
app.config.from_object(testingConfig)

@app.route('/')
def main():
    print(sys.path)
    return render_template('main.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')