import { IFeatureInitializer, IFeatureService } from './feature_management_types';

export class BaseInitializer implements IFeatureInitializer {
    public static featureName = 'BaseInitializer';

    #onDisposeFn?: Function;

    public onDispose(cb: Function) {
        this.#onDisposeFn = cb;
    }

    public dispose() {
        if (typeof this.#onDisposeFn === 'function') this.#onDisposeFn();
    }

    public init(props?: any): void | IFeatureService[] {}
}