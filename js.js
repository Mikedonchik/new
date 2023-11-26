
$.ajax('https://my-json-server.typicode.com/Mikedonchik/new/products', {
    dataType: 'json',
    data: { limit: 127 },
    success: function (result) {
        console.log(result)
        result.forEach(e => {
            $(".all").html(
                ` <div class ="card_two">
                <img src="${e.photo_url}" alt="" class="photo_2">
                <h1>${e.name}</h1>
                <p >${e.price}</p>
                <p>${e.description}</p>
                </div >`
            )
        });

    },
    error: function (xhr) {
        console.log(xhr.statusText);
    }
})