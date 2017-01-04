# API

### Content

#### GET /api/content/list/KeyIndicator/

Response

    [
        {
            "id": 1, 
            "number": 10, 
            "label": "projects", 
            "description": "have been successfully completed"
        }, 
        {
            "id": 2, 
            "number": 20000, 
            "label": "dollars", 
            "description": "have been earned"
        },
        ...
    ]
    
--
    
#### GET /api/content/list/AboutCompany/

Response

    [
        {
            "title": "Company", 
            "name": "name", 
            "phone": "78394839489384", 
            "address": "adress", 
            "about": "about", 
            "position": "position"
        },
        ...
    ]
    
--
    
#### GET /api/content/list/WorkItem/

Response

    [
        {
            "id": 1, 
            "url": [
                "/media/images_works/img1.jpg", 
                "/media/images_works/img2.jpg"
            ], 
            "title": "work1", 
            "description": "super project", 
            "category": "housetype1"
        }
    ]

--

#### GET /api/content/list/News/

Response

    [
        {
            "id": 2, 
            "title": "item of News 1", 
            "description": "description 1", 
            "dt": "2016-11-27 03:25", 
            "url": [
                "/media/images_news/O1kmKqw8Cvc.jpg"
            ],
            video_url: "http://..."
        },
        ...
    ]

--

#### GET /api/content/list/Comment/

Response

    [
        {
            "id": 1, 
            "title": "Comment1", 
            "description": "bla bla", 
            "dt": "2016-11-26 00:41", 
            "work_id": null
        },
        ...
    ]

--

### Requests

#### POST /api/request/make_calculation_request/

Params
 - name
 - phone
 - email

Response

    {
        "status": "saved",
        "calculation_request_id": 2
    }
    
--
    
#### POST /api/request/make_design_request/

Params
 - name
 - phone
 - email
 - description

Response

    {
        "status": "saved", 
        "design_request_id": 2
    }

--

#### GET /api/content/list/Video/

Response

    [
        {
            "id": 1, 
            "title": "\u0412\u0438\u0434\u0435\u043e 1", 
            "description": "", 
            "dt": "2017-01-04 13:13", 
            "video_url": "http://youtube.com/blablabla/"
        },
        ...
    ]

--
