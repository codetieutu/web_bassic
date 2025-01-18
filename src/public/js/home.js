$(document).ready(() => {
    $('.delete').click(function () {
        const id = $(this).attr('id');
        if (confirm(`delete this user have id = ${id}`)) {
            $.ajax({
                url: `${window.location.origin}/delete/${id}`,
                method: "POST",
                success: (results) => {
                    $(this).closest('tr').remove();
                },
                error: (err) => {
                    console.log(err);
                }
            });
        }
    });
});