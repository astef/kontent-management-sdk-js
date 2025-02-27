export namespace EnvironmentModels {
    export class EnvironmentCloningStateModel {
        constructor(
            public cloningState: string
        ) { }
    }

    export interface IModifyEnvironmentData {
        op: 'rename_environment';
        value: string;
    }

    export class EnvironmentModel {
        constructor(
            public id: string,
            public name: string,
            public isProduction: boolean
        ) { }
    }

    export interface ICloneEnvironmentData {
        name: string;
        roles_to_activate?: string[];
    }

    export class CloneEnvironmentModel {
        constructor(
            public id: string,
            public managementApiKey: string,
            public deliveryPreviewApiKey: string,
            public securedDeliveryApiKey: string,
        ) { }
    }

    export interface IMarkEnvironmentAsProductionData {
        enable_webhooks: boolean;
    }
}
