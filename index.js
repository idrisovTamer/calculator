const inputANode = document.querySelector('.number-a');
const inputBNode = document.querySelector('.number-b');
const selectOperationNode = document.querySelector('.select-operation');
const btnResultNode = document.querySelector('.btn-result');
const outputNode = document.querySelector('.output');

btnResultNode.addEventListener('click', function() {
const a = Number(inputANode.value);
const b = Number(inputBNode.value);
const operation = selectOperationNode.value;

const result = calculate ({a, b, operation});
outputNode.innerHTML = result;
});
 