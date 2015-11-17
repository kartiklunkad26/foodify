app.controller('MainController',['$scope',function($scope){
  $scope.title = 'Foodify';
  $scope.promo = 'Trying new things';
  $scope.products = [
    {
      name: 'Chicken Biryani',
      price: 6,
      cover: 'images/chickenbiryani.jpg',
      distance: 0.3,
      quantity: 0
    },
    {
      name: 'Chole Puri',
      price: 8,
      cover: 'images/chole-puri.jpg',
      distance: 0.5,
      quantity: 0
    },
    {
      name: 'Pav Bhaji',
      price: 12,
      cover: 'images/pav-bhaji.jpg',
      distance: 0.7,
      quantity: 0
    },
    {
      name: 'Palak Paneer',
      price: 12,
      cover: 'images/palak-paneer.jpg',
      distance: 0.9,
      quantity: 0
    }
    ];
    $scope.cart = [];
    $scope.addItem = function(product) {
        if(!product.quantity == 0)
        {
          $scope.cart.push({
            name: product.name,
            price: product.price,
            quantity: product.quantity
            
        });
        }
    },
     $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart, function(cart) {
            total += cart.quantity * cart.price;
        })

        return total;
    }
}]);