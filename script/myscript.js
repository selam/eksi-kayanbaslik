(function(){
  $("<div id='title-wrapper' style='background:#ebebeb; width:695px;top:65px;z-index:1999;'><div id='title-container' style='background:#ebebeb; width:695px;'></div><div id='other-container' style='background:#ebebeb; width:695px;'></div></div>").prependTo("#topic");
  $("#topic #title").each(function(){
     var element = $(this).detach();
     $("#title-container").append(element);
  });
  $("#topic .pager:first,  #topic .sub-title-menu, #topic .aside-link, #topic a.showall.more-data:first").each(function(){
     var element = $(this).detach();
     $("#other-container").append(element);
  });
  $("#topic").css({"position": "relative"});
  $("#title-wrapper").css({"position": "fixed",
                           "-webkit-border-radius": "0px 0px 3px 3px",
                           "-moz-border-radius": "0px 0px 3px 3px",
                           "border-radius": "0px 0px 3px 3px"
                           });
  $("#entry-list").css({"margin-top": "115px"});
})();