$(document).ready(function () {
    if (window.location.pathname === "/notes") {
        $.ajax({
            url: "/api/notes",
            method: "GET",
            success: function (data) {
                data.forEach((note) => {
                    $("#notes").append(`
                        <div>
                            <a href="/notes/${note.id}/edit">${note.name}</a>
                            <button onclick="deleteNote(${note.id})">Удалить</button>
                        </div>
                    `);
                });
            },
        });
    }

    if (window.location.pathname === "/notes/create") {
        $("#save").click(function () {
            $.ajax({
                url: "/api/notes",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    name: $("#name").val(),
                    description: $("#description").val(),
                }),
                success: function () {
                    alert("Заметка создана");
                    window.location.href = "/notes";
                },
            });
        });
    }

    if (window.location.pathname.includes("/edit")) {
        $.ajax({
            url: `/api/notes/${noteId}`,
            method: "GET",
            success: function (data) {
                $("#name").val(data.name);
                $("#description").val(data.description);
            },
        });

        $("#save").click(function () {
            $.ajax({
                url: `/api/notes/${noteId}`,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify({
                    name: $("#name").val(),
                    description: $("#description").val(),
                }),
                success: function () {
                    alert("Заметка обновлена");
                },
            });
        });

        $("#delete").click(function () {
            $.ajax({
                url: `/api/notes/${noteId}`,
                method: "DELETE",
                success: function () {
                    alert("Заметка удалена");
                    window.location.href = "/notes";
                },
            });
        });
    }
});

function deleteNote(id) {
    $.ajax({
        url: `/api/notes/${id}`,
        method: "DELETE",
        success: function () {
            alert("Заметка удалена");
            window.location.reload();
        },
    });
}
