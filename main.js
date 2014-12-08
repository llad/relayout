
spark.on('listDevices', function(err, devices) {
    console.log('Devices: ', devices);
    console.log('Error: ', err);
    //todo: show devices to user, let them pick one to apply relay logic to
});

// spark.on('login', function() {
//     var devicesPr = spark.listDevices();
//
//     // devicesPr.then(
//     //     function(devices){
//     //         console.log('Devices: ', devices);
//     //     },
//     //     function(err) {
//     //         console.log('List devices call failed: ', err);
//     //     }
//     // );
// });


if (localStorage.getItem("access_token") === null) {
    sparkLogin(function(data) {
        localStorage.access_token = data.access_token;
        spark.listDevices();
        //todo: need to hide login button
    });
}
else {
    console.log("login with access token");
    spark.login({accessToken: localStorage.access_token}, function(err,body){
        console.log(err);
        spark.listDevices();
    });
}
