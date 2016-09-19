 var app = angular.module('hTreeUI', ['checklist-model']);
 app.controller('myCtrl', function ($scope) {
     $scope.dataForTheTree = [{
         "name": "Model1"
         , "type": "Physical"
         , "tables": [{
                 "name": "Table1"
                 , "columns": ["column1"
                    , "column2"
                    , "column3"]
            }
                    , {
                 "name": "Table2"
                 , "columns": ["table2.column1"
                        , "table2.column2"
                        , "table2.column3"]
                }]
        }];
     $scope.toggleSelectAll = function (table) {
         if (table.selectAll === 'false') {
             table.selected = angular.copy(table.columns);
             table.selectAll = 'true';
         }
         else {
             table.selected = [];
             table.selectAll = 'false';
         }
     }
     $scope.toggleTableSelection = function (table) {
         if (table.collapsed === 'none') {
             table.arrow = 'fa fa-chevron-circle-down';
             table.collapsed = 'block'
         }
         else {
             table.arrow = 'fa fa-chevron-circle-right';
             table.collapsed = 'none'
         }
     }
 });