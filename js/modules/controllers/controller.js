dmf.createModule('controller', function(c, config) {
    'use strict';

    var properties = {
        id: 'controller',
        listeners: {
            'state-startup': startup,
            'state-shutdown': shutdown,
            'state-restart': restart
        }
    };

    function initialize() {
        startup();
    }

    function destroy() {
        c.stopAllModules();
    }

    function startup() {
        c.startModules(['navigation']);
        c.notify('state-started');
    }

    function shutdown() {

        c.stopModules(['navigation']);
    }

    function restart() {
        shutdown();
        startup();
    }

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
