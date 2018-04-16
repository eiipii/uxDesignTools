import angular from 'angular';
import markedLib from './marked';


angular.module('mdDirective', [])
    .constant('__marked', markedLib)
    .directive('marked', ['__marked','$compile', function (marked,$compile) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                opts: '=',
                marked: '='
            },
            link: function (scope, element, attrs) {
                var mdNode = element;
                //Change pre elements to div
                if (element[0].tagName == "PRE") {
                    mdNode = $compile("<div></div>")(scope);
                    element.replaceWith(mdNode);
                }
                let value = scope.marked || element.text() || '';
                set(value);

                function set(val) {
                    var m = marked(val || '', scope.opts || null);
                    mdNode.html(m);
                }

                if (attrs.marked) {
                    scope.$watch('marked', set);
                }

            }
        };
    }]);

export default "mdDirective";