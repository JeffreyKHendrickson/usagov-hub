
function _getReport(reqId, noInit) {

    if ( noInit !== true ) {

        // Show a spinner
        var injectHtml = '\
            <div id="reportDownloadingUi">\
                <div style="  width: 110%; background-color: rgba(0,0,0,0.25); position: absolute; height: 110%; bottom: 0px; right: 0px;">\
                    <!-- this is the overlay -->\
                </div>\
                <div id="reportDownloadingUiText" style="background-color: white; border: 1px solid gray; position: absolute; margin-left: 33%; width: 33%; line-height: 25px; padding: 20px; top: 200px;">\
                    <span id="reportDownloadingUiProgress">\
                        <img style="float: left; padding-right: 10px" src="/sites/all/modules/contrib/taxonomy_manager/images/ajax-loader.gif" />\
                        Processing, please wait...\
                    </span>\
                    <span id="reportDownloadingUiComplete" style="display: none;">\
                        Report generation complete, you can <a download="asset_taxonomy_report.csv">download it now</a>, or <a href="javascript: jQuery(\'#reportDownloadingUi\').remove(); void(0);">close this window</a>.\
                    </span>\
                </div>\
            <div>\
        ';
        jQuery('body').append(injectHtml);
    }

    // Set the next AJAX call to a 10 second timeout
    jQuery.ajaxSetup({
        timeout: 10000 //Time in milliseconds
    });

    // Request the report
    var ajax = jQuery.get('/asset-topic-taxonomy-csv?reqid='+reqId, function (data) {
        if ( data == 'working' ) {
            console.log('The server is still building the report, waiting...');
            setTimeout('_getReport("'+reqId+'", true);', 3000);
        } else {
            jQuery('#reportDownloadingUiProgress').hide();
            jQuery('#reportDownloadingUiComplete').show();
            var csvData = new Blob([data], {type: 'text/csv;charset=UTF-8' });
            jQuery('#reportDownloadingUiComplete a').eq(0).attr('href', URL.createObjectURL(csvData));
            jQuery('#reportDownloadingUiComplete a').eq(0).click();
        }
    });
    ajax.ontimeout = ajax.onerror = ajax.onabort = function () {
        console.log('ajax failed, retrying...');
       _getReport(reqId, true);
    };

}


function _getSuperReport(reqId, noInit) {

    if ( noInit !== true ) {

        // Show a spinner
        var injectHtml = '\
            <div id="reportDownloadingUi">\
                <div style="  width: 110%; background-color: rgba(0,0,0,0.25); position: absolute; height: 110%; bottom: 0px; right: 0px;">\
                    <!-- this is the overlay -->\
                </div>\
                <div id="reportDownloadingUiText" style="background-color: white; border: 1px solid gray; position: absolute; margin-left: 33%; width: 33%; line-height: 25px; padding: 20px; top: 200px;">\
                    <span id="reportDownloadingUiProgress">\
                        <img style="float: left; padding-right: 10px" src="/sites/all/modules/contrib/taxonomy_manager/images/ajax-loader.gif" />\
                        Processing, please wait...\
                    </span>\
                    <span id="reportDownloadingUiComplete" style="display: none;">\
                        Report generation complete, you can <a download="super_asset_report.csv">download it now</a>, or <a href="javascript: jQuery(\'#reportDownloadingUi\').remove(); void(0);">close this window</a>.\
                    </span>\
                </div>\
            <div>\
        ';
        jQuery('body').append(injectHtml);
    }

    // Set the next AJAX call to a 10 second timeout
    jQuery.ajaxSetup({
        timeout: 10000 //Time in milliseconds
    });

    // Request the report
    var ajax = jQuery.get('/super_asset_report_csv?reqid='+reqId, function (data) {
        if ( data == 'working' ) {
            console.log('Super The server is still building the report, waiting...');
            setTimeout('_getSuperReport("'+reqId+'", true);', 3000);
        } else {
            jQuery('#reportDownloadingUiProgress').hide();
            jQuery('#reportDownloadingUiComplete').show();
            var csvData = new Blob([data], {type: 'text/csv;charset=windows-1252' });
            jQuery('#reportDownloadingUiComplete a').eq(0).attr('href', URL.createObjectURL(csvData));
            jQuery('#reportDownloadingUiComplete a').eq(0).click();
        }
    });
    ajax.ontimeout = ajax.onerror = ajax.onabort = function () {
        console.log(' Super ajax failed, retrying...');
        _getSuperReport(reqId, true);
    };

}

function _getFBOReport(reqId, noInit) {

    if ( noInit !== true ) {

        // Show a spinner
        var injectHtml = '\
            <div id="reportDownloadingUi">\
                <div style="  width: 110%; background-color: rgba(0,0,0,0.25); position: absolute; height: 110%; bottom: 0px; right: 0px;">\
                    <!-- this is the overlay -->\
                </div>\
                <div id="reportDownloadingUiText" style="background-color: white; border: 1px solid gray; position: absolute; margin-left: 33%; width: 33%; line-height: 25px; padding: 20px; top: 200px;">\
                    <span id="reportDownloadingUiProgress">\
                        <img style="float: left; padding-right: 10px" src="/sites/all/modules/contrib/taxonomy_manager/images/ajax-loader.gif" />\
                        Processing, please wait...\
                    </span>\
                    <span id="reportDownloadingUiComplete" style="display: none;">\
                        Report generation complete, you can <a download="FBO_Userinput.csv">download it now</a>, or <a href="javascript: jQuery(\'#reportDownloadingUi\').remove(); void(0);">close this window</a>.\
                    </span>\
                </div>\
            <div>\
        ';
        jQuery('body').append(injectHtml);
    }

    // Set the next AJAX call to a 10 second timeout
    jQuery.ajaxSetup({
        timeout: 10000 //Time in milliseconds
    });

    // Request the report
    var ajax = jQuery.get('/fbo-userinput-csv?reqid='+reqId, function (data) {
        if ( data == 'working' ) {
            console.log('The server is still building the FBO report, waiting...');
            setTimeout('_getFBOReport("'+reqId+'", true);', 3000);
        } else {
            jQuery('#reportDownloadingUiProgress').hide();
            jQuery('#reportDownloadingUiComplete').show();
            var csvData = new Blob([data], {type: 'text/csv;charset=UTF-8' });
            jQuery('#reportDownloadingUiComplete a').eq(0).attr('href', URL.createObjectURL(csvData));
            jQuery('#reportDownloadingUiComplete a').eq(0).click();
        }
    });
    ajax.ontimeout = ajax.onerror = ajax.onabort = function () {
        console.log('ajax failed FBO, retrying...');
        _getFBOReport(reqId, true);
    };

}