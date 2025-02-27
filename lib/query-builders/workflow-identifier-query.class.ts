import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ContentManagementQueryService } from '../services';

export class WorkflowIdentifierQuery<TResult> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        protected buildResult: (
            config: IManagementClientConfig,
            queryService: ContentManagementQueryService,
            identifier: Identifiers.WorkflowIdentifier
        ) => TResult
    ) {}

    /**
     * Id identifier
     * @param id If of the workflow
     */
    byWorkflowId(id: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Id, id)
        );
    }

    /**
     * Codename identifier
     * @param codename codename of the workflow
     */
    byWorkflowCodename(codename: string): TResult {
        return this.buildResult(
            this.config,
            this.queryService,
            new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Codename, codename)
        );
    }
}
