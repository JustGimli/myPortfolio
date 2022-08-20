from flask import *
from configyre.config import *
from sqlite3 import *
from conf import config
import random 
from PIL import Image
from db.db import upload_views

app = Flask(__name__)
app.config.from_object(config)



def connect_db():

    con = connect('//main_core/db/article.db')
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


@app.route('/articles/')
def articles():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM articles ORDER BY date DESC')
    art = cur.fetchall()
    return render_template('article.html', articles = art)


@app.route('/add-articles', methods=['POST'])
def add_article():
    try:
        if not request.form['name-article'] :
            flash('Извините введите текст')
        else:
            id = random.randint(1,123123123)  
            path = url_for('static', filename=f'article-img/{str(id) + ".png"}')
            img = Image.open(request.files['image'])
            img.save(f'{app.root_path + path}')
            db = get_db()
            cur = db.cursor()
            cur.execute('INSERT INTO articles (id,name,a_to_article,a_to_img,textarea,views) VALUES(?,?,?,?,?,?)',[id,request.form['name-article'], request.form['href-article'], path,request.form.get('description'),1])
            db.commit()
        flash('Добавлено')
    except:
        flash('Извините. Попробуйте позже')

    return redirect(url_for('articles'))

@app.route('/views', methods=['POST'])
def get_views():
    upload_views(request.form['value'], request.form['href'] )

    return 'url_for()'

if __name__ == '__main__':
    app.run(host='0.0.0.0')