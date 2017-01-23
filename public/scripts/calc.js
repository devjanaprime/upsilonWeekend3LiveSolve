$( document ).ready( function(){

  $( '#clearButton').on( 'click', function(){
    console.log( 'in clearButton on click' );
    $( '#outputP' ).html( '0' );
    $( '#input0').val( '' );
    $( '#input1').val( '' );
  }); // end clearButton on click

  $( '.operatorButton' ).on( 'click', function(){
    var type = $( this ).data( 'type' );
    console.log( 'operatorButton on click:', type );
    var objectToSend = {
      x: $( '#input0' ).val(),
      y: $( '#input1' ).val(),
      type: type
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    //  ajax call to '/calculate' route
    // send objectToSend
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from server with:', response );
        // display the answer on the DOM
        $( '#outputP' ).html( response.number );
      }
    }); // end ajax

  }); // end operatorButton on click
}); // end doc ready
