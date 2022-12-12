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
