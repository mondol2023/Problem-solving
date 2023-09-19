#include <bits/stdc++.h>

using namespace std;
int main()
{
    int n,count=0,max=0;
    cin >> n;
    while(n>0)
    {
        if(n%2==1)
        {
            count++;
        }
        else
        {
            if(count>max)
            {
                max = count;
            }
            count = 0;
        }
        n/=2;
    }
    if(count>max)
    {
        max = count;
    }
    cout << max <<endl;
    return 0;
}
