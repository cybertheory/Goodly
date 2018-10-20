function getData(yourUrl, key)
{
var xhr = new XMLHttpRequest();
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);

        return data;
    }

    // end of state change: it can be after some time (async)
};

xhr.open('GET', yourUrl, true);
xmlHttp.setRequestHeader("X-Mashape-Key",key);
xmlHttp.setRequestHeader("Accept","application/json");
xhr.send();
}
