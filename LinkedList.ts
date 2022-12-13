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

	push(value: T): void {
		const node = new myNode(value);

		if (!this.head && !this.tail) {
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

	pop() {
		if (!this.tail && !this.head) {
			return undefined;
		}

		let node = null;
		if (this.length === 1) {
			node = this.tail;
			this.head = null;
			this.tail = null;
		}

		if (this.tail?.prev) {
			node = this.tail;
			this.tail = this.tail.prev;
			this.tail.next = null;
			node.prev = null;
		}

		this.length = this.length - 1;
		return node;
	}

	size(): number {
		return this.length;
	}
}

// const foo = new myNode(1);
// const fish = new myNode("5");

const linkedList = new LinkedList();
linkedList.push("Uva");
linkedList.push("Banana");
linkedList.push("Maçã");
console.table(linkedList);

const node = linkedList.pop();
console.table(node);

console.table(linkedList);
