/**
 * URL Parse
 * A quick URL parsing function for JavaScript
 * @version 0.3
 * @author Carl Saggs
 */
function urlParse(url){
	//Store full url
	this.url = url;
	//array to store params
	this.QueryParams = new Array();
	//Use DOM to get URL basics
	this.a = document.createElement('a');
	this.a.href = url;
	//Parse Query String
	q_seg = this.a.search.substring(1).split('&');
	for(i=0; i<q_seg.length;i++){
		s = q_seg[i].split('=');
		this.QueryParams[s[0]] = s[1];
	}
	//Extract the Port
	this.port = url.split('/')[2].split(':')[1];
	
	//Return Protocol in use
	this.getProtocol = function(){
		return this.a.protocol;
	}
	//Return Host
	this.getHost = function(){
		return this.a.host.split(':')[0];//Remove the port from the end
	}
	//Return Port
	this.getPort = function(){
		//Assume default port if none is set
		return  (this.port == null)
				? ((this.getProtocol=='https:')?443:80) 
				: this.port; 
	}
	//Return Path
	this.getPath = function(){
		return this.a.pathname;
	}
	//Get full Query String
	this.getQueryString = function(){
		return this.a.search;
	}
	//Get Query String as Array
	this.getQueryArray = function(){
		return this.QueryParams;
	}
	//Get value of parameter in query string
	this.getQueryParam = function(x){
		return this.QueryParams[x];
	}
	//Return original URL
	this.getURL = function(){
		return this.url;
	}
	//Get Fragment
	this.getFragment = function(){
		return this.a.hash.substring(1);//Remove # from start
	}
	
	//Return self
	return this;
}