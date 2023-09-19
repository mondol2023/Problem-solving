#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int  i, j , t ;
     string S , s1 = "", s2 = "";
    cin >> t ;
    while (t--)
    {
        s1 = "", s2 = "";
        cin >> S ;


        j = S.size();

        for(i = 0; i< j ;i++)
        {
            if(i % 2 == 0)
            {
                s2 = s2+S[i];
            }
            else
            {
                s1 = s1 + S[i];
            }
        }
        S = "";
        cout << s2 << " " << s1 << endl ;
        }

    return 0;
}
