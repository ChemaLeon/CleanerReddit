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

$(document).ready(function() {
  if ($('.neverEndingReddit').length) {
    // FIXME
    // User is using never ending reddit from RES. Check every half second for new elements, sorry world!
    window.setInterval(Update, 500);
  } else {
    // User is not using RES.
    Update();
  }
});

function Update(){
  chrome.storage.sync.get(["ToggleSidebar"], function(items){
    if (items["ToggleSidebar"]) {
      if (typeof $ !== 'undefined') { $('.side').hide();void(0); }
    } else {
      if (typeof $ !== 'undefined') { $('.side').show();void(0); }
    }
  });

  chrome.storage.sync.get(["ToggleThumbnails"], function(items){
  if (items["ToggleThumbnails"]) {
      if (typeof $ !== 'undefined') {
        $( ".thumbnail" ).each(function(index) {
          $(this).hide();
        });
      }
    } else {
      if (typeof $ !== 'undefined') {
        $( ".thumbnail" ).each(function(index) {
          $(this).show();
        });
      }
    }
  });

  chrome.storage.sync.get(["ToggleVoteArrows"], function(items){
  if (items["ToggleVoteArrows"]) {
      if (typeof $ !== 'undefined') {
        $( ".midcol" ).each(function(index) {
          $(this).hide();
        });
        $( ".rank" ).each(function(index) {
          $(this).hide();
        });
      }
    } else {
      if (typeof $ !== 'undefined') {
        $( ".midcol" ).each(function(index) {
          $(this).show();
        });
        $( ".rank" ).each(function(index) {
          $(this).show();
        });
      }
    }
  });
}
