import java.util.Scanner;
public class Main{
	public static void main(String args[]) {
		int num;
		Scanner scan = new Scanner(System.in);
		num=scan.nextInt();
		int n=num;
		int count=0;
		do {
			num = num%10*10+(num/10+num%10)%10;
			count++;
		}while(n!=num);
		System.out.println(count);
	}
}
