import docTemplate from './views/docTemplate.html';
import routingTemplate from './views/routingTemplate.html';
import bootstrapRootTemplate from './views/bootstrapRootTemplate.html';
import column12Flow from './views/boot/colomn12Flow.html';
import col12ImagesContent from './views/boot/col12ImagesContent.html';


var appListOfStates = [{
    name: 'doc',
    url: "/doc",
    templateUrl: docTemplate
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