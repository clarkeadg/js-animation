$.fn.animation = function(anims,loop,cb) {
    jcont = $(this);
    if (jcont.length < 1) return false;
    if (!jcont.hasClass("animated")) jcont.addClass("animated");   
    if (loop) {
        //if (!jcont.hasClass("infinite")) jcont.addClass("infinite");   
    }
    var a = 0;
    var total = anims.length;
    jcont.addClass(anims[a]);
    jcont.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        console.log("ended");
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
            console.log("start anim",anims[a]);
            jcont.addClass(anims[a]);
        }
    }
    return false;
};
