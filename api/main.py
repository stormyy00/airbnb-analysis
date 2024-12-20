from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import json
import nbformat
import base64
import io

todos = ["test1", "test2", "test3"]

app = Flask(__name__)
CORS(app)
app.debug = True


# @app.route('/server/scrape', methods=['GET'])
# def scrape():
#     try:
#         givingguide_2022_url = 'https://www.blueheartaction.org/giving-guide-2022'

#         my_headers = {"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36", "Accept":"text/html,application/xhtml+xml,application/xml; q=0.9,image/webp,image/apng,*/*;q=0.8",}
#         response = requests.get(givingguide_2022_url, headers=my_headers)
#         soup = BeautifulSoup(response.content, "html.parser")

#         org_section_find = soup.find('section', id='comp-la8gl467')
#         data = []
#         for org in org_section_find:
#             # print(org.text)
#             organization = org.text
#             data.append(organization)

#         return jsonify({"status": "success", "html": data})
#     except requests.exceptions.RequestException as e:
#         return jsonify({"status": "error", "message": str(e)})


# Function to parse the notebook and extract graphs
def parse_notebook(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            notebook = nbformat.read(f, as_version=4)

        cells = []
        for cell in notebook['cells']:
            if cell['cell_type'] == 'code':  # Extract code cells with outputs
                graphs = []
                for output in cell.get('outputs', []):
                    # Check for image/png data in outputs
                    if 'data' in output and 'image/png' in output['data']:
                        image_data = output['data']['image/png']
                        graphs.append(image_data)  # Append base64-encoded PNG
                cells.append({
                    'type': 'code',
                    'source': cell['source'],
                    'graphs': graphs
                })

        return cells
    except Exception as e:
        return {"error": str(e)}


@app.route('/data', methods=['GET'])
def get_notebook_data():
    file_path = "../pynb/final_project.ipynb"  
    data = parse_notebook(file_path)
    return jsonify(data)

# Flask route to serve a specific graph as an image
@app.route('/get-graph/<base64_graph>', methods=['GET'])
def get_graph(base64_graph):
    # Decode the base64-encoded graph
    try:
        image_data = base64.b64decode(base64_graph)
        return send_file(
            io.BytesIO(image_data),
            mimetype='image/png',
            as_attachment=False,
            download_name="graph.png"
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# @app.route('/scrape', methods=['GET'])
# def scrape():
#     try:
#         url = "https://www.guidestar.org/search"

#         params = {
#             "Keywords": "health",
#         }

#         headers = {
#             "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
#              "Accept": "application/json",
#         }

#         response = requests.get(url, headers=headers, params=params)
#         response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx)

#         soup = BeautifulSoup(response.content, "html.parser")
#         # prettified_html = soup.prettify()
#         titles = soup.find_all('h1')
#         for title in titles:
#             text = title.text
#             text = "this is text"
#         return jsonify({"status": "success", "html": text})

#     except requests.exceptions.RequestException as e:
#         return jsonify({"status": "error", "message": str(e)})
