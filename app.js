const manager = document.querySelector('#manager')
const list = document.querySelector('#list')
const add = document.querySelector('#add')
const ul = document.querySelector('#dropdown')
const li = document.querySelector('#dropdown li')

let procedimentos = [
    {proc: 'corte', value: 50},
    {proc: 'barba', value: 50},
    {proc: 'sobrancelha', value: 20}
]

add.addEventListener("click", () => {
    ul.classList.toggle('dropdown')
})

for(let i = 0; i < procedimentos.length;i++){
    const li = document.createElement('li')
    li.innerHTML = `<p>${procedimentos[i].proc}</p>
                    <p>${procedimentos[i].value}</p>
                    <p>&times;</p>`
    list.appendChild(li)
}