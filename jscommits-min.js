(function(k){var h,m,g,l="https://github.com/api/v2/json/",e=function(a,c,n){for(var j=+new Date,e=document.createElement("script");void 0!==b.__jsonp_callbacks[j];)j+=Math.random();b.__jsonp_callbacks[j]=function(){delete b.__jsonp_callbacks[j];c.apply(n,arguments)};var i="?";0<=a.indexOf("?")&&(i="&");a+=i+"callback="+encodeURIComponent("gh.__jsonp_callbacks["+j+"]");h&&m&&(a+="&login="+h+"&token="+m);g&&(a+="&access_token="+g);e.setAttribute("src",l+a);document.getElementsByTagName("head")[0].appendChild(e)},
d=function(a,c){var b=document.createElement("form"),e=document.createElement("iframe");document.body.appendChild(e);var p=void 0!==e.contentDocument?e.contentDocument:e.contentWindow.document,i,d,c=c||{};b.setAttribute("method","post");b.setAttribute("action",l+a);for(i in c)if(c.hasOwnProperty(i))d=document.createElement("input"),d.type="hidden",d.value=encodeURIComponent(c[i]),b.appendChild(d);e.setAttribute("style","display: none;");p.body.appendChild(b);b.submit()},f=function(a){if((!h||!m||
h!==a)&&!g)throw new TypeError("gh: Must be authenticated to do that.");},o=function(a,c){return function(){var b=l;l=a;c.apply(this,arguments);l=b}},b=k.gh={};b.__jsonp_callbacks={};b.authenticate=function(a,c,b){h=a;m=c;g=b;return this};b.user=function(a){if(!(this instanceof b.user))return new b.user(a);this.username=a};b.user.prototype.show=function(a,c){e("user/show/"+this.username,a,c);return this};b.user.prototype.update=function(a){f(this.username);var c,b={login:h,token:m};for(c in a)a.hasOwnProperty(c)&&
(b["values["+c+"]"]=encodeURIComponent(a[c]));d("user/show/"+this.username,b);return this};b.user.prototype.following=function(a,c){e("user/show/"+this.username+"/following",a,c)};b.user.prototype.followers=function(a,c){e("user/show/"+this.username+"/followers",a,c)};b.user.prototype.follow=function(a){f.call(this);d("user/follow/"+a);return this};b.user.prototype.unfollow=function(a){f.call(this);d("user/unfollow/"+a);return this};b.user.prototype.watching=function(a,c){e("repos/watched/"+this.username,
a,c);return this};b.user.prototype.orgs=function(a,c){e("user/show/"+this.username+"/organizations",a,c);return this};b.user.prototype.allOrgRepos=function(a){f(this.username);e("organizations/repositories",a);return this};b.user.prototype.repos=function(a,c,n){b.repo.forUser(this.username,a,c,n);return this};b.user.prototype.allRepos=function(a,c){function n(f){0==f.repositories.length?a.call(c,{repositories:e}):(e=e.concat(f.repositories),i+=1,b.repo.forUser(d,n,c,i))}var e=[],d=this.username,i=
1;b.repo.forUser(d,n,c,i);return this};b.user.prototype.forkRepo=function(a,c){f(this.username);d("repos/fork/"+a+"/"+c);return this};b.user.prototype.pushable=function(a,c){f(h);e("repos/pushable",a,c)};b.user.prototype.publicGists=o("http://gist.github.com/api/v1/json/gists/",function(a,c){e(this.username,a,c);return this});b.user.search=function(a,c,b){e("user/search/"+a,c,b);return this};b.repo=function(a,c){if(!(this instanceof b.repo))return new b.repo(a,c);this.repo=c;this.user=a};b.repo.prototype.show=
function(a,c){e("repos/show/"+this.user+"/"+this.repo,a,c);return this};b.repo.prototype.update=function(a){f(this.user);var c,b={login:h,token:m};for(c in a)a.hasOwnProperty(c)&&(b["values["+c+"]"]=encodeURIComponent(a[c]));d("repos/show/"+this.user+"/"+this.repo,b);return this};b.repo.prototype.tags=function(a,c){e("repos/show/"+this.user+"/"+this.repo+"/tags",a,c);return this};b.repo.prototype.branches=function(a,c){e("repos/show/"+this.user+"/"+this.repo+"/branches",a,c);return this};b.repo.prototype.languages=
function(a,c){e("/repos/show/"+this.user+"/"+this.repo+"/languages",a,c);return this};b.repo.prototype.network=function(a,c){e("repos/show/"+this.user+"/"+this.repo+"/network",a,c);return this};b.repo.prototype.contributors=function(a,c,b){var j="repos/show/"+this.user+"/"+this.repo+"/contributors";b&&(j+="/anon");e(j,a,c);return this};b.repo.prototype.collaborators=function(a,c){e("repos/show/"+this.user+"/"+this.repo+"/collaborators",a,c);return this};b.repo.prototype.addCollaborator=function(a){f(this.user);
d("repos/collaborators/"+this.repo+"/add/"+a);return this};b.repo.prototype.removeCollaborator=function(a){f(this.user);d("repos/collaborators/"+this.repo+"/remove/"+a);return this};b.repo.prototype.setPrivate=function(){f(this.user);d("repo/set/private/"+this.repo);return this};b.repo.prototype.setPublic=function(){f(this.user);d("repo/set/public/"+this.repo);return this};b.repo.search=function(a,c,b,j){a="repos/search/"+a.replace(" ","+");"function"===typeof c&&(j=b=c={});var d,f="";for(d in c)c.hasOwnProperty(d)&&
(f+=d+"="+c[d]+"&");d=f.replace(/&$/,"");e(a+("?"+d),b,j);return this};b.repo.forUser=function(a,c,b,d){d||(d=1);e("repos/show/"+a+"?page="+d,c,b);return this};b.repo.create=function(a,c){f(h);c.name=a;d("repos/create",c);return this};b.repo.del=function(a){f(h);d("repos/delete/"+a);return this};b.commit=function(a,c,e){if(!(this instanceof b.commit))return new b.commit(a,c,e);this.user=a;this.repo=c;this.sha=e};b.commit.prototype.show=function(a,c){e("commits/show/"+this.user+"/"+this.repo+"/"+this.sha,
a,c);return this};b.commit.forBranch=function(a,c,b,d,f){e("commits/list/"+a+"/"+c+"/"+b,d,f);return this};b.commit.forPath=function(a,c,b,d,f,g){e("commits/list/"+a+"/"+c+"/"+b+"/"+d,f,g);return this};b.issue=function(a,c,e){if(!(this instanceof b.issue))return new b.commit(a,c,e);this.user=a;this.repo=c;this.number=e};b.issue.prototype.show=function(a,c){e("issues/show/"+this.user+"/"+this.repo+"/"+this.number,a,c);return this};b.issue.prototype.comments=function(a,c){e("issues/comments/"+this.user+
"/"+this.repo+"/"+this.number,a,c);return this};b.issue.prototype.close=function(){f(this.user);d("issues/close/"+this.user+"/"+this.repo+"/"+this.number);return this};b.issue.prototype.reopen=function(){f(this.user);d("issues/reopen/"+this.user+"/"+this.repo+"/"+this.number);return this};b.issue.prototype.update=function(a,c){f(this.user);d("issues/edit/"+this.user+"/"+this.repo+"/"+this.number,{title:a,body:c});return this};b.issue.prototype.addLabel=function(a){d("issues/label/add/"+this.user+
"/"+this.repo+"/"+a+"/"+this.number);return this};b.issue.prototype.removeLabel=function(a){d("issues/label/remove/"+this.user+"/"+this.repo+"/"+a+"/"+this.number);return this};b.issue.prototype.comment=function(a){f(h);d("/issues/comment/"+user+"/"+repo+"/"+this.number,{comment:a});return this};b.issue.labels=function(a,c){e("issues/labels/"+a+"/"+c,callback,context);return this};b.issue.open=function(a,c,b){f(h);d("issues/open/"+h+"/"+a,{title:c,body:b});return this};b.issue.search=function(a,c,
b,d,f,g){e("/issues/search/"+a+"/"+c+"/"+b+"/"+d,f,g);return this};b.issue.list=function(a,c,b,d,f){e("issues/list/"+a+"/"+c+"/"+b,d,f);return this};b.gist=function(a){if(!(this instanceof b.gist))return new b.gist(a);this.id=a};b.gist.prototype.show=o("http://gist.github.com/api/v1/json/",function(a){e(this.id,a,cont);return this});b.gist.prototype.file=o("http://gist.github.com/raw/v1/json/",function(a,c){e(this.id+"/"+a,c,cont);return this});b.object=function(a,c){if(!(this instanceof b.object))return new b.object(a,
c);this.user=a;this.repo=c};b.object.prototype.tree=function(a,c,b){e("tree/show/"+this.user+"/"+this.repo+"/"+a,c,b);return this};b.object.prototype.blob=function(a,c,b,d){e("blob/show/"+this.user+"/"+this.repo+"/"+c+"/"+a,b,d);return this};b.object.prototype.blobMeta=function(a,c,b,d){e("blob/show/"+this.user+"/"+this.repo+"/"+c+"/"+a+"?meta=1",b,d);return this};b.object.prototype.blobAll=function(a,c,b){e("blob/all/"+this.user+"/"+this.repo+"/"+a,c,b);return this};b.object.prototype.blobFull=function(a,
b,d){e("blob/full/"+this.user+"/"+this.repo+"/"+a,b,d);return this};b.network=function(a,c){if(!(this instanceof b.network))return new b.network(a,c);this.user=a;this.repo=c};b.network.prototype.data=o("http://github.com/",function(a,b,d,f,g){e(this.user+"/"+this.repo+"/network_data_chunk?"+a+"&"+b+"&"+d,f,g);return this});b.network.prototype.meta=o("http://github.com/",function(a,b){e(this.user+"/"+this.repo+"/network_meta",a,b);return this});b.pulls=function(a,c){if(!(this instanceof b.pulls))return new b.pulls(a,
c);this.user=a;this.repo=c};b.pulls.prototype.allPulls=function(a,b){e("pulls/"+this.user+"/"+this.repo,a,b);return this};b.pulls.prototype.forState=function(a,b,d){e("pulls/"+this.user+"/"+this.repo+"/"+a,b,d);return this};b.pulls.prototype.forNumber=function(a,b,d){e("pulls/"+this.user+"/"+this.repo+"/"+a,b,d);return this}})(window);if(!String.prototype.format)String.prototype.format=function(){var k=this;for(arg in arguments)k=k.replace(RegExp("\\{"+arg+"\\}","g"),arguments[arg]);return k};
(function(k){var h=function(g){var g=g.message,h=g.indexOf("\n");if(0>h||0===h)h=80;return g=g.substr(0,Math.min(80,g.length,h))},m=function(g){g=g.author.login;return g.substr(0,Math.min(20,g.length))};(k.jscommits={}).showCommits=function(g,l,e){var d=document.createElement("div"),f=document.createElement("div");d.className="jscommits-heading";e.className+=" jscommits-panel";d.innerHTML="Latest commits for <a href='https://www.github.com/{0}/{1}'>{1}</a> repository.".format(g,l);e.appendChild(d);
e.appendChild(f);gh.commit.forBranch(g,l,"master",function(e){for(var b=5<e.commits.length?5:e.commits.length,a=!1,c=0;c<b;c++){var d=e.commits[c],g=document.createElement("div"),k=document.createElement("span"),i=document.createElement("span");g.className=a?"jscommits-commit flip-color":"jscommits-commit";k.className="jscommits-message";i.className="jscommits-author";k.innerHTML="<a href='https://www.github.com/{0}/{1}/commit/{2}'>{3}</a>".format(d.author.login,l,d.id,h(d));i.innerHTML="<a href='https://www.github.com/{0}'>{1}</a>".format(d.author.login,
m(d));g.appendChild(i);g.appendChild(k);f.appendChild(g);a=!a}})}})(window);