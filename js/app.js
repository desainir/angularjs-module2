(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;

  itemsToBuy.items =  ShoppingListCheckOffService.getlistItems();

   itemsToBuy.movetoBoughtList = function (itemIndex) {
   ShoppingListCheckOffService.movetoBoughtList(itemIndex);
   };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;

  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var InitialItems = [{itemName: 'Onions', itemQty:'10 kg'},
                          {itemName: 'Milk', itemQty:'1 Gallon'},
          	               {itemName: 'Crispy Chips', itemQty:'1 Packet'},
          	               {itemName: 'Detergent Soap', itemQty:'2 Kg'},
          	               {itemName: 'Kitchen Towels', itemQty:'3 Rolls'}
	              ];
  var listItems = InitialItems;
  var boughtItems = [];

  service.getlistItems = function () {
    return listItems;
  };

  service.movetoBoughtList = function (itemIdex) {
  	boughtItems.splice(itemIdex,0,listItems[itemIdex]);
    listItems.splice(itemIdex,1);
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
