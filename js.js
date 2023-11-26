
$.ajax('https://my-json-server.typicode.com/Mikedonchik/new/products', {
    dataType: 'json',
    data: { limit: 127 },
    success: function (result) {
        console.log(result)
        result.forEach(e => {
            $(".all").html(
                ` <div class ="card_two">
                <img src="${e.photo_url}" alt="" class="photo_2">
                </div >`
            )
        });

    },
    error: function (xhr) {
        console.log(xhr.statusText);
    }
})