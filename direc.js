function getParse(){
    var params = window.location.search.replace('?','').split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
    return params;
};

function checkAgParam(param, arr){
    if (!param) return 'default';
    var matchTarget = 'empty';
    var agArray = param.split('_');
    for (var i = 0; i<agArray.length; i++){
        for (j = 0; j<arr.length;j++){
            if (arr[j] == agArray[i]){
                matchTarget = arr[j];
            }
        }
    }
    return matchTarget;
}

