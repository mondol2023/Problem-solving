#include <bits/stdc++.h>

using namespace std;


int main()
{
    int i, n, temp;
    cin >> &n ;

    int a[n];

    for(i=0 ; i<n ; i++)
    {
        cin >> &a[i];
    }

    for(i=0; i<n/2 ;i++)
    {
        temp = a[i];
        a[i] = a[n-1-i];
        a[n-1-i] = temp;
    }
    for(i=0 ; i<n ; i++)
    {
        cout << a[i];
    }
    return 0;
}
