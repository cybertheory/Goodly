$(document).ready(function() {
var url = 'https://abcnews.go.com/abcnews/topstories';

feednami.setPublicApiKey('fe750122cf9fe06365da3de1ae3d070ea786da9d370b6d930adc8f6cb67671a7')
feednami.load(url,function(result){
if(result.error) {
console.log(result.error);
} else {
var entries = result.feed.entries;
for(var i = 0; i < 11; i++){
var entry = entries[i];
 console.dir(getData("LHAl30weEymshy6DHYOdfdNEuXStp1eN6C4jsnmqfdyVrLvlr0",encodeUrl(entry.summary)));
 console.dir(entry);
 document.getElementsByClassName("blog-slider__code")[i].textContent=entry.date;
 document.getElementsByClassName("blog-slider__title")[i].textContent=entry.title;
 document.getElementsByClassName("blog-slider__text")[i].textContent=entry.summary.substring(0,175) + "...";
 document.getElementsByClassName("blog-slider__button")[i].href=entry.link;

}
}
});
});
