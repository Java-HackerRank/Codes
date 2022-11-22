import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int B = Integer.parseInt(br.readLine());
        int H = Integer.parseInt(br.readLine());

        if(validateBH(B,H)){
            try{
                if(B<=0 || H<=0)
                    throw new Exception();
                System.out.println(calculateArea(B,H));
            }
            catch(Exception e){
                System.out.println("java.lang.Exception: Breadth and height must be positive");
            }
        }
        else{
            System.out.println("Breadth and Height should be in range -100 to 100");
        }
    }

    public static boolean validateBH(int b, int h){
        if(b>=-100 && b<=100){
            if(h>=-100 && h<=100)
                return true;
            return false;
        }
        return false;
    }

    public static int calculateArea(int b, int h){
        return b*h;
    }
}