jQuery(document).ready(function($) {
    // Functions
    // Toggles the visibility of the modals
    function toggleVisibility() {
        if(!$('#trailer').hasClass('hidden')) {
            $('.opacity').addClass('hidden');
            $('#trailer').addClass('hidden');            
        }
    }

    // When you click the synopsis button, removes the class hidden of the modal
    $('#btnSynopsis').click(function() {
        $('.opacity').removeClass('hidden');
        $('#synopsis').removeClass('hidden');
    });

    // When you click the trailer button
    $('#btnTrailer').click(function() {
		$('#trailerYoutube')[0].innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_9UeVB0Ytw8" frameborder="0" allowfullscreen></iframe>';
        $('.opacity').removeClass('hidden');
        $('#trailer').removeClass('hidden');
    })

    // When you click the arrow, hides the modal
    $('.btn-close').click(function() {
        toggleVisibility();
		$('#trailerYoutube')[0].innerHTML = '';
    })

    // When you click the opacity the modal hides
    $('.opacity').click(function() {
        toggleVisibility();
		$('#trailerYoutube')[0].innerHTML = '';
    })
});