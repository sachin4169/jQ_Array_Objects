var products = [
    {"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
    {"id":102,"name":"Football","image":"football.png","price":120},
    {"id":103,"name":"Soccer","image":"soccer.png","price":110},
    {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
    {"id":105,"name":"Tennis","image":"tennis.png","price":100}
];
var mycart= [];
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

$(document).on("click" , ".add-to-cart", function(){
    var id = this.id;
    console.log(id);
    var data = 
    products.forEach(element => {
        if(element.id == id){
            var data ={
                "id":element.id,
                "name":element.name,
                "price":element.price,
                "quantity":1,
            }
            var len = mycart.length;
            var flag=0;
            if(mycart != 0){
                for (var i = 0; i < len;i++) {
                    console.log(i);
                    if(mycart[i].id == id){
                        console.log("if");
                        mycart[i].quantity += 1;
                        flag=1;
                        break;
                    }
                }
            }if(flag ==0){
                mycart.push(data)
            }
        }
    });
    console.log(mycart);
    cartdisplay();
});
var table = `
<table id="mycart_table">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quntity</th>
        <th>Total Price</th>
        <th>Remove</th>
    </tr>`
function cartdisplay(){
    $("#table").empty();
    var product_list = ""
    mycart.forEach(element => {
        var total = element.price * element.quantity;
        product_list += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td><input type="number" class="inp" id="up_${element.id}" value="${element.quantity}" style="border: none;"></td>
            <td class="total">${total}</td>
            <td class="remove" id="${element.id}" >X</td>
        </tr>`
    });$("#table").append(table+product_list+"</table>");
   var l = $(".total").length;
   var total = 0;
    for(let i=0;i<l;i++){
        var x = document.getElementsByClassName("total")[i].innerHTML;
        console.log(x);
        total += Number(x)
    }
   $("#grand_total").empty();
   $("#grand_total").append(total)

};
$(document).on("blur" , ".inp" , function(){
    var inpid= this.id;
    var pid = inpid.split("_")[1];
    var p_quantity = this.value;
    console.log(p_quantity);
    mycart.forEach(e => {
        if(e.id == pid){
            e.quantity = p_quantity;
        }
        
    });
    cartdisplay(); 
})

$("#remove_all_btn").click(()=>{
    mycart=[];
    cartdisplay();
});

$(document).on("click" , ".remove", function(){
    id = this.id;
    console.log(id);
    mycart.forEach((element,index) => {
        if(element.id == id){
            console.log(index);
            mycart.splice(index , 1)
        }
    });
    cartdisplay();
});