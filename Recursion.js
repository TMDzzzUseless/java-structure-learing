public class MyClass {
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
}
