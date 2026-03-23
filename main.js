let num = prompt('Введите число')

if (isNaN(num)){
    alert('Введите тоько число ')
} else if (num % 2 === 0){
    alert('Четное')
} else {
    alert('Нечетное')
}
