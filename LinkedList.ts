class myNode<T> {
	public value: T | undefined;
	public next: myNode<T> | null;
	public prev: myNode<T> | null;
	constructor(value?: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList<T> {
	public head: myNode<T> | null = null;
	public tail: myNode<T> | null = null;
	private length: number = 0;

	constructor(value?: T) {
		if (value) {
			const node = new myNode<T>(value);
			this.head = node;
			this.tail = node;
			this.length = 1;
		}
	}

	// Vai adicionar o valor para o final da lista (como em uma stack)
	push(value: T): void {
		const node = new myNode(value);

		if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;
			this.length = 1;
			return;
		}

		if (this.tail) {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			this.length++;
		}
	}

	// Vai remover o valor final da lista (como em uma stack ou queue)
	pop() {
		if (!this.tail || !this.head) {
			return undefined;
		}

		let node = null;

		if (this.tail.prev) {
			node = this.tail;
			this.tail = this.tail.prev;
			this.tail.next = null;
			node.prev = null;
		} else {
			node = this.tail;
			this.head = null;
			this.tail = null;
		}

		this.length = this.length - 1;
		return node;
	}

	// remove o elemento da primeira posição (head)
	poll() {
		if (!this.tail || !this.head) {
			return undefined;
		}

		let node;
		if (this.head.next) {
			node = this.head;
			this.head = this.head.next;
			this.head.prev = null;
			node.next = null;
		} else {
			node = this.head;
			this.head = null;
			this.tail = null;
		}

		this.length--;
		return node;
	}

	size(): number {
		return this.length;
	}
}
