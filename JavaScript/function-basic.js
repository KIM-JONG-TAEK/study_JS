// Don't give up
// �������� ������?

// �Լ� ����
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// �Լ� ȣ��
// doSomething(add);

const addFun = add;
console.log(add);
addFun(1, 2);

const result = add(1, 2);
console.log(result);






