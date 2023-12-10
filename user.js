const query = new URLSearchParams(location.search);
let add_url = query.get( "id" )

$.ajax(`https://my-json-server.typicode.com/Mikedonchik/new/users/${add_url}`, {
    dataType: 'json',
    data: { limit: 5 },
    success: function (result) {
            $(".oll").append(
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


