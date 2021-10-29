

window.addEventListener('load', (event) => {

    var menu = document.addEventListener('.main-navigation-wrapper .menu');


    menu.querySelector('.burger').addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    
    
    document.getElementById('current-year').appendChild(document.createTextNode(new Date().getFullYear()))




}); // end windw onload

    // Landing page parallax on mousemove
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
            const x = (window.innerWidth - e.pageX*1) / 200;
            const y = (window.innerHeight - e.pageY*1) / 250;
            this.querySelector('#landing').style.backgroundPosition = `${x}% ${y}%`;
        
    }


// Get photos from instagram api

// !!! Chybí mi poslední step v tom tutorialu, přístupový údaje jsou v messengeru


/*
var token = 'IGQVJXVC1XVDhIOXJiWGs0UUh5aGFCRUxxX3BVVGVoODRNVTJlZAndBWUVOZAk5hSnZA5TmppQmJ4UkZABVHgyLXN0VEdzdlJPc0ZApZAVhsOE4tWUZAOOEk1VDdYSWt0TldIak1CbjAtYklMNW1Fa3l0MGZAfdgZDZD',
    num_photos = 9, // maximum 20
    container = document.getElementById( 'instafeed' ), // it is our <ul id="rudr_instafeed">
    scrElement = document.createElement( 'script' );
    
window.mishaProcessResult = function( data ) {
	for( x in data.data ){
		container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
	}
}

scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );

*/