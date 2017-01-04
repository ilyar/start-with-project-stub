modules.define('box', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod : {
            'closed' : {
                'yes' : function () {
                    this.domElem.animate({
                        'margin-left' : '54em'
                    }, 1000);
                },
                '' : function () {
                    this.domElem.css({
                        'margin-left' : 'auto'
                    });
                }
            }
        }
    }));

});
