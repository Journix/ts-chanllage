export type MyExclude<T, U> = T extends U ? never : T


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'`

type Result1 = Exclude<'a' | 'b' | 'c', 'a' | 'f'>