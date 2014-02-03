/*
	My vector class

	- Operators
	- Mathematics
	- Prints

*/

public class Vector{
	private double i = 0;
	private double j = 0;
	private double k = 0;

	public Vector(){
		i = 0;
		j = 0;
		k = 0;
	}

	public Vector(double i, double j, double k){
		this.i = i;
		this.j = j;
		this.k = k;
	}

	//Copies the values from the vector sent.
	public Vector(Vector rhs){
		this.i = rhs.i;
		this.j = rhs.j;
		this.k = rhs.k;
	}

	/*

		Vector Operators

	*/


	public Vector add(Vector rhs){
		return new Vector( this.i + rhs.i, this.j + rhs.j, this.k + rhs.k);
	}

	public Vector addTo(Vector rhs){
		this.i += rhs.i;
		this.j += rhs.j;
		this.k += rhs.k;
		return this;
	}

	//Copys the values of the Vector over
	public Vector copy(Vector rhs){
		this.i = rhs.i;
		this.j = rhs.j;
		this.k = rhs.k;
		return this;
	}

	/*

		Vector Mathematics

	*/


	//Scales the vector by a certain amount
	public Vector scaleBy(double scale){
		this.i *= scale;
		this.j *= scale;
		this.k *= scale;
		return this;
	}

	// Returns the length of a vector
	public double modulas(){
		return Math.sqrt( Math.pow(i, 2) + Math.pow(j, 2) + Math.pow(k, 2) );
	}

	// Returns a new vecotr with a modulas of 1 (unit vector)
	public Vector unitVector(){
		double modulas = this.modulas();
		double multiply_by = 1 / modulas;

		return new Vector( i * multiply_by, j * multiply_by , k *multiply_by);
	}

	// cos(0) = (a.b)/(|a|*|b|) 
	public double angleBetween(Vector rhs){
		return Math.acos(this.dotProduct(rhs) / (this.modulas() * rhs.modulas()))*180/Math.PI;
	}


	// Is implemented by,  (a . b)/(|b|^2) * b
	public Vector inDirOf(Vector rhs){
		Vector a = new Vector(this);
		Vector b = new Vector(rhs);
		
		double scaler = ( a.dotProduct(b) / Math.pow(b.modulas(),2) );

		return b.scaleBy(scaler);
	}

	public double dotProduct(Vector rhs){
		return (this.i * rhs.i) + (this.j * rhs.j) + (this.k * rhs.k);
	}


	/*

		Vector Printing

	*/

	public void display(){
		System.out.println("[i=" + i + ", j=" + j + ", k=" + k + "]");
	}
}