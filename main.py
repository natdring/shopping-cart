import os
import sqlite3
import json
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/test', methods = ['POST'])
def test():
    message = request.get_json()['message']

    with sqlite3.connect('database.db') as conn:
        cur = conn.cursor()
        cur.execute('SELECT * FROM products WHERE name=?;', (message,))
        rows = cur.fetchall()
        render_template('index.html', rows=rows)
        print(rows)
        for row in rows:
            print(row)
        conn.commit()
        return jsonify({'msg':rows})
    

if __name__ == '__main__':
    port = 8080
    app.run(host='0.0.0.0', port=port, debug=True)