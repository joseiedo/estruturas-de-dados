interface Items<T> {
	[index: number]: T | null;
}

class StaticArray<T> {
	protected capacity: number;
	protected size = 0;
	public items: Items<T> = {};

	constructor(capacity: number) {
		this.capacity = capacity;

		for (let i = 0; i < capacity; i++) {
			this.items[i] = null;
		}
	}

	// Adiciona um elemento no fim da lista
	add(Object: T) {
		if (this.size === this.capacity) {
			throw Error(
				"Capacidade máxima atingida. Não é possivel adicionar mais itens."
			);
		}

		this.items[this.size] = Object;
		this.size++;
	}

	// remove o primeiro elemento que for igual ao elemento dado como argumento
	remove(objectToRemove: T): void {
		for (let i = 0; i < this.size; i++) {
			if (this.items[i] === objectToRemove) {
				this.items[i] = null;
				for (let j = i; j < this.size; j++) {
					this.items[j] = this.items[j + 1];
				}
				this.size--;
				this.items[this.size] = null;
				break;
			}
		}
	}

	// retorna o index do primeiro elemento dado como argumento. retorna -1 quando não achar
	indexOf(object: T): number {
		let index = -1;

		for (let i = 0; i < this.size; i++) {
			if (this.items[i] === object) {
				index = i;
				break;
			}
		}

		return index;
	}

	// visual da lista em formato de string.
	toString(): string {
		let items = "";

		if (this.size > 0) {
			for (let i = 0; i < this.size; i++) {
				items += this.items[i] + ", ";
			}
			items = `[${items.substring(0, items.length - 2)}]`;
		} else {
			items = "[]";
		}

		return items;
	}
}
