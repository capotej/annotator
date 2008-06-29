Controller('overlay',{
    "img click": function(params){
	var x = params.event.pageX + "px";
	var y = params.event.pageY + "px";
	$("#text_template").val("");
	$("#text_template").show();
	$("#text_template").css("position", "absolute");
	$("#text_template").css("top", y);
	$("#text_template").css("left", x);
	$("#text_template").attr("alt", y + "." + x);

    },

    "input keydown": function(params){
	if(params.event.keyCode == 13){
	    var text = $("#text_template").val();
	    var coords = $("#text_template").attr("alt").split('.');
	    var html = '<div class="text" style="position:absolute;top:' + coords[0] + ';left:' + coords[1] + ';">' + text + '</div>';
	    
	    $("#overlay").append(html);
	    $("#text_template").hide();
	
	}
    },

    "div.text click" : function(params){
	console.log("ass");
	var o = params.element;
	var text = $(o).text();
	var y = $(o).css("top");
	var x = $(o).css("left");
	$(o).remove();
	$("#text_template").val("");
	$("#text_template").show();
	$("#text_template").css("position", "absolute");
	$("#text_template").css("top", y);
	$("#text_template").css("left", x);
	$("#text_template").attr("alt", y + "." + x);

	$("#text_template").val(text);

    },

    "div.text mouseover" : function(params){
	var o = params.element;
	$(o).css("border", "1px dotted red");

    },

    "div.text mouseout" : function(params){
	var o = params.element;
	$(o).css("border", "none");

    }



});