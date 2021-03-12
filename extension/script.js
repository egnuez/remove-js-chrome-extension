function go(info){
	chrome.tabs.create({
		url: "https://remove-js.com/" + info.linkUrl
	})
}

chrome.contextMenus.create({
	title: "Browse through remove-js ", 
	contexts:["link"], 
	onclick: go
});
