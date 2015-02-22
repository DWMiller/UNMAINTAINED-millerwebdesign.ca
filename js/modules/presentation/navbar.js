dmf.createModule('navbar', function(c, config) {
    'use strict';

    var properties = {
        id: 'navbar',
        selector: 'navbar',
        listeners: {}
    };

    var elements;
    /******************************** module initialization *******************/

    function initialize() {
        elements = {
            'nav': document.getElementById('navbar'),
            'about': document.getElementById('nav-about'),
            'projects': document.getElementById('nav-projects'),
            'contact': document.getElementById('nav-contact')
        };

        bindEvents();
    }

    function destroy() {
        unbindEvents();
    }

    function bindEvents() {
        c.dom.listen(elements.nav, 'click', navigate);

    }

    function unbindEvents() {
        c.dom.ignore(elements.nav, 'click', navigate);
    }

    /******************************** ui handlers *****************************/

    function navigate(event) {
        var source = event.target;
        c.notify(event.target.id+'-clicked');
    }

    /******************************** framework listeners *********************/
    /******************************** general functions ***********************/

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
