var products = [
    {"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
    {"id":102,"name":"Football","image":"football.png","price":120},
    {"id":103,"name":"Soccer","image":"soccer.png","price":110},
    {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
    {"id":105,"name":"Tennis","image":"tennis.png","price":100}
];

function display(){
    var product_list = ""
    products.forEach(element => {
        product_list += `
        <div id="product-101" class="product">
        <img src="images/${element.image}">
        <h3 class="title"><a href="#">${element.name}</a></h3>
        <span>Price: $ ${element.price}</span>
        <a class="add-to-cart" id="${element.id}" href="#">Add To Cart</a>
    </div>`
    });$("#products").append(product_list);
}
display();