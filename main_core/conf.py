class config():
    SECRET_KEY = 'key'
    DEBUG = False
    TESTING = False



class testconf(config):
    TESTING=True
    DEBUG=True
