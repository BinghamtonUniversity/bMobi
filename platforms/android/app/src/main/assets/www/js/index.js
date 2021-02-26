document.addEventListener('deviceready', onDeviceReady, false);

var network_status = 'online';
function onDeviceReady() {
    if (navigator.connection.type !== Connection.NONE) {
        window.location = 'https://www.binghamton.edu/communications-and-marketing/what-we-do/bmobi/index.html';
    } else {
        alert("For Best Experience, bMobi Requires an Internet Connection!");
    }
    document.addEventListener("offline", function(e){
        if (network_status === 'online') {
            alert("For Best Experience, bMobi Requires an Internet Connection!");
            network_status = 'offline';
        }
    }, false);  
    ocument.addEventListener("online", function(e){
        network_status = 'online';
    }, false);
}
