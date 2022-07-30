from flask import *
from configyre.config import *
from sqlite3 import *

app = Flask(__name__)
app.config.from_object(config)



def connect_db():

    con = connect('db/article.db')
    con.row_factory = Row

    return con


def init_db():

    with app.app_context():
        db = get_db()

        with app.open_resource('db/shem.sql','r') as f:
            db.cursor().executescript(f.read())
        db.commit()


def get_db():

    if not hasattr(g,'sqlite_db'):
        g.sqlite_db = connect_db()
        return g.sqlite_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()


@app.route('/')
def main():
    init_db()
    return render_template('main.html')


@app.route('/articles')
def articles():
    return render_template('article.html')

if __name__ == '__main__':
    app.run()