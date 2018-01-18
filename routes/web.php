<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/user/repos', function (\Illuminate\Http\Request $request) {
    try {
        $client = new GuzzleHttp\Client();
        $response = $client->request('GET', 'https://api.github.com/user/repos', [
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => $request->header('Authorization'),
            ],
        ]);
    } catch ( GuzzleHttp\Exception\ClientException $e) {
        $response = $e->getResponse();
    }
    return response(json_decode((string)$response->getBody(),true),$response->getStatusCode());
});


