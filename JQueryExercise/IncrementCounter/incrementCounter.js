function increment(selector) {
    let container = $(selector);

    let textAreaFragment = $('<textarea>');
    textAreaFragment.val(0);
    textAreaFragment.addClass('counter');
    textAreaFragment.attr('disabled',true);

    let incrementBtn = $('<button class="btn" id="incrementBtn">Increment</button>');
    let addBtn = $('<button class="btn" id="addBtn">Add</button>');

    let ul = $('<ul>');
    ul.addClass('results');

    container.append(textAreaFragment);
    container.append(incrementBtn);
    container.append(addBtn);
    container.append(ul);

    let textArea = $('.counter');
    let textAreaValue = textArea.val();

    $('#incrementBtn').on('click', () => textArea.val(++textAreaValue));

    addBtn.on('click', ()=>{
        let li = $(`<li>${textAreaValue}</li>`);
        li.appendTo(ul);
    });
}