$(document).ready(function() {
var url = 'https://abcnews.go.com/abcnews/topstories';
feednami.setPublicApiKey('96bacc26d5d4290ce16dfe16a95b8e282d9ae804a098cf5e049da5020980a8d2')
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
