dmf.createModule('contact', function(c, config) {
    'use strict';

    var properties = {
        id: 'contact',
        selector: 'contact',
        listeners: {}
    };

    var elements;
    /******************************** module initialization *******************/

    function initialize() {
        elements = {
            'contact': document.getElementById('contact')
        };

        bindEvents();

        c.dom.addClass(elements.contact, 'visible');
        c.dom.removeClass(elements.contact, 'hidden');
    }

    function destroy() {
        c.dom.addClass(elements.contact, 'hidden');
        c.dom.removeClass(elements.contact, 'visible');
        unbindEvents();
    }

    function bindEvents() {
        

    }

    function unbindEvents() {
        
    }

    /******************************** ui handlers *****************************/

    /******************************** framework listeners *********************/
    /******************************** general functions ***********************/

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
