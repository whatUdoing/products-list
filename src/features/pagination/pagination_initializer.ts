import { IFeatureInitializer, IFeatureService } from '../../core/features_management/feature_management_types';
import { BaseInitializer } from '../../core/features_management/base_initializer';
import { PaginationService } from './pagination_service';
import { createPaginationStore } from './pagination_store';
import { PaginationInitializerInitProps } from './pagination_types';

export class PaginationInitializer extends BaseInitializer implements IFeatureInitializer {
    public init({ paginationServiceName }: PaginationInitializerInitProps): IFeatureService[] {
        super.init();

        return [
            new PaginationService({
                store: createPaginationStore(),
                serviceName: paginationServiceName,
            }),
        ];
    }
}