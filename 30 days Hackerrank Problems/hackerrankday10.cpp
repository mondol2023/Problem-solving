#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

long long convertdecimaltobinary( int n)
{
    int r, binary=0, i=0;
    while( n!=0 )
    {
        r = n%2;
        n=n/2;
        binary = binary + r*i;
        i = i*10;
    }
    return binary;
}


int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));
    long long convert = convertdecimaltobinary(n);
    if (convert>0)
    {
        int i, j;
        for(i=0; i<; i++)
        {
            j=n%10;
            if( j==1 )
            {
                int q++;
            }
            else
            {
                break;
            }
        }
    }
    cout << q <<endl;

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
