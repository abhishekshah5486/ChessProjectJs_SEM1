var Piece = function(config){
    this.position = config.position;
    this.color = config.color;
    if(this.position){
        this.render();        
    }    
}
Piece.prototype.moveTo = function(targetPosition){
    console.log("Method not implemeted by: " + this.type);
}


Piece.prototype.attachListeners = function(){
    //To be implemented
}

Piece.prototype.render = function(){
    var col = this.position[0];
    var row = this.position[1];
    // Find the li element with matching data-col and data-row attributes
    var element = document.querySelector(`[data-col="${col}"] [data-row="${row}"]`);
    if (element) {  
        // Remove the existing piece element from the DOM if it exists
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        // Create a new div element to represent the piece
        var pieceElement = document.createElement('div');
        
        // Add classes to the new element for styling
        pieceElement.classList.add('piece', this.color, this.type);
        
        // Clear any existing content in the cell
        element.innerHTML = '';
        
        // Append the new piece element to the cell
        element.appendChild(pieceElement);
        this.$el = pieceElement;
        this.attachListeners();
    } else {
        console.warn(`Element not found for position: ${this.position}`);
    }
}

Piece.prototype.kill = function(targetPiece){
    if (targetPiece && targetPiece.$el && targetPiece.$el.parentNode){
        // Remove the target piece from the board
        targetPiece.$el.parentNode.removeChild(targetPiece.$el);

        let capturedArea = document.getElementById('captured-pieces');
        if (capturedArea)
        {
            capturedArea.appendChild(targetPiece.$el);
        }
        else {
            console.warn('Captured pieces area not found');
        }
    }
    else {
        console.warn('Target piece not found or already removed');
    }
}
