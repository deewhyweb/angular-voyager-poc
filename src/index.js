import {
  createClient,
  VoyagerClient,
  DataSyncConfig,
  OfflineQueueListener,
  ConflictListener,
  AuthContextProvider
} from "@aerogear/voyager-client";
import gql from "graphql-tag";
angular.module("app", []).controller("HelloWorldCtrl", function($scope) {
  $scope.message = "Hello World";
  const config = {
    httpUrl: "http://localhost:8001/graphql",
    wsUrl: "ws://localhost:8001/graphql"
  };

  createClient(config).then(client => {
    const options = gql`
      query allTasks {
        allTasks {
          name
          created
        }
      }
    `;

    client
      .query({
        fetchPolicy: "network-only",
        query: gql`
          query allTasks {
            allTasks {
              name
            }
          }
        `
      })
      //Print the response of the query
      .then(({ data }) => {
        
          $scope.message = data.allTasks[0].name;
          $scope.$apply();
        
        
      });
  });
});
