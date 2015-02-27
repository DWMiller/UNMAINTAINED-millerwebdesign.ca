dmf.createModule('navigation', function(c, config) {
    'use strict';

    var properties = {
        id: 'navigation',
        listeners: {
            'nav-about-clicked': navigateToAbout,
            'nav-projects-clicked': navigateToProjects,
        }
    };

    function initialize() {
        c.startModules(['navbar']);
        navigateToProjects();
    }

    function destroy() {
        c.stopModules(['navbar']);
    }

    /******************************** framework listeners *********************/

    function navigateToAbout() {
        stopAllPages();
        c.startModule('about');
    }

    function navigateToProjects() {
        stopAllPages();
        c.startModule('projects');
    }

    function stopAllPages() {
        c.stopModules(['about', 'projects']);
    }

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
