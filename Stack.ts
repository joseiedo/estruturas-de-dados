interface IStack<T> {
	push(item: T): void;
	pop(): T | undefined;
	peek(): T | undefined;
	search(obj: T): number;
	size(): number;
}

class Stack<T> implements IStack<T> {
	private items: T[] = [];
	private capacity: number;

	constructor(capacity: number = Infinity) {
		this.capacity = capacity;
	}

	push(item: T): void {
		if (this.size() === this.capacity) {
			throw Error(
				"Stack atingiu a sua capacidade máxima. Não é possivel adicionar mais itens"
			);
		} else {
			this.items = [...this.items, item];
		}
	}

	pop(): T | undefined {
		return this.items.pop();
	}

	peek(): T | undefined {
		return this.items[this.items.length - 1];
	}

	search(obj: T): number {
		const i = this.items.lastIndexOf(obj);
		return this.items.length - i <= this.items.length
			? this.items.length - i
			: -1;
	}

	size(): number {
		return this.items.length;
	}
}

// Push - Adiciona um objeto na última posição
console.log("--------- PUSH ----------");

const stack = new Stack<string>();
stack.push("1");
stack.push("4");
stack.push("2");
stack.push("3");

console.log(stack);

// Pop - Remove o objeto na última posição e o retorna
console.log(" ");
console.log("---------- POP -----------");

const stack2 = new Stack<string>();
stack2.push("4");
stack2.push("2");
stack2.push("3");

console.log(stack2);
const lastItem = stack2.pop();

console.log(lastItem);
console.log(stack2);

// PEEK - Retorna o último objeto da lista sem remover
console.log(" ");
console.log("--------- PEEK ----------");

const stack3 = new Stack<string>();
stack3.push("uva");
stack3.push("pêra");
stack3.push("maçã");
console.log(stack3);

const lastItem2 = stack3.peek();
console.log(lastItem2);
console.log(stack3);

// SEARCH - Retorna a posição do objeto (não é o index) como se fosse a ordem em que seria removido. Retorna a posição em que será removido.
console.log(" ");
console.log("-------- SEARCH ---------");

const stack4 = new Stack<string>();
stack4.push("joão");
stack4.push("ana");
stack4.push("maria");
console.log(stack4);

const searchedItemPosition = stack4.search("maria");
console.log(searchedItemPosition); // retorna 1 porque tá no topo da stack.
