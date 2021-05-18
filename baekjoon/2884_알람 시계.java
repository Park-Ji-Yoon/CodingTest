import java.util.Scanner;
public class Main{
	public static void main(String args[]) {
		int h, m;
		Scanner scan = new Scanner(System.in);
		System.out.print("");
		h = scan.nextInt();
		m = scan.nextInt();
		int minte = m-45;
		int hour = h;
		if(minte<0) {
			minte += 60;
            hour--;
            if(hour < 0){
                hour += 24;
            }
		}
		System.out.println(hour+" "+minte);
	}
}
