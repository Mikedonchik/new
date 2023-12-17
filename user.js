const query = new URLSearchParams(location.search);
let add_url = query.get("id")

$.ajax(`https://my-json-server.typicode.com/Mikedonchik/new/users/${add_url}`, {
    dataType: 'json',
    data: { limit: 5 },
    success: function (result) {
        $(".seller").append(
            ` 
                <div class="card">
                <img src="${result.photo_url}" alt="" class="photo">
                <p class="name">${result.name} ${result.sirname}<p>
                <p class="balance">Balance: ${result.balance}<p>
                </div>
           
                `
        )


    },
    error: function (xhr) {
        console.log(xhr.statusText);
    }

})
$.ajax(`https://my-json-server.typicode.com/Mikedonchik/new/products?author_id=${add_url}`, {
    dataType: 'json',
    data: { limit: 5 },
    success: function (result_2) {
        result_2.forEach(e => {
            $(".products").append(
                ` 
                <div class ="card">
                <img src="${e.photo_url}" alt="" class="photo">
                <h2 class="name">${e.name}</h2>
                <div class="disc">
                <p >Price: ${e.price}</p>
                <p>Description: ${e.description}</p>
                </div>
                `
            )
        })
    },
})
