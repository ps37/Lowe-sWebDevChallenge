/**
 * Created by Prudhvi on 7/8/15.
 */
(function(){

    var app = angular.module('wm_store',[

    ]);

    app.controller('main_controller', ['$http', function($http){
        var self = this;
        self.tab = 50253831;

        $http.get('js/wm_products.json')
            .success(function(data){
                console.log(data);

                self.product_list = data.ProductsList;
                console.log(self.product_list);
            })
            .error(function(error){
                console.log(error);
            });

        self.setTab = function(tabTitle){
            self.tab = tabTitle;
            console.log(self.tab);
        };

        self.isSet = function(tabTitle){
            if(self.tab == tabTitle){
                return true;
            }
            else{
                return false;
            }
        };

        self.showPrice = function(price){
            alert("The price of the item is " + price);
        };

    }]);

})()