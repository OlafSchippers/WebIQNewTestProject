(function () {

    /**
     * replace module name with a custom name for the local-script.
     *
     * All local-script should be attached to the "custom.ls" package.
     * If more than one script is required for an application, a common root package
     * should be created (e.g. "custom.ls.customerName.*").
     */

    var MODULE_NAME = "HideContainer",
        ENABLE_LOGGING = false,
        RECORD_LOG = false,
        logger = shmi.requires("visuals.tools.logging").createLogger(MODULE_NAME, ENABLE_LOGGING, RECORD_LOG),
        fLog = logger.fLog,
        log = logger.log,
        module = shmi.pkg( MODULE_NAME );

    // MODULE CODE - START

    /* private variables */

    /* private functions */

    /**
     * Implements local-script run function.
     *
     * This function will be called each time a local-script will be enabled.
     *
     * @param {LocalScript} self instance reference of local-script control
     */
    module.run = function (self) {

        //Place your Code here
const im = shmi.requires("visuals.session.ItemManager");    //verwijzing naar de ItemManager
        const controlName = ".Header";                            //verwijzing naar de naam van de popup
        let PLC_Tag = "OpenPopupBOOL";                              //verwijzing naar de variabele die gebruikt wordt

        // Subscribe on change event
        OnPLCTagChange = im.subscribe([PLC_Tag], (name, value) => { //subscribe in the ItemManager de variabele "PLC_Tag"= OpenPopupBOOL
            // Do stuff
            if (value === 1) {                                      //waarde gelijk aan 1
                let containerH = shmi.core.item(controlName);                 //maak variabele popup aan die gekoppeld is aan de ctrl met de popupnaam
                containerH.hide();                                       //open de popup
            }
            else {
                let containerH = shmi.ctrl(controlName);                 //wordt de variabele anders 1 dan sluit de popup weer. 
                containerH.show();
            }

        });

        /* called when this local-script is disabled */
        self.onDisable = function () {
            self.run = false; /* from original .onDisable function of LocalScript control */
        };
    };


    // MODULE CODE - END

    fLog("module loaded");
})();
