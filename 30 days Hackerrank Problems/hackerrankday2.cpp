#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

void solve(double meal_cost, int tip_percent, int tax_percent) {

    double tip = (meal_cost*tip_percent/100);
    double tax= (meal_cost*tax_percentage/100);
    cout>>tip;

    int cost = meal_cost + tip +tax;

    return cost;

}

int main()
{


    solve(34.0, 9, 15);

    return 0;
}
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
