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

def itineraries_count():
    data = read_data()
    return data["itineraryIdCount"]

@app.route('/echo', methods=['GET'])
def echo():
    return jsonify({"message": "Hello, World!"})

@app.route('/itinerary', methods=['GET'])
def itinerary():
    data = read_data()
    body = request.get_json()
    itineraryId = body["itineraryId"]
    return jsonify(data["itineraries"][itineraryId])

@app.route('/itinerary', methods=['POST'])
def itinerary_post():

    data = read_data()
    body = request.get_json()
    data["itineraries"].append(body)
    itineraryId = data["itineraryIdCount"]
    data["itineraryIdCount"] += 1
    write_data(data)
    return jsonify({
        "itineraryId": itineraryId
    })

@app.route('/recommendations', methods=['GET'])
def recommendations():
    data = read_data()
    target_data = data["itineraries"][:3]
    return jsonify(target_data)


# Endpoint to clear the JSON file
@app.route('/clear', methods=['GET'])
def clear():
    clear_data()
    return jsonify({"message": "Database cleared successfully"})


if __name__ == '__main__':
    app.run()
