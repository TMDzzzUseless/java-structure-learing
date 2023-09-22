public class Recursion {
    //費波那切數列[1,1,2,3,5,8,13....]
    public static int fibo(int n){
      //這個是n==0或n==1
      if(n==0||n==1) 
            return n;
        else
            return fibo(n-1)+fibo(n-2);
    }
    public static void main(String args[]) {
      System.out.println(fibo(10));
    }

    //連續乘積[ans=1*3*5*7*...*(2n-3)*(2n-1)]
    public static int s(int n){
      //這個是n==0或n==1
      if(n==0||n==1) 
            return n;
        else
            return (2*n-1)*s(n-1);
    }
    public static void main(String args[]) {
      System.out.println(s(4));
    }
}
