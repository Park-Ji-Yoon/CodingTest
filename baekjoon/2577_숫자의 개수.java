import java.util.Scanner;
public class Main{
	public static void main(String args[]) {
		int a, b, c;
		Scanner scan = new Scanner(System.in);
		a = scan.nextInt();
		b = scan.nextInt();
		c = scan.nextInt();
		int num = a*b*c;
		int []counts = new int[10];
		while(num>0) {
			counts[num%10]++;
			num/=10;
		}
		for(int i=0; i<counts.length; i++) {
			System.out.println(counts[i]);
		}
	}
}
