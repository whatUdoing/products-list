import { TFeatureInitializerClass } from '../feature_management_types';
import { IDependenciesContainer } from '../../../utils/dependency_injection/dependencies_container_types';

export interface IFeaturesManager {
    registerFeature(initializerClass: TFeatureInitializerClass): void;

    hasFeatureBeenRegistered(featureName: string): boolean;

    unregisterFeature(featureName: string): void;

    appContainer: IDependenciesContainer;
}
