var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "food",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                },
                {
                    x: 50,
                    y: 30
                },
                {
                    x: 55,
                    y: 35
                },
                {
                    x: 65,
                    y: 40
                }
            ]
        },
        {
            author: 'JhonConnor',
            name: 'phone',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                },
                
            ]
        },
        {
            author: 'JhonConnor',
            name: 'laptop',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                },
                
            ]
        },
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                },
                
            ]
        },
        {
            author: 'LexLuthor',
            name: 'tnt',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                },  
                {
                    x: 80,
                    y: 70
                },
                {
                    x: 50,
                    y: 60
                },
                {
                    x: 45,
                    y: 70
                },
                {
                    x: 90,
                    y: 75
                },    
            ]
        }
    ]

    return {
        getBlueprintsByAuthor:function(name, callback) {
            callback(
            mockdata[name]
            )
        },
        getBlueprintsByNameAndAuthor:function(autor,obra,callback){
            callback(
            mockdata[autor].filter(prueb => {return prueb.name === obra;})[0]
            );
        }
    }

})();