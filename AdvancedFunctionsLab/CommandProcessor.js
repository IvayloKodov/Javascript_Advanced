function processor(commands) {
    let text = '';

    function process(command, argument) {
        switch (command) {
            case 'append':
                text += argument;
                break;
            case 'removeStart':
                text = text.substr(Number(argument));
                break;
            case 'removeEnd':
                text = text.substr(0, text.length - Number(argument));
                break;
            case 'print':
                console.log(text);
                break;
        }
    }

    for (let commandArgs of commands) {
        [command, arg] = commandArgs.split(' ');

        process(command, arg);
    }
}

processor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);