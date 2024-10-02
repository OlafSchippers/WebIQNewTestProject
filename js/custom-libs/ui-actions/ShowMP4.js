/**
 * Custom UI-Action 'ShowMP4'.
 *
 * Description:
 * [Add description here]
 */
(function() {
    var actions = shmi.pkg("visuals.session.userActions"); //get reference to userActions object

    /**
     * UI-Action 'ShowMP4' implementation
     *
     * @params {any[]} parameters  configured ui-action parameters
     * 
     */
    actions["ShowMP4"] = function(parameters) {
        //Place your code here
        let sIframe = "root.content.container.screen.PDF.container.iframe"; //parameters[0];
        let sSrc= "C:\ProgramData\WebIQ\WebIQ Projects\newtestproject\media\pdf\ScreenRec.mp4"//"media/pdf/ScreenRec.mp4"; //parameters[1];

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