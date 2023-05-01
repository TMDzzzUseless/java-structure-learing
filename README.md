# java-structure-learing
JAVA LEARING  
//Java structure  
1.java basic "java基本語法"  
/*  
(1)  
public class MyClass {  
    public static void main(String args[]) {  
    }  
}  
MyClass(這個是檔名，依檔名而變)  
    public static void main(String args[]) {  
        }  
為基本結構是主程式  
*/  
/*  
(2)for 迴圈  
for (int i = 10; i > 0; i--) {  
    System.out.println(i);  
}  
(i)int i = 10;(ii) i > 0;(iii) i--  
(i)給定i初始值;(iii) i=i-1;(ii)當i > 0就繼續  
EX:  
public class MyClass {  
    public static void main(String args[]) { 
    int n=0;  
      for(int i=3;i>0;i--){  
          n=n+1;  
          System.out.println(n);  
      }  
    }  
} 
執行結果  
i=3時，執行n=0，使n=0+1=n=1，輸出1   
i=2時，執行n=1，使n=1+1=n=2，輸出2  
i=1時，執行n=2，使n=2+1=n=3，輸出3  
*/  
