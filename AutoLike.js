var random = Math.random()*(5000-1000+1)+10;
var likes = 0;        
function NB(){
    //next button
    var element = document.querySelector('svg[aria-label="Next"]')
    if(typeof(element) != 'undefined' && element != null){
        console.log('Element exists!');
        document.querySelector('svg[aria-label="Next"]').parentElement.parentElement.click();

        likes = likes + 1;
    } else{
        alert(`You Liked ${likes} likes post(s)`);
        clearInterval(likeBtn);
    }
}
var likeBtn = setInterval(like, random);
function like(){
//like button
    var element = document.getElementsByClassName('QBdPU rrUvL')
    if(typeof(element) != 'undefined' && element != null){
        var classes = document.getElementsByClassName('QBdPU rrUvL');
        var Rate = classes[0];
        Rate.click();
        setTimeout(function(){
            NB();
        }, random)
    } else{
        
    }
}
