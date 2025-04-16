var Ajax = {
    AjaxCall: function (ActionPath, Data, SuccessCallBack, ErrorCallBack, OtherParams) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var NewData = (Data.constructor == Function) ? Data() : Data;
        NewData.append("Token", localStorage["qmmtkn"]);
        $.ajax({
            type: "POST",
            url: (ActionPath.constructor == Function) ? ActionPath() : ActionPath,
            data: NewData,
            dataType: "json",
            contentType: false,
            processData: false,
            async: false,
            success: function (result) {
                // Result.
                if (SuccessCallBack)
                    SuccessCallBack(result);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (ErrorCallBack)
                    ErrorCallBack(jqXHR, textStatus, errorThrown);
                //do your own thing
                alert("fail");
            }
        });
    },
}