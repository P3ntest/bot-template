export function getEnv(name: string): string {
    name = name.toUpperCase();

    const value = process.env[name];

    if (value === undefined) {
        throw new Error(`Env variable ${name} is required.`);
    }

    return value;
}
