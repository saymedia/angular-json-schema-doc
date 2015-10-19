'use strict';

var module = angular.module('jsonSchemaDoc', []);

module.directive('jsonDoc', function () {

    return {
        restrict: 'EA',
        template: '<div class="">' +
            '    <h2 class="" ng-if="showTitle">{{schema.title}}</h2>' +
            '    <span class="" ng-if="showDescription" ng-bind="schema.description"></span>' +
            '    <table ng-if="schema.properties" class="">' +
            '        <thead>' +
            '            <tr>' +
            '                <th>Property</th>' +
            '                <th>Title</th>' +
            '                <th>Description</th>' +
            '                <th>Value</th>' +
            '            </tr>' +
            '        </thead>' +
            '        <tbody>' +
            '            <tr ng-repeat="(key, property) in schema.properties">' +
            '                <td>{{key}}</td>' +
            '                <td>{{property.title}}</td>' +
            '                <td>{{property.description}}</td>' +
            '                <td>{{property.type}}</td>' +
            '            </tr>' +
            '        </tbody>' +
            '    </table>' +
            '</div>',
        scope: {
            schema: '=',
            options: '='
        },
        link: function ($scope, $element, $attrs) {
            $scope.title = (schema.title && options.showTitle !== false);
            $scope.showDescription = (schema.description && options.showDescription !== false);
        }
    };
});