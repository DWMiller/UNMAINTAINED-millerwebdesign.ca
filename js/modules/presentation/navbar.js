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
            'about': document.getElementById('about-nav'),
            'projects': document.getElementById('projects-nav'),
        };

        bindEvents();
    }

    function destroy() {
        unbindEvents();
    }

    function bindEvents() {
        c.dom.listen(elements.about, 'click', navigate);
        c.dom.listen(elements.projects, 'click', navigate);
    }

    function unbindEvents() {
        c.dom.ignore(elements.about, 'click', navigate);
        c.dom.ignore(elements.projects, 'click', navigate);
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
