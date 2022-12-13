class myNode {
	public val: unknown;
	public next: myNode | null;
	public prev: myNode | null;
	constructor(val?: unknown) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	public head: myNode | null = null;
	public tail: myNode | null = null;
	private length: number = 0;

	constructor(val?: unknown) {
		if (val) {
			const node = new myNode(val);
			this.head = node;
			this.tail = node;
			this.length = 1;
		}
	}

	// Vai adicionar o valor para o final da lista (como em uma stack)
	push(val: unknown): void {
		const node = new myNode(val);

		if (!this.head || !this.tail) {
			this.head = node;
			this.tail = node;
			this.length = 1;
			return;
		}

		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
		this.length++;
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

// um exemplo seguindo o exercício do leetcode
// https://leetcode.com/problems/add-two-numbers/

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(l1: ListNode, l2: ListNode) {
	const l1Arr: number[] = [];
	const l2Arr: number[] = [];
	addNodesToAnArray(l1, l1Arr);
	addNodesToAnArray(l2, l2Arr);

	const sum = sumValuesOfTwoArraysAndReverse(l1Arr, l2Arr);

	const linkedList = new LinkedList();

	sum.forEach((item) => {
		linkedList.push(item);
	});

	return linkedList.head;
}

function sumValuesOfTwoArraysAndReverse(l1Arr: number[], l2Arr: number[]) {
	const value_1 = BigInt(l1Arr.reverse().join(""));
	const value_2 = BigInt(l2Arr.reverse().join(""));

	const sum = value_1 + value_2;

	const reversedValues: string[] = sum.toString().split("").reverse();
	const sumValueArr: number[] = reversedValues.map(Number);
	return sumValueArr;
}

function addNodesToAnArray(l1: ListNode, arr: number[]) {
	arr.push(l1.val);
	if (l1.next) addNodesToAnArray(l1.next, arr);
}

// teste 1
const nodeA = new ListNode(2);
const nodeB = new ListNode(4, nodeA);
const nodeC = new ListNode(3, nodeB);

const nodeD = new ListNode(5);
const nodeE = new ListNode(6, nodeD);
const nodeF = new ListNode(4, nodeE);

// deve retornar [7,0,8]
console.log(addTwoNumbers(nodeC, nodeF));

// teste 2
const node1 = new ListNode(9);
const node2 = new ListNode(9, node1);
const node3 = new ListNode(9, node2);
const node4 = new ListNode(9, node3);
const node5 = new ListNode(9, node4);
const node6 = new ListNode(9, node5);
const node7 = new ListNode(9, node6);

const node8 = new ListNode(9);
const node9 = new ListNode(9, node8);
const node10 = new ListNode(9, node9);
const node11 = new ListNode(9, node10);

// deve retornar [8,9,9,9,0,0,0,1]
console.log(addTwoNumbers(node7, node11));
