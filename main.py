import sqlite3

database = sqlite3.connect('todo')
cursor = database.cursor()

cursor.execute(
    """
        CREATE IF NOT EXISTS tasks(
            id INTEGER PRIMARY KEY,
            task TEXT
        )
    """
)