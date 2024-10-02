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

        const param0 = parameters[0];
        const param1 = parameters[1];

        //get a reference to the Itemmanager (im)
        const im = shmi.requires("visuals.session.ItemManager");
        
        im.readDirect([param1], function(err, result){
        
            if (!err) {
                console.log(result[param1]);

                shmi.notify(param1 +"="+ result[param1]);
                    let sIframe = "root.content.container.screen.PDF.container.iframe"; //parameters[0];
                    let sSrc= "media/pdf/"+result[param1];
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





                }
                else {
                    shmi.notify("failed"+ err);
                }
            }
        );

/*
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
}());*/ }}());
