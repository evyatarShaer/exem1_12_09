const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Mission1(arr)
{
    return arr.filter(num => num % 2 === 0);
}

//console.log(Mission1(array));


const string = 'Mission abba image cat func ball github';

function Mission2(str)
{
    let count = 0;
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length === 4)
        {
            count++;
        }
    }
    return count;
}

//console.log(Mission2(string));



const key = ['a', 'b', 'c', 'd', 'e'];

const value = [1, 2, 3, 4, 5];

function Mission5(keys, values)
{
    let obj = {};
    for (let i = 0; i < keys.length; i++)
    {
        obj[keys[i]] = values[i];
    }
    return obj;
}


//console.log(Mission5(key, value));





function Mission6(n)
{
    let fib = [0, 1];
    for (let i = 2; i <= n; i++)
    {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

//console.log(Mission6(9));


module.exports = {
    Mission1,
    Mission2,
    Mission5,
    Mission6
};

