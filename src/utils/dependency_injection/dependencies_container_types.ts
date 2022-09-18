export interface IDependenciesContainer {
    register(name: DependencyName, dependency: any): void;

    get(name: DependencyName): any;

    unregister(name: DependencyName): void;
}

export type DependencyName = string;
