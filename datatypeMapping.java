import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) throws IOException{
        /*
            A byte is an 8-bit signed integer.
            A short is a 16-bit signed integer.
            An int is a 32-bit signed integer.
            A long is a 64-bit signed integer.
        */
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int i = 0;
        String numberIp = "";
        int size = Integer.parseInt(br.readLine());
        long l;
        while(i<size){
            try{ 
                numberIp = br.readLine();  
                l = Long.parseLong(numberIp);
                System.out.println(l + " can be fitted in:");
                if(l>=-128 && l<=127)System.out.println("* byte");
                if(l>=-32768 && l<=32767)System.out.println("* short");
                if(l>=(Math.pow(-2,31)) && l<=(Math.pow(2,31)-1))System.out.println("* int");
                if(l>=(Math.pow(-2,63)) && l<=(Math.pow(2,63)-1))System.out.println("* long");
            }
            catch(Exception e){
                System.out.println(numberIp + " can't be fitted anywhere.");
            }
            i++;
        }
    }
}
