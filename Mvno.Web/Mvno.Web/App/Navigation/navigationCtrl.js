﻿'use strict';
mvnoAngularApp.controller('navigationCtrl', function ($scope, $location) {

    $scope.isActive = function (path) {

        return $location.path().substr(0, path.length) == path;
    };

    //$scope.hasUserInCtx = function () {
        
    //    return (!placesDataService.getUserInContext()) ? true : false;
    //};
});