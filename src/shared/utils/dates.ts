export const dates = () => {};

type variables = string | boolean | number | bigint | null | undefined | unknown | never | any;

type arrays = Array<string>

type obj = {
    pro: {
        pser: boolean;
    }
    fn: (arg: unknown) => boolean;
}

type UnionTypes = string | undefined;

type UnionArray = Array<string | undefined>;

type LoadingState = 'unknown' | 'loading' | 'success' | 'error';

type Color = 'brown' | 'black' | 'red';

type Animal = {
    tail: Color;
    pee: () => void;
}

type Man = {
    gun: boolean;
    drink: () => void;
}

const animal = {
    tail: 'brown',
    pee: console.log
}

type typedA = Animal & Man;

type A = unknown extends boolean
    ? Animal
    : Man;

console.log(typeof null); // object

const b: Animal = {
    tail: 'brown',
    pee: alert,
}

if (animal.tail) {
    animal.pee();
}

const manOrAnimal = (arg: Man | Animal) => {
    // if Animal pee()
    // if Man drink()
    console.log(arg)

    if ('tail' in arg) {
        arg.pee();

        return arg;
    }
}

