const tarefas = [];

$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const insereItem = document.getElementById('adicionar-tarefas');

        if (tarefas.includes(insereItem.value)){
            alert(`A tarefa ${insereItem.value} já foi adicionada`);
        } else {
            tarefas.push(insereItem.value);
            const novoItem = $(`<li>${insereItem.value}</li>`);
            novoItem.appendTo('ul');

            novoItem.on('click', function(){
                $(this).toggleClass('concluido');
            })
        };
        insereItem.value = '';
    }) 
})