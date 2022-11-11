
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("enablePluginSelect").onchange = enablePluginOnChange;
  chrome.storage.sync.get(['enabled'], function (result) {
    document.getElementById("enablePluginSelect").value = result.enabled;
  });

});

function enablePluginOnChange() {
  var value = document.getElementById("enablePluginSelect").value;

  chrome.storage.sync.set({ enabled: value }, function () {
    if (value === 'true') {
      alert('Đã nhớ lựa chọn. Hí hí!');
    } else {
      alert('Thím thật mạnh mẽ!!!');
    }
  });
}
