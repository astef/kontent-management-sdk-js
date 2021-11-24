import { SharedModels } from '../shared/shared-models';
import { ElementContracts } from '../../contracts';

export namespace ElementModels {
    export type ElementMode = 'single' | 'multiple';

    export type ElementType =
        | 'text'
        | 'rich_text'
        | 'number'
        | 'multiple_choice'
        | 'date_time'
        | 'asset'
        | 'modular_content'
        | 'taxonomy'
        | 'url_slug'
        | 'guidelines'
        | 'snippet'
        | 'custom'
        | 'subpages';

    export class ContentItemElement implements SharedModels.IBaseModel<ElementContracts.IContentItemElementContract> {
        public element!: SharedModels.ReferenceObject;
        public value?: string | number | SharedModels.ReferenceObject[];
        public searchableValue?: string;
        public mode?: 'autogenerated' | 'custom';
        public _raw!: ElementContracts.IContentItemElementContract;

        constructor(data: {
            element: SharedModels.ReferenceObject;
            value?: string | number | SharedModels.ReferenceObject[];
            searchableValue?: string;
            mode?: 'autogenerated' | 'custom';
            _raw: ElementContracts.IContentItemElementContract;
        }) {
            Object.assign(this, data);
        }
    }

    export class ContentItemElementComponent
        implements SharedModels.IBaseModel<ElementContracts.IContentItemElementComponent>
    {
        public id!: string;
        public type!: SharedModels.ReferenceObject;
        public elements!: ContentItemElementWithComponents[];
        public _raw!: ElementContracts.IContentItemElementComponent;

        constructor(data: {
            id: string;
            type: SharedModels.ReferenceObject;
            elements: ContentItemElementWithComponents[];
            _raw: ElementContracts.IContentItemElementComponent;
        }) {
            Object.assign(this, data);
        }
    }

    export class ContentItemElementWithComponents {
        public element!: SharedModels.ReferenceObject;
        public value!: string | number | SharedModels.ReferenceObject[];
        public components!: ContentItemElementComponent[];

        constructor(data: {
            element: SharedModels.ReferenceObject;
            value: string | number | SharedModels.ReferenceObject[];
            components: ContentItemElementComponent[];
        }) {
            Object.assign(this, data);
        }
    }

    export interface IElementData {
        id: string;
        name?: string;
        codename: string;
        type: ElementType;
        guidelines: string;
    }

    export interface IMultipleChoiceOptionData {
        name: string;
    }

    export interface IMultipleChoiceElementData extends IElementData {
        options: IMultipleChoiceOptionData[];
        mode: ElementMode;
    }
}
