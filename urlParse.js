/**
 * URL Parse
 * A quick URL parsing function for JavaScript
 * @version 0.4
 * @author Carl Saggs
 */
function urlParse(url){
	var self = {};
	//Store full url
	self.url = url;
	//array to store params
	self.QueryParams = new Array();
	//Use DOM to get URL basics
	self.a = document.createElement('a');
	self.a.href = url;
	//Parse Query String
	q_seg = self.a.search.substring(1).split('&');
	for(i=0; i<q_seg.length;i++){
		s = q_seg[i].split('=');
		self.QueryParams[s[0]] = s[1];
	}
	//Extract the Port
	self.port = url.split('/')[2].split(':')[1];
	
	//Return Protocol in use
	self.getProtocol = function(){
		return self.a.protocol;
	}
	//Return Host
	self.getHost = function(){
		return self.a.host.split(':')[0];//Remove the port from the end
	}
	//Return Port
	self.getPort = function(){
		//Assume default port if none is set
		return  (self.port == null)
				? ((self.getProtocol=='https:')?443:80) 
				: self.port; 
	}
	//Return Path
	self.getPath = function(){
		return self.a.pathname;
	}
	//Get full Query String
	self.getQueryString = function(){
		return self.a.search;
	}
	//Get Query String as Array
	self.getQueryArray = function(){
		return self.QueryParams;
	}
	//Get value of parameter in query string
	self.getQueryParam = function(x){
		return self.QueryParams[x];
	}
	//Return original URL
	self.getURL = function(){
		return self.url;
	}
	//Get Fragment
	self.getFragment = function(){
		return self.a.hash.substring(1);//Remove # from start
	}
	
	//Return self
	return self;
}