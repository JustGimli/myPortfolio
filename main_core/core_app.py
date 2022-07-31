from crypt import methods
from flask import *
from configyre.config import *
from sqlite3 import *
from conf import config
import random 
from PIL import Image

app = Flask(__name__)
app.config.from_object(config)



def connect_db():

    con = connect('/home/grirogii/progects/myPortfolio/main_core/db/article.db')
    con.row_factory = Row

    return con


def init_db():

    with app.app_context():
        db = get_db()

        with app.open_resource('/home/grirogii/progects/myPortfolio/main_core/db/shem.sql','r') as f:
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
    return render_template('main.html')


@app.route('/articles')
def articles():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM articles ORDER BY id')
    art = cur.fetchall()
    return render_template('article.html', articles = art)


@app.route('/add-articles', methods=['POST'])
def add_article():
    if request.form['name-article'] == '':
        flash('Извините введите текст')
    else:
        path = 'db/article-img/' + str(random.randint(1,123123123)) + '.jpg'
        img =request.data[request.form['image']]
        img.save(f'{path}', 'JPG')
        
        db = get_db()
        cur = db.cursor()
        cur.execute('INSERT INTO articles (id,name,a_to_article,a_to_img) VALUES(?,?,?,?)',[0,request.form['name-article'], request.form['href-article'], path])
        db.commit()
    return redirect(url_for('articles'))

if __name__ == '__main__':
    app.run()