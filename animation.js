 $.fn.animation = function(jcont,anims,loop,cb) {
    if (jcont.length < 1) return false;
    if (!jcont.hasClass("animated")) jcont.addClass("animated");   
    var a = 0;
    var total = anims.length;
    jcont.addClass(anims[a]);
    jcont.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        nextAnim();  
    });
    function nextAnim() {
        if (typeof(anims[a]) == "undefined") {
            return false;
        }
        jcont.removeClass(anims[a]);
        a++;
        if (a>total-1) {
            if (loop) {
                a = 0;
            } else {
                jcont.removeClass("animated");
                jcont.off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
                if (typeof(cb) == "function") {
                    cb();
                }
            }
        }
        if (a<total) {
            jcont.addClass(anims[a]);
        }
    }
    return false;
};
