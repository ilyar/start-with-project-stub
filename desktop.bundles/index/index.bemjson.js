module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'head',
            content : [
                {
                    block : 'layout',
                    content : [
                        {
                            elem : 'left',
                            content : 'left here'
                        },
                        {
                            elem : 'right',
                            content : [
                                {
                                    block : 'logo',
                                    content : [
                                        {
                                            block : 'image',
                                            attrs : {
                                                src : '/desktop.blocks/logo/logo.png',
                                            }
                                        },
                                        {
                                            elem : 'slogan',
                                            content : 'A new way of thinking',
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                },
            ]
        },
    ]
};
