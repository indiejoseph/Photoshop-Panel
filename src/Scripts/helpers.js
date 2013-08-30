//------------------ Helper functions ------------------//

function inspect(o) {
    if(o == undefined) return;
    var result = '';
    for(var i in o) {
        try {
            if(!o.hasOwnProperty (i) || typeof(o[i]) == 'undefined') continue;
            result += i + ': ' + o[i] + '\n';
        } catch (e) {
            $.writeln(e);
        }
    }
    return result;
}