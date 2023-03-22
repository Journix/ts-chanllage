export type Includes<T extends any[], U> =  U extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`