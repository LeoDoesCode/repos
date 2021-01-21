$(function () {

    $('a').click(function () {
        if ($(this).data("id") == "editproj") {
            var id = "";
            id = this.title;
            var name = "";
            name = $("#pname" + id).text();
            var desc = "";
            desc = $("#pdesc" + id).text();
            var date = "";
            date = $("#pdate" + id).text();
            var day = date.substring(1, 3);
            var month = date.substring(4, 6);
            var year = date.substring(7, 11);

            var newdate = year + "-" + month + "-" + day;

            $("#editprojtitle").val(name);
            $("#editprojtext").val(desc);
            $("#editprojdate").val(newdate);
            $("#editprojid").val(id);
            
        }
        else if ($(this).data("id") == "editskill") {
            var id = "";
            id = this.id;
            console.log(id);

            $("#editskillimg").attr("src", "/Resources/SkillsIMG/" + id + ".png");
            $("#editskillid").val(id);
            $("#lbeditlevel").val(level);

        }
        else if ($(this).data("id") == "editnote") {
            var id = "";
            id = this.title;
            var name = "";
            name = $("#nname_" + id).text();
            var desc = "";
            desc = $("#fulldesc_" + id).text();

            $("#editnotetitle").val(name);
            $("#editnotetext").val(desc);
            $("#editnoteid").val(id);
        }

    });


});

