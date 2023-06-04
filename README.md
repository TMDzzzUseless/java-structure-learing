# java-structure-learing
JAVA LEARING  
//Java structure  
*1. java basic "java基本語法"*    
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
 

*遞迴Recursion(簡稱自己呼叫自己相關程式)*  
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
  
*遞迴有分直接遞迴與間接遞迴*  
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
```
(樹根)O[a]-(內節點)口[b]-(葉節點)0[e]  
          -(內節點)口[c]-(葉節點)0[f]  
                       -(葉節點)0[g]  
          -(內節點)口[d]-(內節點)口[h]-(葉節點)0[i]  
                                    -(葉節點)0[j]  
第0階、第1階、第2階、第3階  
```
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
*二元樹分：*  
嚴格二元樹：只有0、2節點  
全滿二元樹：每層內節點都是2，葉節點都是滿的  
非嚴謹二元樹：有0、1、2節點  
![image](https://github.com/TMDzzzUseless/java-structure-learing/blob/c93757fdbd619723bf842db756189057de35bc65/READIMG/3%E7%A8%AE%E4%BA%8C%E5%85%83%E6%A8%B9.jpg)
*二元搜尋樹：*     
二元搜尋樹是指說，符合二元樹的特性，且每個節點都符合特定條件。  
EX:  
每個節點左邊的值都小於右邊的  
![image](https://github.com/TMDzzzUseless/java-structure-learing/blob/617778a3e9ca41edd74e167d6a3ec76ed6c75107/READIMG/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9.jpg)

樹有可能退化成鏈結，因為只有一邊有節點  
樹是由根、內節點、業節點(data)與連接點(link)所組成  
*一般樹操作*  
createTree(node root)  
insertNode(node parent , node newNode)  
remove(node x)  
removeSubtree(node sub tree Root)  
*一般樹轉二元樹*  
![image](https://github.com/TMDzzzUseless/java-structure-learing/blob/bdfc5607d5c0253275182a3279672238b11a41d7/READIMG/%E4%B8%80%E8%88%AC%E6%A8%B9%E8%BD%892%E5%85%83%E6%A8%B9.jpg)
***二元樹搜尋***
上方圖為例(上方為最左邊)
**橫向深度查詢**
層序追蹤，依照二元樹，由每層由左而右向下搜尋。 
ABCEFGDIH  
**縱向深度搜尋**  
前序追蹤，依照二元樹，由最上層最左節點向下搜尋，結束回到最後節點再向左搜尋。 
ABEFICGDH  
***中序追蹤***
先拜訪最左子樹後，找到上一祖先節點的最下方子孫最左邊，依照最左節點依次訪問。  
EBIFAGCHD  
***後序追蹤***
先拜訪最下層左子樹，在拜訪最下層右子樹，最後才拜訪根。
IEFBHGDCA  
***樹的簡單表示法***
A(B(E,F(I)),C(G,D(H)))  
***霍曼夫編碼***  
這是利用文章出現英文單字次數進行分類，這分類產生的編碼  
採2元樹，次數越多，越接近根，以達到降低文件容量(比ASCII編碼)  
***決策數***  
決策數是一個由2種條件判斷是否的一種Z分法去表示  
樹的深度越深，表示樹的模型越複雜  
***樹的推積***  
有最小堆積法、最大堆積法兩種  
![image](https://github.com/TMDzzzUseless/java-structure-learing/blob/3de2150768b4ba0dfc9308c1fd028f9e8cc38a93/READIMG/%E5%A0%86%E7%A9%8D%E5%9C%96.JPG)  
