$.ajax('https://my-json-server.typicode.com/Mikedonchik/new/products', {
    dataType: 'json',
    data: { limit: 127 },
    success: function (result) {
        console.log(result)
        result.forEach(e => {
            $(".all").append(
                ` <div class ="card">
                <img src="${e.photo_url}" alt="" class="photo">
                <h1 class="name">${e.name}</h1>
                <div class="disc">
                <p >Price: ${e.price}</p>
                <p>Description: ${e.description}</p>
                <a href="user.html?id=${e.author_id}" class ="seller">Seller profile</a>
                </div>
                <button class="but">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
                </div >`
            )
        });

    },
    error: function (xhr) {
        console.log(xhr.statusText);
    }

})


