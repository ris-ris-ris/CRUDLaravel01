<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return response(Note::all());
    }

    public function show(Note $note)
    {
        return response($note);
    }

    public function create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);
        return response(Note::create($data));
    }

    public function edit(Request $request, Note $note)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);
        return response($note->update($data));
    }

    public function delete(Note $note)
    {
        return response($note->delete());
    }
}