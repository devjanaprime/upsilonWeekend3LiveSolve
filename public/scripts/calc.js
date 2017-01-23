$( document ).ready( function(){
  $( '.operatorButton' ).on( 'click', function(){
    var type = $( this ).data( 'type' );
    console.log( 'operatorButton on click:', type );
    var objectToSend = {
      x: $( '#input0' ).val(),
      y: $( '#input1' ).val(),
      type: type
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    /// - TODO - ///
    //  ajax call to '/calculate' route
    // send objectToSend
    // display the answer on the DOM
    
  }); // end operatorButton on click
}); // end doc ready
