import angular from 'angular';
// import markedLib from 'marked';

let markedLib = {};

export default angular.module('mdDirective', [])
    .constant('__marked', markedLib)
    .directive('marked', ['__marked', function(marked) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                opts: '=',
                mdFile: '=',
                marked: '='
            },
            link: function(scope, element, attrs) {
                var value = scope.marked || element.text() || '';
                set(value);

                function set(val) {
                    var m = marked(val || '', scope.opts || null);
                    element.html(m);
                }

                if (attrs.marked) {
                    scope.$watch('marked', set);
                }

            }
        };
    }]);
