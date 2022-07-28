function getItemsFromId(id){
   
    var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 3) {
    var myObj= JSON.parse(xhr.responseText);



    //alert(xhr.responseText);
        sessionStorage.removeItem("allitems");
        sessionStorage.removeItem("totalitems");
        sessionStorage.setItem("totalitems", myObj.length);
        sessionStorage.setItem("allitems", xhr.responseText);
        totalItems.innerHTML= myObj.length;
        


            }
        }

            var urlstr= "http://localhost:5236/api/Restaurant/RestaurantItems/"+id;
            //alert(urlstr);
            xhr.open('get', urlstr, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.send();
     }

function updateItemsInSession(id){
    var xhr2 = new XMLHttpRequest();

            xhr2.onreadystatechange = function () {
                if (xhr2.readyState === 3) {
                    //alert("ok")
                var myObj= JSON.parse(xhr2.responseText);

                    
                    sessionStorage.removeItem("totalitems");
                    sessionStorage.removeItem("allitems");
                    sessionStorage.setItem("totalitems", myObj.length);
                    sessionStorage.setItem("allitems", xhr2.responseText);
                    
                    


                }
            }

            var urlstr= "http://localhost:5236/api/Restaurant/RestaurantItems/"+id;
            //alert(urlstr);
            xhr2.open('get', urlstr, true);
            xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr2.send();
         }



         function updateOrdersInSession(id){
            var xhr3 = new XMLHttpRequest();
        
                    xhr3.onreadystatechange = function () {
                        if (xhr3.readyState === 3) {
                        var myObj= JSON.parse(xhr3.responseText);
        
                            
                            
                            sessionStorage.removeItem("orderstorestaurant");
                            
                            sessionStorage.setItem("orderstorestaurant", xhr3.responseText);
                            
                            
        
        
                        }
                    }
        
                    var urlstr= "http://localhost:5236/api/Orders/OrdersToRestaurant/"+sessionStorage.getItem("restaurantid");
                    //alert(urlstr);
                    xhr3.open('get', urlstr, true);
                    xhr3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                    xhr3.send();
                 }
        
        