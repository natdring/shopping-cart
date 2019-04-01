import sqlite3

#Open database
conn = sqlite3.connect('database.db')

#Create table
conn.execute('''CREATE TABLE IF NOT EXISTS products
		(productId INTEGER PRIMARY KEY,
		name TEXT,
		price REAL	
		)''')

#Insert into table
sql = '''INSERT INTO products 
		(productId, name, price)
		VALUES (?, ?, ?)'''

items = []
items.append((0, 'hammer', 10))
items.append((1, 'nails', .50))
items.append((2, 'saw', 15))
items.append((3, 'drill', 100))
items.append((4, 'screwdriver', 5))
items.append((5, 'screws', 1))


c = conn.cursor()
for item in items:
	c.execute(sql, item)
conn.commit()
conn.close()


