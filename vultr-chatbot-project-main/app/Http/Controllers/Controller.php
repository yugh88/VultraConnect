<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    public function handleChat(Request $request)
    {
        // Get the message sent by the user
        $inputText = $request->input('message');
        
        // Process the input text with your chatbot logic or API call
        // This can be a call to an external API or some predefined logic
        $chatbotResponse = 'Chatbot response based on input: ' . $inputText;

        // Return the response as JSON
        return response()->json([
            'response' => $chatbotResponse
        ]);
    }
}
