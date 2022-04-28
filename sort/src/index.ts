import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([3, 5, 3, 1, 3, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('sjSKdWEs');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(5);
linkedList.add(-8);
linkedList.add(4);
linkedList.add(-1);
linkedList.sort();
linkedList.print();
