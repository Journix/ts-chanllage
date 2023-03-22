type ExampleType = Promise<string>

export type MyAwaited<T> = T extends PromiseLike<infer U> ? U : never

type Result = MyAwaited<ExampleType> // string