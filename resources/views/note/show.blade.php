<!DOCTYPE html>
<html>
<head>
    <title>Edit Note</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Название заметки</h1>
    <input type="text" id="name" placeholder="Название">
    <input type="text" id="description" placeholder="Описание">
    <button id="save">Сохранить</button>
    <button id="delete">Удалить</button>
    <script>
        const noteId = {{ $id }};
    </script>
    <script src="/js/notes.js"></script>
</body>
</html>