dmf.createModule('navigation', function(c, config) {
    'use strict';

    var properties = {
        id: 'navigation',
        listeners: {
            'nav-about-clicked': navigateToAbout,
            'nav-projects-clicked': navigateToProjects,
            'nav-contact-clicked': navigateToContacts
        }
    };

    function initialize() {
        c.startModules(['navbar']);
        navigateToAbout();
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

    function navigateToContacts() {
        stopAllPages();
        c.startModule('contact');
    }

    function stopAllPages() {
        c.stopModules(['about', 'contact', 'projects']);
    }

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
