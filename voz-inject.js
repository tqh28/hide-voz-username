
function updateUsernameByXpath(path) {
  var nodeValue = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  console.log(nodeValue);
  nodeValue.textContent = '';
}

chrome.storage.sync.get(['enabled'], function (result) {
  if (result.enabled == 'true') {
    updateUsernameByXpath("//div[@id='top']//nav[@class='p-nav']//div[@class='p-nav-opposite']//span[@class='p-navgroup-linkText']");
  }
});
