# java-structure-learing
JAVA LEARING  
//Java structure  
1. java basic "java基本語法"    
(1). 基本款   
```
public class MyClass {  
    public static void main(String args[]) {  
    }  
}  
/*其中：  
MyClass(這個是檔名，依檔名而變)  
    public static void main(String args[]) {  
        }
 

為基本結構是主程式  
*/  
``` 
(2). for 迴圈  
```
for (int i = 10; i > 0; i--) {  
    System.out.println(i);  
}  
```
(i)int i = 10;(ii)i > 0;(iii)i--  
(i)給定i初始值;(iii)i=i-1;(ii)當i > 0就繼續  
EX:  
```
public class MyClass {  
    public static void main(String args[]) { 
    int n=0;  
      for(int i=3;i>0;i--){  
          n=n+1;  
          System.out.println(n);  
      }  
    }  
} 
```
執行結果  
i=3時，執行n=0，使n=0+1=n=1，輸出1   
i=2時，執行n=1，使n=1+1=n=2，輸出2  
i=1時，執行n=2，使n=2+1=n=3，輸出3  
 



遞迴Recursion(簡稱自己呼叫自己)  
程式模組(module)
自己定義或別人寫好的程式包被導入當下的程式叫做模組  
java內稱為方法(method)  
可以無限向上呼叫  
簡單方法製作：
```
public class MyClass {  
    public int f(int n){  
        for(int i=n,i>0,i--){  
            i=i+1;  
            return i;  
        }  
    }
    //呼叫程式執行
    
}  
```
遞迴中最有名的問題即為費氏數列：  
0,1,1,2,3,5,8,13....  
在遞迴中有一般解與基本解  
一般解是指程式中的問題相關性的方程式解n  
f(n)=f(n-1)+(n-2)  
基本解是指程式中解題至最基本時的解，通常是n=0或1  
當n=0時ANS：0；n=1時ANS：1  
最後程式為  
```
public class MyClass {
    public static int fibo(int n){
        if(n==0||n==1)
            return n;
        else
            return fibo(n-1)+fibo(n-2);
    }
    public static void main(String args[]) {
      System.out.println(fibo(10));
    }
}
```

