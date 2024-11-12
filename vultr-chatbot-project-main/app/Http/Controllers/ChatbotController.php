<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function getResponse(Request $request)
    {
        $userInput = $request->input('message');

        // Send request to serverless function
        $response = Http::post(env('SERVERLESS_URL') . '/predict', [
            'message' => $userInput,
        ]);

        return response()->json($response->json());
    }
}
