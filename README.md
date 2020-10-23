# About it

This project is a small JSON-based web service.

## Techs

- Jest - for testing
- Node.js v10.20.0

## Access details

The API is comprised of a unique endpoint that returns a list of shows with DRM enabled and at least one episode. If invalid JSON data is sent in the request, the api returns an error message with HTTP status 400.

#### Example Request

```
POST http://ninecodingchallenge-env.eba-zuc36nkd.us-east-2.elasticbeanstalk.com/api/shows
```

```
{
    "payload": [
        {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        },
        {
            "slug": "show/seapatrol",
            "title": "Sea Patrol",
            "tvChannel": "Channel 9"
        }
    ]
}
```

Example of API Call:
```
curl --location --request POST 'http://ninecodingchallenge-env.eba-zuc36nkd.us-east-2.elasticbeanstalk.com/api/shows' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payload": [
        {
            "country": "UK",
            "description": "What'\''s life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        },
        {
            "slug": "show/seapatrol",
            "title": "Sea Patrol",
            "tvChannel": "Channel 9"
        }
    ]
}'
```

#### Response body

```
{
    "response": [
        {
            "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting"
        }
    ]
}
```


## Setup

You'll need Node.js installed on your computer in order to run this API locally.

```
git clone https://github.com/juliana-gru/coding-challenge-Nine.git
$ cd coding-challenge-Nine
$ npm install
$ npm start
```
