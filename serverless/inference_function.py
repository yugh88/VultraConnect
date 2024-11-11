# serverless/inference_function.py
import json
from transformers import pipeline

# Load pre-trained model for chat-based responses
chat_model = pipeline("text-generation", model="gpt2")  # Replace 'gpt2' with specific model if needed

def handle_request(event, context):
    try:
        # Parse input data
        input_text = json.loads(event['body']).get("message", "")
        
        # Generate model response
        response = chat_model(input_text, max_length=100, num_return_sequences=1)
        reply_text = response[0]["generated_text"]

        # Return response
        return {
            "statusCode": 200,
            "body": json.dumps({"reply": reply_text})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
