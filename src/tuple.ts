type TupleToObject<T extends ReadonlyArray<any>> = {
  // [key in T[number]]: key
  [key in T[number]]: key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
