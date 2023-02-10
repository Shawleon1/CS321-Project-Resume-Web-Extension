chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tab){
      chrome.tabs.executeScript(tab.id,{code:"document.title = 'Testing!!'"});
   }
);