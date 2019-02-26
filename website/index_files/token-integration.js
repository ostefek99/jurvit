/*
    CUA Token Generation
*/

if(typeof(squiz) === 'undefined'){
    var squiz = {
        fn: {}
    };
}


/*
    Functions
*/

// XMLHttpRequest helper function
squiz.fn.sendXHR = function(xhr_parameters){
    var xhttp = new XMLHttpRequest();
    var request_url = xhr_parameters['request_url'];
    var request_extras = xhr_parameters['request_extras'];
    var request_callback = xhr_parameters['request_callback'];

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            switch(this.status) {
                case 200:
                    request_callback(this.responseText, request_extras);
                    break;
                default:
                    request_callback(this.responseText, request_extras);
                    break;
            }
        }
    };

    xhttp.open('GET', request_url, true);
    xhttp.send();
};

// Get a token from CUA services to pass into integration point
squiz.fn.generateServerToken = function(event){
    var target = $(event.target);
    var parent = target.parents('.sq-generate-token');
    var request_template = parent.attr('data-template');
    var request_url = parent.attr('data-endpoint') + '?template=' + request_template;
    
    var xhr_parameters = {
        'request_url': request_url,
        'request_callback': squiz.fn.processServerToken,
        'request_extras': {
            'destination': parent.attr('data-destination')
        }
    }
    
    squiz.fn.sendXHR(xhr_parameters);
    
    return false;
};

// Analyse the token response from CUA services
squiz.fn.processServerToken = function(token_response, request_parameters){
    var destination = request_parameters['destination'] + "&token=" + token_response;
    
    window.location.href = destination;
};


/*
    Ready
*/

$(document).ready(function(){
    $('body').on('click', 'a[data-tokenise="true"]', squiz.fn.generateServerToken);
});
