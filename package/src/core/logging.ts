export type LogOptions = {
    prefix?: string
}

export const log = (value: unknown, options?: LogOptions) => {
    const prefix = options?.prefix ?? '[LOG]'
    console.log(prefix, value)
}
