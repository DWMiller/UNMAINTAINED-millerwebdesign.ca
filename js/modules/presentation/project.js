dmf.createModule('projects', function(c, config) {
    'use strict';

    var properties = {
        id: 'projects',
        selector: 'projects',
        listeners: {}
    };

    var elements;
    /******************************** module initialization *******************/


    function initialize() {
        elements = {
            'project-list': document.getElementById('projects'),
            '$projects': $('.project')
        };

        hideProjectList();
        hideProjects();
        showProjectList();
        showProjects(0);

    }

    function destroy() {
        hideProjectList();
        hideProjects();   
    }

    /******************************** framework listeners *********************/
    /******************************** general functions ***********************/

    function hideProjectList() {
        c.dom.addClass(elements['project-list'], 'hidden');
        c.dom.removeClass(elements['project-list'], 'visible');
    }

    function hideProjects() {
        elements.$projects.hide();
    }

    function showProjectList() {
        c.dom.addClass(elements['project-list'], 'visible');
        c.dom.removeClass(elements['project-list'], 'hidden');
    }


    function showProjects(i) {
        if (i >= elements.$projects.length) {
            return;
        }

        elements.$projects.eq(i).show('slow');

        setTimeout(function() {
            showProjects(i + 1);
        }, 150);

    }

    return {
        properties: properties,
        initialize: initialize,
        destroy: destroy,
    };

});
