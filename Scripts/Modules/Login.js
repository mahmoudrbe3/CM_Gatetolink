$(document).ready(function () {
    $("#frm_login").submit(function (event) {
        var dataString;
        var action = $("#frm_login").attr("action");
        dataString = new FormData($("#frm_login").get(0));
        Ajax.AjaxCall(action, dataString, onAjaxRequestSuccess);
    });
});
var onAjaxRequestSuccess = function (result) {
    if (result.ResultFlag == "1")
        localStorage["qmmtkn"] = result.ResultTKN;
    else {
        var dv_error_message = document.getElementById("dv_error_message");
        if (dv_error_message) {
            var msg = "";
            if (result.Errors) {
                for (var i = 0; i < result.Errors.length; i++) {
                    msg += "<p>" + result.Errors[i].Value + "</p>";
                }
            }
            else
                msg = result.ResultMSG;
            dv_error_message.innerHTML = msg;
            dv_error_message.style.display = "";
        }
    }
}