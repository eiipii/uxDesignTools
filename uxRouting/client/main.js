import angular from 'angular';
import angularMeteor from 'angular-meteor';

import uiRouter from '@uirouter/angularjs';
import {StateVisualizer, Visualizer} from '@uirouter/visualizer';

import appListOfStates from '../imports/routing/routingRoot';
import mdDirective from '../imports/directives/md';
import loremDirective from '../imports/directives/lorem';
import holderDirective from '../imports/directives/holderDirective';

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
    // var pluginInstance = $uiRouter.plugin(Visualizer);
    // $trace.enable('TRANSITION')
    $uiRouter.plugin(Visualizer, {
        state: false
    });
    StateVisualizer.create($uiRouter, undefined, {
        height: 600,
        width: 600
    });
    $trace.enable('TRANSITION');
}


angular.module('ux-app', [
    angularMeteor,
    mdDirective,
    holderDirective,
    loremDirective,
    uiRouter
]).config(appConfig)
    .run(bindStateOnScope)
    .run(bindVisualizer);
