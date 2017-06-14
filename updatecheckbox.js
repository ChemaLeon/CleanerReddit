/*
MIT License

Copyright (c) 2017 Jose Maria Leon Azpiroz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#enableSidebarCheckbox').addEventListener('change', checkboxChanged);
	document.querySelector('#enableThumbnailsCheckbox').addEventListener('change', thumbnailsChanged);
	document.querySelector('#enableVoteArrowsCheckbox').addEventListener('change', voteArrowsChanged);
});

chrome.storage.sync.get(["ToggleSidebar"], function(items){
	var checkbox = document.getElementById("enableSidebarCheckbox");
	checkbox.checked = items["ToggleSidebar"];
});

chrome.storage.sync.get(["ToggleThumbnails"], function(items){
	var checkbox = document.getElementById("enableThumbnailsCheckbox");
	checkbox.checked = items["ToggleThumbnails"];
});

chrome.storage.sync.get(["ToggleVoteArrows"], function(items){
	var checkbox = document.getElementById("enableVoteArrowsCheckbox");
	checkbox.checked = items["ToggleVoteArrows"];
});

function checkboxChanged() {
	var checkbox = document.getElementById("enableSidebarCheckbox");
	chrome.storage.sync.set({ "ToggleSidebar": checkbox.checked });
	UpdateTab();
}

function thumbnailsChanged() {
	var checkbox = document.getElementById("enableThumbnailsCheckbox");
	chrome.storage.sync.set({ "ToggleThumbnails": checkbox.checked });
	UpdateTab();
}

function voteArrowsChanged() {
	var checkbox = document.getElementById("enableVoteArrowsCheckbox");
	chrome.storage.sync.set({ "ToggleVoteArrows": checkbox.checked });
	UpdateTab();
}

function ReloadTab() {
	chrome.tabs.query({ active: true,lastFocusedWindow: true },
	function(tabs) {
		var tab = tabs[0];
		if (tab.url.includes("reddit")) {
			var code = 'window.location.reload();';
			chrome.tabs.executeScript(tab.id, {code: code});
		}
	});
}

function UpdateTab() {
	chrome.tabs.query({ active: true,lastFocusedWindow: true },
	function(tabs) {
		var tab = tabs[0];
		if (tab.url.includes("reddit")) {
			var code = 'Update();';
			chrome.tabs.executeScript(tab.id, {code: code});
		}
	});
}