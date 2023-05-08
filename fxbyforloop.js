public class fxbyforloop {
    public static int f(int n){
        int z=0;
        for(int i=n;i>0;i--){
            z=z+i;
        }
        return z;
    }
    public static void main(String args[]) {
      System.out.println(f(10));
    }
}
