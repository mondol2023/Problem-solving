#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n, i;
    string s , a, b ;
    map <string, string> phonebook;
    cin >> n ;
    for( i=0; i<n; i++)
    {
        cin >> s >> a ;
        phonebook[s] = a;
    }
    cin >> b ;
    if(phonebook.find(b) == phonebook.end())
    {
        cout << "Not found" <<endl;
    }
    else
    {
        cout << b << "=" << phonebook.at(b);
    }

    return 0;
}
