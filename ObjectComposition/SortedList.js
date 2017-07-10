function sortedList() {
    return (function () {
        let list = [];

        let size = 0;

        function add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
            this.size++;
        }

        function remove(index) {
            if (index >= 0 && index < list.length) {
                list = list.filter((e, i) => i !== index);
                list.sort((a, b) => a - b);
                this.size--;
            }
        }

        function get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        }

        return {
            add, remove, get, size
        }
    })();
}

let list = sortedList();
list.add(2);
list.add(2);
list.remove(1);
list.remove(0);
console.log(list.size);