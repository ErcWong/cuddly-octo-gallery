(function() {
    angular.module('gallery', [])
    .factory('ImageInfo', function($q, $http) {
    })

    .controller('macroGalleryController', ['$scope','$log', '$http', function($scope, $log, $http) {
        $scope.images =[{

                        }];
        $http.get('../macro.json')
            .success(function(data) {
                $scope.images=data;
            })
            .error(function(data,status,error,config){
                $scope.contents = [{heading:"Error",description:"Could not load json   data"}];
            });
    }])

    // Extension of built-in ngRepeat directive - broadcasts to its parent when it is finished.
    // Passes the last element rendered as an event parameter.
    .directive('ngRepeat', function() {
        return {
            restrict: 'A',
            link: function($scope, $elem, $attrs) {
                if ($scope.$last)
                    $scope.$parent.$broadcast('event:repeat-done', $elem);
            }
        };
    })

    .directive('justifiedGallery', function() {
        return {
            restrict: 'AE',
            templateUrl: '../image-gallery.html',
            link: function($scope, $elem, $attrs) {
                $scope.$on('event:repeat-done', function() {
                    setTimeout(function() {
                        $($elem[0]).justifiedGallery({
                            fixedHeight: false,
                            lastRow: 'justify',
                            margins: 10,
                            randomize: false
                        });
                    });
                });
            },
        };
    })
})();