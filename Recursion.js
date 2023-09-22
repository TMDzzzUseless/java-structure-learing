public class Recursion {
    //費波那切數列[1,1,2,3,5,8,13....]
    //細胞分裂可以以fibo表示，起始1個細胞，1個月起使分2個，分裂後細胞休息，產出處列為費波那
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

    //連續乘積[s(n)=ans=1*3*5*7*...*(2n-3)*(2n-1)]
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

    public static int gcd(int m , int n){
        //宣告m1，n1
        int m1;
        int n1;
        //使m,n(m大，n小)
        if (m-n>=0){
            m1=m;
            n1=n;
      }
        else{
            m1=n;
            n1=m;
        }
        
        //這個是n=0，最大就m了
        if(n==0){ 
            return m;
        }
        //這個是n=1，最大公因數為1
        else if(n==1){ 
            return n;
        }
        //互相除，可找出最大公因數
        else{
            return gcd(n1,m1%n1);
        }
    }
    public static void main(String args[]) {
      System.out.println(gcd(15,50));
    }
}
