from sqlite3 import *


def upload_views(value,href):
    db = connect('main_core/db/article.db')
    cur = db.cursor()
    cur.execute(f'UPDATE articles SET views = {value} WHERE a_to_article = "{href}"')
    db.commit()