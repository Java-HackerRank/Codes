import java.io.*;
import java.util.*;

public class Solution{

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        try{
            String s = String.valueOf(n);    
            System.out.println("Good job");
        }
        catch(Exception e){
            System.out.println("Wrong answer");
        }
        
    }
}