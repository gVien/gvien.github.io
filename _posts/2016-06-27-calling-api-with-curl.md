---
layout: post
title:  Making API Calls with cURL
date:   2016-6-27 18:30:00
technical: false
categories: CURL API Command-line
tags: CURL API Command-line
---

Last week, a startup asked me to build a restful patient care provider API as part of the interview process. While building the API, I needed a way to interact with and test the API through HTTP requests. There are currently many browser tools that supports this such [postman][postman], [Advanced REST client][Advanced REST client], etc. but I wanted to revisit and get more comfortable with [cURL][cURL]!

### What is [cURL][cURL]?

[cURL][cURL] is an open-source command line tool and library for transferring data using various protocols, such as HTTP, HTTPS, FTP, FILE, etc. I will only focus on transferring data over HTTP. Maybe I will expand this blog to cover another protocol in the future.

### Using [cURL][cURL] to Get, Post, Update, or Delete data

cURL supports all the HTTP requests including GET, POST, UPDATE (PUT), DELETE verbs. We will be fetching the API data at [https://gai-patient-care-api.herokuapp.com/api/v1/providers][patient-care-api]. I would recommend a [JSON Viewer][json-view] if the data don't make sense. Note I also did the extra work and built an AngularJS front end app to consume the API at [https://gai-patient-care-api.herokuapp.com][patient-care-front-end], but we won't be using that for this exercise.


Open your terminal and try these commands:<br/><br/>

#### GET Request
{% highlight bash %}
$ curl https://gai-patient-care-api.herokuapp.com/api/v1/providers
{% endhighlight %}

which should return the json results similar to below (although not as pretty as below)

By default, `curl` automatically selects which methods to use depending on the data being passed to curl. For example, passing in `-d` and then the data will tell curl that you want to make a POST or PUT request (more on that later). You can also use `-X` or `--request` option in `curl`.

{% highlight bash %}
$ curl -X GET https://gai-patient-care-api.herokuapp.com/api/v1/providers
{% endhighlight %}

which basically returns the same results but more semantic.


{% highlight json %}
[{
    "id": 9,
    "name": "Mills and Sons Care Center",
    "location": "Los Angelos, CA",
    "phone_number": "1-294-443-8107 x44946",
    "provides": ["Diabetes Care", "Dialysis", "Medication Management", "Outpatient Therapy", "Oxygen", "Physical Therapy", "Speech Therapy", "Wound Care"],
    "created_at": "2016-06-19T19:45:44.828Z",
    "updated_at": "2016-06-19T19:45:44.828Z"
}, {
    "id": 12,
    "name": "Hyatt, Homenick and Heaney Care Center",
    "location": "San Francisco, CA",
    "phone_number": null,
    "provides": ["Diabetes Care"],
    "created_at": "2016-06-19T19:45:44.920Z",
    "updated_at": "2016-06-19T19:45:44.920Z"
},
  .
  .
  .
]
{% endhighlight %}<br/>

#### POST Request
There are several ways to make a post requests. Note that the simple restful API accepts 4 parameters:

1. name (required)
2. location (required)
3. phone_number (optional)
4. provides (optional) - this is an array like structure. The provides options are limited to these options: Diabetes Care, Dialysis, Medication Management, Outpatient Therapy, OxygenPhysical Therapy, Speech Therapy, and Wound Care

It must be wrapped inside an object name `provider`. Examples below will do more justice. Note `-d` is short for `--data`

{% highlight bash %}
$ curl -d "provider[name]=Silicon Valley Provider" -d "provider[location]=Sunnyvale, CA" -d "provider[phone_number]=5103232323" -d "provider[provides][]=oxygen" https://gai-patient-care-api.herokuapp.com/api/v1/providers
{% endhighlight %}

or you can combine all the string using `&` syntax

{% highlight bash %}
$ curl -d "provider[name]=Silicon Valley Provider&provider[location]=Sunnyvale, CA&provider[phone_number]=5103232323&provider[provides][]=oxygen" https://gai-patient-care-api.herokuapp.com/api/v1/providers
{% endhighlight %}

or more semantically

{% highlight bash %}
$ curl -X POST -d "provider[name]=Silicon Valley Provider&provider[location]=Sunnyvale, CA&provider[phone_number]=5103232323&provider[provides][]=oxygen" https://gai-patient-care-api.herokuapp.com/api/v1/providers
{% endhighlight %}

which should return the following results if the post request is successful.

{% highlight json %}
{
    "provider": {
        "id": 20,
        "name": "Silicon Valley Provider",
        "location": "Sunnyvale, CA",
        "phone_number": "5103232323",
        "provides": ["Oxygen"],
        "created_at": "2016-06-29T00:27:43.240Z",
        "updated_at": "2016-06-29T00:27:43.240Z"
    },
    "message": "Provider created successfully"
}
{% endhighlight %}<br/>

#### UPDATE/PUT Request
Let's update the provider we just created earlier with `id` of `20` (or any id from the GET request). To update, use `PUT` after the request tagline `-X` and enter the data that you want to modify. This is very similar to the post request above.

{% highlight bash %}
$ curl -X PUT -d "provider[name]=Bay Area Provider" https://gai-patient-care-api.herokuapp.com/api/v1/providers/20
{% endhighlight %}

The server should return the updated json as shown below.

{% highlight json %}
{
    "id": 20,
    "name": "Bay Area Provider",
    "location": "Sunnyvale, CA",
    "phone_number": "5103232323",
    "provides": ["Oxygen"],
    "created_at": "2016-06-29T00:35:04.668Z",
    "updated_at": "2016-06-29T01:06:34.372Z"
}
{% endhighlight %}<br/>

#### DELETE Request
Finally, to delete a data point in our API, we simply use the `DELETE` verb after the request symbol `-X`.

{% highlight bash %}
$ curl -X DELETE https://gai-patient-care-api.herokuapp.com/api/v1/providers/20
{% endhighlight %}<br/>

#### HEAD
Before we wrap up this blog, I want to discuss the headers of the HTTP request. The `GET` method returns both the header and body but the header is usally hidden. We can ask the server to return the headers only for a GET method but without the body. In some cases, the information in the header may be useful such as the request status, content-length, content-type, etc. To request the headers for a GET method, include `--head` or `-I` option (I find it weird that the shortcut is `I`).

{% highlight bash %}
$ curl -X GET -I https://gai-patient-care-api.herokuapp.com/api/v1/providers/9
{% endhighlight %}

Which should return the following:

{% highlight bash %}
HTTP/1.1 200 OK
Connection: keep-alive
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Etag: W/"e60ccdf881d34efee477499e70ab1466"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8b89cd1d-26d7-4c2c-a9f1-781d2e09838f
X-Runtime: 0.005593
Server: WEBrick/1.3.1 (Ruby/2.2.4/2015-12-16)
Date: Wed, 29 Jun 2016 06:28:36 GMT
Content-Length: 335
Via: 1.1 vegur
{% endhighlight %}

If we want to include the headers, we need to include the tag `--include` or `-i`, which returns both the headers and body.

{% highlight bash %}
$ curl -X GET -i https://gai-patient-care-api.herokuapp.com/api/v1/providers/9
{% endhighlight %}

<br/><br/>
That's pretty much it about cURL. I hope you find it useful! Leave a comment below if you find mistakes or anything!


[postman]: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
[Advanced REST client]: https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US
[cURL]: https://curl.haxx.se/
[cURL-docs]: https://curl.haxx.se/docs/httpscripting.html
[patient-care-api]: https://gai-patient-care-api.herokuapp.com/api/v1/providers
[patient-care-front-end]: https://gai-patient-care-api.herokuapp.com
[json-view]: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en
<br/><br/><br/><br/>