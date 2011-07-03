UrlParse - A simple URL parser for JavaScript
---------------------
UrlParse aims to make extracting the part of a URL your interested in a more straightforward proccess.

To try it out use the demo.htm packaged alongside the urlParse.js code.

**Tested in:**
* Chrome (full)
* Firefox (full)
* IE 9 (CSS3 transitions are unsupported)

**Usage Examples:**
    //Usage Demo
    var test = urlParse("http://www.sub.domain.com:1337/test/sample.php?queryArg1=Hello&queryArg2=Goodby");
    alert(test.getQueryParam('queryArg2')); // "goodbye"
    alert(test.getPort()); // "1337"
    alert(test.getHost()); // "www.sub.domain.com"
    alert(test.getPath()); // "/test/sample.php"
    //Alterntive usage
    alert(urlParse("http://test.com:17/?a=Cake&b=Cheese").getQueryParam('a')); // "Cake"