import { IDependenciesContainer } from '../../../utils/dependency_injection/dependencies_container_types';
import { DependenciesContainer } from '../../../utils/dependency_injection/dependencies_container';
import { IFeaturesManager } from './feature_manager_types';
import { IFeatureInitializer, TFeatureInitializerClass } from '../feature_management_types';

export class FeaturesManager implements IFeaturesManager {
    public appContainer: IDependenciesContainer = new DependenciesContainer();

    #registeredFeatures: Record<string, string[] | null> = {};

    public hasFeatureBeenRegistered(featureName: string): boolean {
        return this.#registeredFeatures[featureName] !== undefined;
    }

    public registerFeature(initializerClass: TFeatureInitializerClass): IFeatureInitializer {
        const featureName = initializerClass.featureName;

        if (this.hasFeatureBeenRegistered(initializerClass.featureName))
            throw Error(`Feature ${featureName} has been registered already.`);

        const initializer = new initializerClass();

        const record = initializer.init() ?? [];

        initializer.onDispose(() => {
            this.unregisterFeature(featureName);
        });

        record.forEach((service) => {
            service.featureName = featureName;

            this.appContainer.register(service.serviceName, service);
        });

        this.#registeredFeatures[featureName] = record.map((service) => service.serviceName) ?? null;

        return initializer;
    }

    public unregisterFeature(featureName: string): void {}
}
