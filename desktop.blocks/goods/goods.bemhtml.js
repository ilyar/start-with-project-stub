block('goods')(
    tag()('ul'),

    content()(function () {
        return this.ctx.goods.map(function (item) {
            return [
                {
                    elem : 'item',
                    elemMods : { new : item.new && 'yes' },
                    mix : [
                        {
                            block : 'box',
                        },
                    ],
                    content : [
                        {
                            elem : 'title',
                            content : item.title
                        },
                        {
                            elem : 'image',
                            url : item.image
                        },
                        {
                            elem : 'price',
                            content : {
                                block : 'link',
                                mix : [{ block : 'goods', elem : 'link' }],
                                url : item.url,
                                content : item.price
                            }
                        }
                    ]
                },
                ' '
            ];

        });

    }),

    elem('item')(
        tag()('li')
    ),

    elem('title')(
        tag()('h3')
    ),

    elem('image')(
        tag()('img'),

        attrs()(function () {
            return { src : this.ctx.url };
        })
    ),

    elem('price')(
        tag()('span')
    )
);
