/**
 * 
 * Popup service helps to show interactive popup modal/dialog window from plugin
 * 
 * @class org.ekstep.services.popupService
 * @author Sunil A S <sunils@ilimi.in>
 */
org.ekstep.services.popupService = new(org.ekstep.services.iService.extend({
    loadModules: undefined,
    openModal: undefined,
    initService: function(loadModuleFn, openModalFn) {
        this.loadModules = loadModuleFn;
        this.openModal = openModalFn;
    },
    /**
     *
     * loads HTML template and angular module 
     * @param templatePath {string} path to HTML template
     * @param controllerPath {string} path to angular module
     * @memberof org.ekstep.services.popupService
     */
    loadNgModules: function(templatePath, controllerPath) {
        templatePath = templatePath + '?' + ecEditor.getConfig('build_number');
        controllerPath = controllerPath + '?' + ecEditor.getConfig('build_number');
        this.loadModules && this.loadModules(templatePath, controllerPath);
    },
    /**
     *
     * opens popup modal/dialog window
     * @param config {object} config object refers to ngDialog open method parameter. please refer [ngDialog docs]{@link https://github.com/likeastore/ngDialog#openoptions}
     * @param callback {function} pre close Callback 
     * @memberof org.ekstep.services.popupService
     */
    open: function(config, callback) {
        /* istanbul ignore else */
        if (this.openModal) {
            this.openModal(config, callback);
            org.ekstep.services.telemetryService.interact({ "type": "click", "subtype": "open", "target": "popup", "pluginid": "", "pluginver": '', "objectid": "", "stage": ecEditor.getCurrentStage().id });
        }
    }
}));
