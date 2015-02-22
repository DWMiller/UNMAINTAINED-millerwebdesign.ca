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

    function initialize(scope) {
        startup();
    }

    function destroy() {
        c.stopAllModules();
    }

    function startup() {
        c.startModules(['navigation', 'projects']);
        c.notify('state-started');
    }

    function shutdown() {

        c.stopModules(['navigation', 'projects']);
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
