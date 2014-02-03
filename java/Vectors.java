public class Vectors{

	public static void main(String[] args){
		Vector a = new Vector(1, 1, 1);
		Vector b = new Vector(1, 2, 1);
		Vector aInDirB = a.inDirOf(b);

		Vector c = new Vector(b);
		c.display();
	}
	
}