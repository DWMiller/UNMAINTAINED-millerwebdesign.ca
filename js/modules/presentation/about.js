dmf.createModule('about', function(c, config) {
    'use strict';

    var properties = {
        id: 'about',
        selector: 'about',
        listeners: {}
    };

    var elements;
    /******************************** module initialization *******************/

    function initialize() {
        elements = {
            'about': document.getElementById('about')
        };

        bindEvents();

        c.dom.addClass(elements.about, 'visible');
        c.dom.removeClass(elements.about, 'hidden');
    }

    function destroy() {
        c.dom.addClass(elements.about, 'hidden');
        c.dom.removeClass(elements.about, 'visible');
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
