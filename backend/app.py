from flask import Flask, jsonify, request
import json


app = Flask(__name__)

# JSON file path
JSON_FILE = 'database.json'


# Clear the JSON file
def clear_data():
    with open(JSON_FILE, 'w') as file:
        json.dump([], file)


# Read data from the JSON file
def read_data():
    with open(JSON_FILE, 'r') as file:
        data = json.load(file)
    return data


# Write data to the JSON file
def write_data(data):
    with open(JSON_FILE, 'w') as file:
        json.dump(data, file, indent=4)


# Endpoint to clear the JSON file
@app.route('/clear', methods=['GET'])
def clear():
    clear_data()
    return jsonify({"message": "Database cleared successfully"})


# Endpoint to get all books
@app.route('/books', methods=['GET'])
def get_books():
    data = read_data()
    return jsonify(data)


# Endpoint to add a book
@app.route('/books', methods=['POST'])
def add_book():
    new_book = request.get_json()
    data = read_data()
    data.append(new_book)
    write_data(data)
    return jsonify({"message": "Book added successfully"})


# Endpoint to get a book by ID
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    data = read_data()
    for book in data:
        if book['id'] == book_id:
            return jsonify(book)
    return jsonify({"message": "Book not found"}), 404


# Endpoint to update a book by ID
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    updated_book = request.get_json()
    data = read_data()
    for i, book in enumerate(data):
        if book['id'] == book_id:
            data[i] = updated_book
            write_data(data)
            return jsonify({"message": "Book updated successfully"})
    return jsonify({"message": "Book not found"}), 404


# Endpoint to delete a book by ID
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    data = read_data()
    for i, book in enumerate(data):
        if book['id'] == book_id:
            del data[i]
            write_data(data)
            return jsonify({"message": "Book deleted successfully"})
    return jsonify({"message": "Book not found"}), 404


if __name__ == '__main__':
    app.run()
