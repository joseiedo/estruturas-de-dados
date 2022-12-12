interface IQueue<T> {
	offer(obj: T): void;
	poll(): T | undefined;
	peek(): T | undefined;
	size(): number;
}

class Queue<T> implements IQueue<T> {
	private items: T[] = [];
	private capacity: number;

	constructor(capacity: number = Infinity) {
		this.capacity = capacity;
	}

	offer(item: T): void {
		if (this.size() === this.capacity) {
			throw Error(
				"Stack atingiu a sua capacidade máxima. Não é possivel adicionar mais itens"
			);
		} else {
			this.items = [...this.items, item];
		}
	}

	poll(): T | undefined {
		return this.items.shift();
	}

	peek(): T | undefined {
		return this.items[0];
	}

	size(): number {
		return this.items.length;
	}
}

// Push - Adiciona um objeto na última posição (tail)
console.log("--------- PUSH ----------");

const queue = new Queue();
queue.offer("Mark");
queue.offer("John");
queue.offer("Karen");
queue.offer("Mac");
console.log(queue);

// Poll - remove o elemento que esta no head da queue (primeira posição) e retorna ele
console.log(" ");
console.log("--------- POLL -----------");

const queue2 = new Queue();
queue2.offer("Mark");
queue2.offer("John");
queue2.offer("Karen");
queue2.offer("Mac");
console.log(queue);

const firstInLine = queue2.poll();
console.log(firstInLine);
console.log(queue2);

// peek - retorna o objeto que está no head sem remover ele
console.log(" ");
console.log("--------- PEEK -----------");
const queue3 = new Queue();
queue3.offer("Mark");
queue3.offer("John");
queue3.offer("Karen");
queue3.offer("Mac");
console.log(queue);

const firstInLine2 = queue3.poll();
console.log(firstInLine2);

console.log(queue);
