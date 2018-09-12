$(document).ready(function() {
var url = 'https://abcnews.go.com/abcnews/topstories';
feednami.setPublicApiKey('079971e74bc2e96ce7a79414556266040e5c264e9259f9e1d20d568e2577168a')
feednami.load(url,function(result){
if(result.error) {
console.log(result.error);
} else {
var entries = result.feed.entries;
for(var i = 0; i < 11; i++){
var entry = entries[i];
 console.dir(entry);
 document.getElementsByClassName("blog-slider__code")[i].textContent=entry.date;
 document.getElementsByClassName("blog-slider__title")[i].textContent=entry.title;
 document.getElementsByClassName("blog-slider__text")[i].textContent=entry.summary.substring(0,175) + "...";
 document.getElementsByClassName("blog-slider__button")[i].href=entry.link;
//document.getElementsByClassName("img")[i].src=entry.image

}
}
});
});
