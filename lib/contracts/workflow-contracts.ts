import { SharedContracts } from './shared-contracts';

export namespace WorkflowContracts {
    export interface IWorkflowStepContract {
        id: string;
        name: string;
        codename: string;
        transitions_to: string[];
    }

    export type IListWorkflowStepsResponseContract = IWorkflowStepContract[];

    export type IListWorkflowsResponseContract = IWorkflowContract[];

    export type IAddWorkflowContract = IWorkflowContract;

    export type IUpdateWorkflowContract = IWorkflowContract;

    export interface IWorkflowScopeContract {
        content_types: SharedContracts.IReferenceObjectContract[];
    }

    export interface IWorkflowStepTransitionsToContract {
        step: SharedContracts.IReferenceObjectContract;
    }

    export interface IWorkflowPublishedStepContract {
        id: string;
        name: string;
        codename: string;
        create_new_version_role_ids: string[];
        unpublish_role_ids: string[];
    }

    export interface IWorkflowArchivedStepContract {
        id: string;
        name: string;
        codename: string;
        role_ids: string[];
    }

    export interface IWorkflowStepNewContract {
        id: string;
        name: string;
        codename: string;
        color: string;
        transitions_to: IWorkflowStepTransitionsToContract[];
        role_ids: string[];
    }

    export interface IWorkflowContract {
        id: string;
        name: string;
        codename: string;
        scopes: IWorkflowScopeContract[];
        steps: IWorkflowStepNewContract[];
        published_step: IWorkflowPublishedStepContract;
        archived_step: IWorkflowArchivedStepContract;
    }
}
