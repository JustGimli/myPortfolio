CREATE TABLE articles (
    id integer PRIMARY KEY, 
    name text,
    textarea TEXT,
    a_to_article text,
    a_to_img text, 
    views integer,
    date DEFAULT (datetime('now','localtime'))
)