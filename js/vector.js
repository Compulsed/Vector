// Function constructor
var Vector = function (a, b, c) {
    this.i = 0;
    this.j = 0;
    this.k = 0;

    // 1D Vector
    if (arguments.length > 0) {
        this.i = a;
    }

    // 2D vector
    if (arguments.length > 1) {
        this.j = b;
    }

    // 3D vector
    if (arguments.length > 2) {
        this.k = c;
    }
};

// Returns the addition of one vector to the other
Vector.prototype.add = function add(otherVector) {
    return new Vector(
        this.i + otherVector.i,
        this.j + otherVector.j,
        this.k + otherVector.k
    );
};

// Scales the vector by a certain number
Vector.prototype.scaleBy = function scaleBy(multiplier) {
    this.i *= multiplier;
    this.j *= multiplier;
    this.k *= multiplier;

    return this;
};

// Returns the length of a given Vector
Vector.prototype.length = function length() {
    return Math.sqrt(
        this.i * this.i +
        this.j * this.j +
        this.k * this.k
    );
};

// Returns the dot project of the two vectors
Vector.prototype.dotProduct = function dotProduct(otherVector) {
    return (
        this.i * otherVector.i +
        this.j * otherVector.j +
        this.k * otherVector.k
    );
};

// Returns the angle between the two vectors
Vector.prototype.angleInDegrees = function angleInDegrees(otherVector) {
    return (
        (180 / Math.PI) *
        Math.acos(this.dotProduct(otherVector) / (this.length() * otherVector.length()))
    );
};

// Copies from one vector to the other
Vector.prototype.copy = function copy(from) {
    this.i = from.i;
    this.j = from.j;
    this.k = from.k;

    return this;
};

// Adds one Vector to the other
Vector.prototype.addTo = function addTo(to) {
    to.i += this.i;
    to.j += this.j;
    to.k += this.k;

    return to;
};

// Returns a new vecotr with a modulas of 1 (unit vector)
Vector.prototype.unitVector = function unitVector() {
    var length = this.length();
    var multiplyBy = 1 / length;

    return new Vector(
        this.i * multiplyBy,
        this.j * multiplyBy,
        this.k * multiplyBy
    );
};

// Is implemented by, (a . b)/(|b|^2) * b
Vector.prototype.inDirOf = function inDirOf(otherVector) {
    // Sumplified variable names
    var a = this;
    var b = otherVector;

    var scaler = (a.dotProduct(b) / (b.length() * b.length()));

    return b.scaleBy(scaler);
};

Vector.prototype.crossProduct = function crossProduct(otherVector) {
    return new Vector(
        this.j * otherVector.k - this.k * otherVector.j,
        this.i * otherVector.k - this.k * otherVector.i,
        this.i * otherVector.j - this.j * otherVector.i
    );
};

// Returns a string representation the object
Vector.prototype.toString = function toString() {
    return ('[I=' + this.i + ',J=' + this.j + ',K=' + this.k + ']');
};

module.exports = Vector; // Exports the module so it can be included