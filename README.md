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
 

#遞迴Recursion(簡稱自己呼叫自己相關程式)  
程式模組(module)
自己定義或別人寫好的程式包被導入當下的程式叫做模組  
java內稱為方法(method)  
可以無限向上呼叫  
簡單方法製作：
```
public class MyClass {
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
```
在定義一個for迴圈包，return放for外層，使迴圈回傳值。    
  
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
能遞迴都可以非遞迴方式處理  
非遞迴通常是LOOP結構  
|比較表|遞迴|非遞迴|
|:-:|:-:|:-:|
|需額外記憶體|V|X|
|簡單問題|V|V|
|困難問題|V簡潔，debug困難|醜，debug簡單|
|問題時間複雜度|same|same|
|設計|hard|easy|
  
遞迴有分直接遞迴與間接遞迴  
直接遞迴是自己叫自己  
間接遞迴是自己叫別人，別人在叫自己  

遞迴簡單範例：  
河內塔  
移動方式：  
一次般一個  
大的永遠在下面  
從第1根搬到第3根  
第2根暫放  

#樹
樹資料有分：樹根(root)最上層、內節點(interior need)樹根到葉節點之間、葉節點(leaf node)最外層
(樹根)O[a]-(內節點)口[b]-(葉節點)0[e]
          -(內節點)口[c]-(葉節點)0[f]
                       -(葉節點)0[g]
          -(內節點)口[d]-(內節點)口[h]-(葉節點)0[i]
                                    -(葉節點)0[j]
第0階、第1階、第2階、第3階
節點數10個   
f的祖先a、c
d的後代h、i、j
e的深度=2
二元樹(binary tree)：
二元樹中節點只會有0、1、2個
```
互斥二元樹 v.s. 沒有互斥二元樹
o                   o
|       |         |        |
口       口       口       口
|  |    | |       |  \/    |
0  0    0 0       0   0    0
```
