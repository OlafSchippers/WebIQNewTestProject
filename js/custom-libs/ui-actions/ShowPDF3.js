/**
 * Custom UI-Action 'ShowPDF3'.
 *
 * Description:
 * [Add description here]
 */
(function() {
    var actions = shmi.pkg("visuals.session.userActions"); //get reference to userActions object

    /**
     * UI-Action 'ShowPDF3' implementation
     *
     * @params {any[]} parameters  configured ui-action parameters
     * ---- Initial parameters, needs to be updated manually when changed ----
     * @param {string} parameters[0]  Folder
     * @param {string} parameters[1]  File
     *
     */
    actions["ShowPDF3"] = function(parameters) {
        //Place your code here
        let sIframe = "root.content.container.screen.PDF.container.iframe"; //parameters[0];
        let sSrc= parameters[0]+parameters[1];
        //"media/pdf/X2 brochure.pdf"
        let ctrl = shmi.ctrl(sIframe); // find the 1st element with matching name
        // to find out the full name of the ctrl look into ctrl.name
        // For more info see: Widget Name
        // https://www.smart-hmi.com/user/download/deliver/docs/documentation-dev-visuals-widget-naming-2.12-6134/index.html
        if ((ctrl) && (ctrl.uiType == "iframe")) {
            ctrl.vars.iframe.setAttribute("src", sSrc);
        } else {
            alert(`Iframe with name "${sIframe}" not found`);
        }

    };
}());