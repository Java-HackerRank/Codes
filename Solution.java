import java.io.*;
import java.util.*;

public class mixed {

    public static void main(String[] args) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        int i=0,a,b,n,c;
        Scanner scanner = new Scanner(System.in);
        
        int q = scanner.nextInt();
        if(q<0 || q>500){
            System.out.println("Number of queries must be in range 0 to 500 only");
            return;
        }
        String [] stringToPrint = new String[q];
        i=0;
        while(i<q){
            scanner.nextLine();
            a = scanner.nextInt();
            b = scanner.nextInt();
            n = scanner.nextInt();
            
            if(validateInputs(a,b,n)){
                stringToPrint[i] = "";
                c = a;
                for(int j=0;j<n;j++){
                    c += (Math.pow(2,j)*b);
                    stringToPrint[i] += String.valueOf(c) + " ";
                }
                i++;    
            }
            else{
                System.out.println("Exited with code: 1| Failed to validate inputs | a,b should be in range 0 to 50 inclusive | n should be in range 1 to 15 inclusive\n");
                break;
            }
        }
        for(i=0;i<q;i++){
            System.out.print(stringToPrint[i] + "\n");
        }
    }
    
    public static boolean validateInputs(int a, int b, int n){
        if(a>=0 && a<=50){
            if(b>=0 && b<=50){
                if(n>=1 && n<=15){
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }
}
