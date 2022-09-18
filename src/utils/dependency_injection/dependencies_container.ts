import { DependencyName, IDependenciesContainer } from './dependencies_container_types';

export class DependenciesContainer implements IDependenciesContainer {
    #dependenciesInstances: Record<DependencyName, any> = {};

    public register(name: DependencyName, dependency: any): void {
        if (this._hasDependencyBeenRegistered(name))
            throw new Error(`A dependency under ${name} name has been registered already`);

        this.#dependenciesInstances[name] = dependency;
    }

    public unregister(name: DependencyName): void {
        if (!this._hasDependencyBeenRegistered(name))
            throw new Error(`No dependency registered under the name ${name}`);
    }

    public get(name: DependencyName): any {
        const instance = this.#dependenciesInstances[name];

        if (instance) return instance;

        throw new Error(`No dependency registered under the name ${name}`);
    }

    private _hasDependencyBeenRegistered(name: DependencyName): boolean {
        return !!this.#dependenciesInstances[name];
    }
}
