import pymysql
import os
import pprint

db = pymysql.connect(host="localhost", user="root", password="password", database="jrelist")
cursor = db.cursor()

#cursor.execute("DROP TABLE IF EXISTS episodes")
sql = """CREATE TABLE episodes (
audio_preview_url VARCHAR(255),
description TEXT,
html_description TEXT,
duration_ms INT,
web_url VARCHAR(255),
id VARCHAR(255),
image_url VARCHAR(255),
name VARCHAR(255),
release_date VARCHAR(255),
uri VARCHAR(255))"""

#cursor.execute(sql)

pp = pprint.PrettyPrinter(indent=4)

os.environ['SPOTIPY_CLIENT_ID'] = '406d8e3060034a8ca3a48a3887398487'
os.environ['SPOTIPY_CLIENT_SECRET'] = '89f24a64904b4226820402a44fa8a0ce'
os.environ['SPOTIPY_REDIRECT_URI'] = 'http://localhost/callback'

import spotipy
from spotipy.oauth2 import SpotifyOAuth


scope = "user-library-read"

SPOTIPY_CLIENT_ID='406d8e3060034a8ca3a48a3887398487'
SPOTIPY_CLIENT_SECRET='89f24a64904b4226820402a44fa8a0ce'
SPOTIPY_REDIRECT_URI='http://localhost'


sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

for i in range(1):
    results = sp.show_episodes('4rOoJ6Egrf8K2IrywzwOMk', limit=1)
    for idx, item in enumerate(results['items']):
        audio_preview_url = item['audio_preview_url']
        description = item['description']
        html_description = item['html_description']
        duration_ms = item['duration_ms']
        web_url = item['external_urls']['spotify']
        id = item['id']
        image_url = item['images'][0]['url']
        name = item['name']
        release_date = item['release_date']
        uri = item['uri']

        print(item['name'])

        add_episode_sql = """
        INSERT INTO episodes (
            audio_preview_url, 
            description,
            html_description,
            duration_ms, 
            web_url,
            id,
            image_url,
            name,
            release_date,
            uri) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """

        cursor.execute(add_episode_sql, (
                audio_preview_url, 
                description, 
                html_description, 
                int(duration_ms), 
                web_url,
                id,
                image_url,
                name,
                release_date,
                uri))
        db.commit()
        
cursor.execute("ALTER TABLE episodes ADD FULLTEXT(name, description);")
cursor.execute("ALTER TABLE episodes ADD FULLTEXT(name);")
cursor.execute("ALTER TABLE episodes ADD FULLTEXT(description);")
db.close()
    