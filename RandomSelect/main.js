var pic = [
    "https://cfshopeetw-a.akamaihd.net/file/89a29bc523fa259e4d37a9a2ffa7b5d3_tn",
    "https://cf.shopee.tw/file/14a5cfa0faa014eb9d278918f1919238",
    "http://g.search3.alicdn.com/img/bao/uploaded/i4/i4/2829417782/O1CN01JLssx527MCg6LomSL_!!2829417782.jpg",
    "https://cf.shopee.tw/file/843d2dd1a621c7bba9b700f343104181",
    "https://img.alicdn.com/imgextra/i1/56760888/TB2_UWCd0HO8KJjSZFLXXaTqVXa_!!56760888.jpg"
]

$(document).ready(function() {
    $("input").click(function()
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 250);
    });
});