var Vector = require('./vector.js'); // Including the vector class


// Simple operations
(function(){
    var a = new Vector(1, 2, 3);
    var b = new Vector(4, 5, 6);
    var c = new Vector();   // No arguments
    var d = a.add(b.add(c)); // Adding

    console.log(d.toString()); // To string
    b.copy(a); // Copy

    console.log(b.toString());
    a.addTo(b); // Add to

})();

// Length / Modulas
(function(){
    var a = new Vector(3, 3, 3);

    console.log(a.length());
})();

// Dot Prouct
(function(){
    var a = new Vector(1, 2, 3);
    var b = new Vector(4, 5, 6);

    console.log(a.dotProduct(b));
})();

// Angle between two vectors
(function(){
    var a = new Vector(1, 0, 0);
    var b = new Vector(0, 1, 0);

    console.log(a.angleInDegrees(b));
})();


// Scale scaleBy
(function(){
    var a = new Vector(1, 1, 1);

    console.log(a.scaleBy(5).toString());
})();

// Unit vector
(function(){
    var a = new Vector(1, 1, 1);
    var unitVectorA = a.unitVector();

    console.log(unitVectorA.toString());
    console.log(unitVectorA.length());  // Shows that the length is 1
})();

(function(){
    var a = new Vector(1, 1, 1);
    var b = new Vector(1, 2, 3);

    console.log(a.inDirOf(b).toString());
})();

// The cross product of a vector
(function(){
    var a = new Vector(1, 2, 1);
    var b = new Vector(1, 1, 1);

    console.log(a.crossProduct(b).toString());
})();

