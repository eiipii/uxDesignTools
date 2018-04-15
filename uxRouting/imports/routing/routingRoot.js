import docTemplate from './views/docTemplate.html';
import directivesTemplate from './views/directivesTemplate.html';
import routingTemplate from './views/routingTemplate.html';
import bootstrapRootTemplate from './views/bootstrapRootTemplate.html';
import column12Flow from './views/boot/colomn12Flow.html';
import col12ImagesContent from './views/boot/col12ImagesContent.html';
import mdTemplate from './views/dir/mdTemplate.html';


var appListOfStates = [{
    name: 'doc',
    url: "/doc",
    templateUrl: docTemplate
},{
    name: 'directives',
    url: "/directives",
    templateUrl: directivesTemplate
},{
    name: 'directives.md',
    url: "/md",
    templateUrl: mdTemplate
},{
    name: 'routing',
    url: "/routing",
    templateUrl: routingTemplate
},{
    name: 'routing.bootstrapContainer',
    url: "/boot",
    templateUrl: bootstrapRootTemplate
},{
    name: 'routing.bootstrapContainer.colomn12View',
    url: "/colomn12",
    templateUrl: column12Flow
},{
    name: 'routing.bootstrapContainer.colomn12View.images',
    url: "/images",
    templateUrl: col12ImagesContent
}
];


export default appListOfStates;