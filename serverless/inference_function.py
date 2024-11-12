from flask import Flask, request, jsonify
import openai  # or whichever library you use for your ML model

app = Flask(__name__)

# Set up API key for OpenAI or your ML model
openai.api_key = RKKQP6IKWH2N3XMD2ZLKYS532FP3YGPKBXHQ

@app.route('/predict', methods=['POST'])
def predict():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    # Generate response (example with OpenAI)
    response = openai.Completion.create(
        engine="text-davinci-003", 
        prompt=user_input, 
        max_tokens=50
    )
    return jsonify({"response": response.choices[0].text.strip()})

if __name__ == "__main__":
    app.run(debug=True)
