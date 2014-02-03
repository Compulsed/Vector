#include <iostream>
#include <cmath>
  
/* Can't seem to have these values as constants, lines 17 and 45, how come? */

class Vector{
private:
	double i;
	double j; 
	double k;
public:
	Vector() : i(0), j(0), k(0){}
	Vector(double a, double b, double c) : i(a), j(b), k(c){}

	double dot_product( const Vector& aVector ) const;
	double length() const;
	double angle_degrees( Vector& aVector ) const;
	Vector cross_product( const Vector& aVector) const;
	
	Vector operator+( const Vector& aRight ) const;
	Vector& operator+=( const Vector& aRHS );
	Vector& operator=( const Vector& aRHS );
	Vector& operator++();

	friend std::ostream& operator<<( std::ostream& output, const Vector& b );

};

/*
	Vector Methods
*/

Vector Vector::cross_product( const Vector& aVector ) const {
	return Vector(
		j * aVector.k - k * aVector.j,
		i * aVector.k - k * aVector.i,
		i * aVector.j - j * aVector.i
	);
}

double Vector::dot_product( const Vector& aVector ) const {
	return i * aVector.i + j * aVector.j + k * aVector.k;
}

double Vector::length() const {
	return sqrt(i * i + j * j + k * k);
}

double Vector::angle_degrees( Vector& aVector ) const {
	return (180 / 3.1415 ) * acos( dot_product(aVector) / ( length() * aVector.length()));
}

/*
	Vector Operator function
*/


Vector Vector::operator+( const Vector& aRight ) const {
	return Vector( i + aRight.i, j + aRight.j, k + aRight.k );
}

Vector& Vector::operator+=( const Vector& aRHS ){
	i += aRHS.i;
	j += aRHS.j;
	k += aRHS.k;
	return *this; 	// return this object (key to +=)
}

Vector& Vector::operator=( const Vector& aRHS ){
	i = aRHS.i;
	j = aRHS.j;
	k = aRHS.k;
	return *this; 	// return this object (key to =)
}

/*
	Vector IO functions
*/

std::ostream& operator<<( std::ostream& output, const Vector& b ){
	output << "[i=" << b.i<< ",j=" << b.j << ",k=" << b.k << "]";
	return output;
}

int main(){

	Vector a(1, 1, -1);
	Vector b(1, 10, 1);
	
	Vector c = a.cross_product(b);

	std::cout << "Crs product of c " << c << std::endl;
	std::cout << "Dot product of a " << a << " and b " << b << " is: " << a.dot_product(b) << std::endl;
	std::cout << "The length of a is " << a.length() << " and b is " << b.length() << std::endl;
	std::cout << "The angle between a & b is " << a.angle_degrees(b) << std::endl;
	return 1;
}

 //error
/*something.cpp: In member function Ôdouble Vector::angle_degrees(const Vector&)Õ:
something.cpp:47:54: error: passing Ôconst VectorÕ as ÔthisÕ argument of Ôdouble Vector::length()Õ discards qualifiers [-fpermissive]
*/