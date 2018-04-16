import docTemplate from './views/docTemplate.html';
import directivesTemplate from './views/directivesTemplate.html';
import routingTemplate from './views/routingTemplate.html';
import bootstrapRootTemplate from './views/bootstrapRootTemplate.html';
import column12Flow from './views/boot/colomn12Flow.html';
import column6x6Flow from './views/boot/column6x6Flow.html';
import column10x2Flow from './views/boot/column10x2Flow.html';
import hccfLayout from './views/boot/hccfLayout.html';

import mediaContent from './views/boot/mediaContent.html';
import wellContent from './views/boot/wellContent.html';
import imagesContent from './views/boot/imagesContent.html';
import panelContent from './views/boot/panelContent.html';
import formContent from './views/boot/formContent.html';
import tableContent from './views/boot/tableContent.html';
import navigationContent from './views/boot/navigationContent.html';
import navStackedContent from './views/boot/navStackedContent.html';

import mdTemplate from './views/dir/mdTemplate.html';
import loremTemplate from './views/dir/lorem.html';
import holderjsTemplate from './views/dir/holderjs.html';


var appListOfStates = [{
    name: 'doc',
    url: "/doc",
    templateUrl: docTemplate
}, {
    name: 'directives',
    url: "/directives",
    templateUrl: directivesTemplate
}, {
    name: 'directives.md',
    url: "/md",
    templateUrl: mdTemplate
}, {
    name: 'directives.lorem',
    url: "/lorem",
    templateUrl: loremTemplate
}, {
    name: 'directives.holder',
    url: "/holder",
    templateUrl: holderjsTemplate
}, {
    name: 'routing',
    url: "/routing",
    templateUrl: routingTemplate
}, {
    name: 'routing.bootstrapContainer',
    url: "/boot",
    templateUrl: bootstrapRootTemplate
}, {
    name: 'routing.bootstrapContainer.colomn12View',
    url: "/colomn12",
    templateUrl: column12Flow
}, {
    name: 'routing.bootstrapContainer.colomn12View.images',
    url: "/images",
    templateUrl: imagesContent
}, {
    name: 'routing.bootstrapContainer.colomn12View.panels',
    url: "/panels",
    templateUrl: panelContent
}, {
    name: 'routing.bootstrapContainer.colomn12View.form',
    url: "/form",
    templateUrl: formContent
}, {
    name: 'routing.bootstrapContainer.colomn6x6View',
    url: "/colomn6x6",
    templateUrl: column6x6Flow
}, {
    name: 'routing.bootstrapContainer.colomn6x6View.mixed',
    url: "/mixed",
    views: {
        left: {
            templateUrl: imagesContent
        },
        right: {
            templateUrl: panelContent
        }
    }
}, {
    name: 'routing.bootstrapContainer.colomn6x6View.mixed2',
    url: "/mixed2",
    views: {
        left: {
            templateUrl: tableContent
        },
        right: {
            templateUrl: imagesContent
        }
    }
}, {
    name: 'routing.bootstrapContainer.colomn10x2View',
    url: "/colomn10x2",
    templateUrl: column10x2Flow
}, {
    name: 'routing.bootstrapContainer.colomn10x2View.mixed',
    url: "/mixed",
    views: {
        left: {
            templateUrl: imagesContent
        },
        right: {
            templateUrl: panelContent
        }
    }
}, {
    name: 'routing.bootstrapContainer.colomn10x2View.mixed2',
    url: "/mixed2",
    views: {
        left: {
            templateUrl: tableContent
        },
        right: {
            templateUrl: imagesContent
        }
    }
}, {
    name: 'routing.bootstrapContainer.hccfLayout',
    url: "/hccf",
    templateUrl: hccfLayout
}, {
    name: 'routing.bootstrapContainer.hccfLayout.standard',
    url: "/standard",
    views: {
        header: {
            templateUrl: navigationContent
        },
        leftCol: {
            templateUrl: navStackedContent
        },
        rightCol: {
            templateUrl: mediaContent
        },
        footer: {
            templateUrl: wellContent
        }
    }
}
];


export default appListOfStates;