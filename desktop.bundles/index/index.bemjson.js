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
                            content : {
                                tag : 'form',
                                attrs : { action : 'https://yandex.ru/yandsearch' },
                                content : [
                                    {
                                        block : 'input',
                                        name : 'text',
                                        val : 'Find',
                                    },
                                    {
                                        block : 'button',
                                        mods : { type : 'submit' },
                                        content : 'Search',
                                    },
                                ]
                            }
                        },
                        {
                            elem : 'right',
                            content : [
                                {
                                    block : 'logo',
                                    content : [
                                        {
                                            block : 'link',
                                            url : 'https://bem.info/platform/tutorials/start-with-project-stub/',
                                            content : [
                                                {
                                                    block : 'image',
                                                    attrs : { src : '/desktop.blocks/logo/logo.png' }
                                                },
                                                {
                                                    elem : 'slogan',
                                                    content : 'A new way of thinking',
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]
};
