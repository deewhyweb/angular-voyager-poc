import {
  createClient, VoyagerClient, DataSyncConfig,
  OfflineQueueListener, ConflictListener, AuthContextProvider
} from '@aerogear/voyager-client';
angular.module("app", []).controller("HelloWorldCtrl", function($scope) {  
     
    $scope.message="Hello World" 
    } )