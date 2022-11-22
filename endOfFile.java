import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = 0;
        ArrayList<String> inputStrings = new ArrayList<String>();

        while(scanner.hasNext()){
            inputStrings.add(scanner.nextLine());
            count++;
        }

        Iterator itr = inputStrings.iterator();
        int i = 0;
        while(itr.hasNext()){
            System.out.println(i+1 + " " + itr.next());
            i++;
        }
            
    }
}