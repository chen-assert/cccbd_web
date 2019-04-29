$(document).ready(function () {
    $("#button1").click(function () {
        let mydata = new FormData();
        mydata.append("username", "testuser");
        mydata.append("password", "123456");
        $.ajax({
            url: 'https://cccbd.top:8443/RESTHello/login/send',
            data: urlencodeFormData(mydata),
            type: 'POST',
            xhrFields: {
                withCredentials: true
                //这个很重要,否则无法设置cookie
            },
            complete: function (jqXHR) {
                $("#result").html(jqXHR.responseText);
            },
            success:function () {

            },
            fail:function () {

            }
        });
    });
    $("#button2").click(function () {
        $.ajax({
            //url: 'https://cccbd.top:8443/RESTHello/hello/test',
            url: 'https://cccbd.top:8443/RESTHello/claim/new_claim',
            data: $("#form2").serialize(),
            type: 'POST',
            xhrFields: {
                withCredentials: true
            },
            complete: function (jqXHR) {
                $("#result2").html(jqXHR.responseText);
            }
        });
    });
});
function urlencodeFormData(fd){
    var params = new URLSearchParams();
    for(var pair of fd.entries()){
        typeof pair[1]=='string' && params.append(pair[0], pair[1]);
    }
    return params.toString();
}