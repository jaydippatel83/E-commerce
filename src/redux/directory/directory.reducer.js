const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
            size: 'larger',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://scontent.famd5-1.fna.fbcdn.net/v/t1.0-9/38052268_1871445012949118_4465250701903134720_o.jpg?_nc_cat=110&_nc_ohc=HI5V96GAJ1cAQmNgtLmoMz_6N-bTAdiz-X88t_5kCBXvCU2YQVZ2AwWnw&_nc_ht=scontent.famd5-1.fna&oh=0900885d82dc15a0ed7d3c38a95a7124&oe=5ED7C5E3',
            size: 'larger',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer =(state= INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
};
export default directoryReducer;