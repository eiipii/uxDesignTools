import angular from 'angular';
import angularMeteor from 'angular-meteor';

import uiRouter from '@uirouter/angularjs';
import {Visualizer} from '@uirouter/visualizer';

import appListOfStates from '../imports/routing/routingRoot';
// import mdDirective from '../imports/directives/md';

function appConfig($locationProvider, $urlRouterProvider, $stateRegistryProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/doc');
    appListOfStates.forEach(s => $stateRegistryProvider.register(s));
}

function bindStateOnScope($rootScope, $state, $stateParams, $http) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $http.defaults.withCredentials = true;
    console.log('App injector run.');
}

function bindVisualizer($uiRouter, $trace) {
    var pluginInstance = $uiRouter.plugin(Visualizer);
    $trace.enable('TRANSITION')
}


angular.module('ux-app', [
    angularMeteor,
    uiRouter
]).config(appConfig)
    .run(bindStateOnScope)
    .run(bindVisualizer);
