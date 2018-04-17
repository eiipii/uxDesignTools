import docTemplate from './views/docTemplate.html';
import directivesTemplate from './views/directivesTemplate.html';
import navigationTemplate from './views/navigationTemplate.html';
import routingTemplate from './views/routingTemplate.html';
import bootstrapRootTemplate from './views/bootstrapRootTemplate.html';
import column12Flow from './views/boot/colomn12Flow.html';
import column6x6Flow from './views/boot/column6x6Flow.html';
import column10x2Flow from './views/boot/column10x2Flow.html';
import hccfLayout from './views/layout/hccfLayout.html';
import hhccfLayout from './views/layout/hhccfLayout.html';
import navContentLayout from './views/layout/navContentLayout.html';

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

import onePageLinearNav from './views/nav/onePageLinear.html';
import byLinearContextNav from './views/nav/byLinearContextNav.html';

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
    name: 'layouts',
    url: "/layouts",
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
    name: 'layouts.hccfLayout',
    url: "/hccf",
    templateUrl: hccfLayout
}, {
    name: 'layouts.hccfLayout.standard',
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
}, {
    name: 'layouts.hccfLayout.color',
    url: "/color",
    views: {
        header: {
            template: '<img holder="holder.js/100px200?bg=#162955&fg=#7887AB">'
        },
        leftCol: {
            template: '<img holder="holder.js/100px200?bg=#c3f3ab&fg=#9cc288">'
        },
        rightCol: {
            template: '<img holder="holder.js/100px200?bg=#675E4C&fg=#4A5A42">'
        },
        footer: {
            template: '<img holder="holder.js/100px200?bg=#9D344B&fg=#EC9DAE">'
        }
    }
}, {
    name: 'layouts.navContent',
    url: "/navContent",
    templateUrl: navContentLayout
}, {
    name: 'layouts.navContent.color',
    url: "/color",
    views: {
        nav : {
            template: '<img holder="holder.js/100px400?theme=social&text=Navigation">'
        },
        content : {
            template: '<img holder="holder.js/100px800?theme=social&text=Content">'
        }
    }
}, {
    name: 'layouts.navContent.content',
    url: "/content",
    views: {
        nav : {
            templateUrl: navStackedContent
        },
        content : {
            templateUrl: mediaContent
        }
    }
}, {
    name: 'layouts.hhccfLayout',
    url: "/hhccf",
    templateUrl: hhccfLayout
}, {
    name: 'layouts.hhccfLayout.content',
    url: "/content",
    views: {
        menu: {
            templateUrl: navigationContent
        },
        header: {
            template: '<img holder="holder.js/100px100?theme=social&text=Header">'
        },
        leftCol: {
            templateUrl: mediaContent
        },
        rightCol: {
            templateUrl: navStackedContent
        },
        footer: {
            templateUrl: wellContent
        }
    }
}, {
    name: 'layouts.hhccfLayout.color',
    url: "/color",
    views: {
        menu: {
            template: '<img holder="holder.js/100px120?theme=social&text=Menu">'
        },
        header: {
            template: '<img holder="holder.js/100px120?theme=sky&text=Header">'
        },
        leftCol: {
            template: '<img holder="holder.js/100px500?theme=gray&text=LeftCol">'
        },
        rightCol: {
            template: '<img holder="holder.js/100px500?bg=#675E4C&fg=#4A5A42">'
        },
        footer: {
            template: '<img holder="holder.js/100px200?bg=#9D344B&fg=#EC9DAE">'
        }
    }
}, {
    name: 'navigation',
    url: "/navigation",
    templateUrl: navigationTemplate
}, {
    name: 'navigation.onePageLinear',
    url: "/onePageLinear",
    templateUrl: onePageLinearNav
}, {
    name: 'navigation.byLinearContext',
    url: "/byLinearContext",
    templateUrl: byLinearContextNav
}
];


export default appListOfStates;