import { Constructor } from '../../global_types';

export interface IFeatureInitializer {
    init(props?: any): void | IFeatureService[];

    dispose(): void;

    onDispose(cb: Function): void;
}

export type TFeatureInitializerClass = Constructor<IFeatureInitializer> & { featureName: string };

export interface IFeatureService {
    featureName?: string;

    serviceName: string;
}
