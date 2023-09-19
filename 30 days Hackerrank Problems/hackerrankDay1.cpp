#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4, j, sum1;
    double d = 4.0, e, sum2;
    string s = "HackerRank ", t;
    cout<<"insert an integer"<<endl;
    cin>> j;
    cout <<"insert a double number"<<endl;
    cin>>e;
    cout <<"insert a string"<<endl;
    cin>>t;

    sum1= i+j;
    cout<<sum1<<endl;

    sum2=d+e;
    cout<<sum2<<endl;



    cout<<"new string: "<<endl;
    cout<< s+t;


    // Declare second integer, double, and String variables.

    // Read and save an integer, double, and String to your variables.
    // Note: If you have trouble reading the entire string, please go back and review the Tutorial closely.

    // Print the sum of both integer variables on a new line.

    // Print the sum of the double variables on a new line.

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.

    return 0;
}
