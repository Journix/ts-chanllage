type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

export type First<T> = T extends Array<any> ? T[0] : never 

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3