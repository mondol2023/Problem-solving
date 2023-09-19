#include <bits/stdc++.h>

using namespace std;



int main()
{
    string S;
    getline(cin, S);
    int i = 0;

    try
    {
        int i = stoi(S);
        throw i;
    }
    catch ( int i )
    {
        cout << i << endl;
    }
    catch (...)
    {
        cout << "Default Exception\n";
    }
    return 0;
}
