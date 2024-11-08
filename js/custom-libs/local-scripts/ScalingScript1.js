(function () {

    /**
     * replace module name with a custom name for the local-script.
     *
     * All local-script should be attached to the "custom.ls" package.
     * If more than one script is required for an application, a common root package
     * should be created (e.g. "custom.ls.customerName.*").
     */

    var MODULE_NAME = "ScalingScript1",
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
        
        const PLC_InputTag = "TestInt";                     //--> de PLC variabele
        const PLC_OutputTag = "virtual:InputFloat";         //--> de virtuele variabele
        let value1                                          //tussen variabele

        // Subscribe on change event
        OnPLCTagChange = im.subscribe([PLC_InputTag], (name, value) => { 
            // Do stuff
            
            value1 = value / 10;
            
            im.writeValue([PLC_OutputTag] , value1, function(err, result){
                if (!err) {
                    //shmi.notify("succes"); //--> ter test ingebouwd
                }
                else {
                    shmi.notify("failed, probably to many digits, only 1 digit allowed" + err);
                }
            })
            //shmi.notify("value is " + value1); //--> ter test ingebouwd
        });


        /* called when this local-script is disabled */
        self.onDisable = function () {
            if (OnPLCTagChange != null)
                OnPLCTagChange.unlisten();


            self.run = false; /* from original .onDisable function of LocalScript control */
        };
    };


    // MODULE CODE - END

    fLog("module loaded");
})();
