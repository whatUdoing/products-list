import { IFeatureService, TFeatureInitializerClass } from './features_management/feature_management_types';
import { FeaturesManager } from './features_management/feature_manager/features_manager';

export class SetupApp {
    #featuresManager = new FeaturesManager();

    public initFeature(initializerClass: TFeatureInitializerClass): void {
        this.#featuresManager.registerFeature(initializerClass);
    }

    public getService<T extends IFeatureService>(serviceName: string): T {
        return this.#featuresManager.appContainer.get(serviceName);
    }
}
