import { SharedContracts } from '../../contracts';
import { ElementModels } from './elements.models';

export namespace ContentTypeElements {
    export type RichTextAllowedBlock = 'images' | 'text' | 'tables' | 'components-and-items';
    export type RichTextAllowedTextBlock =
        | 'paragraph'
        | 'heading-one'
        | 'heading-two'
        | 'heading-three'
        | 'heading-four'
        | 'ordered-list'
        | 'unordered-list';
    export type RichTextAllowedFormatting =
        | 'unstyled'
        | 'bold'
        | 'italic'
        | 'code'
        | 'link'
        | 'subscript'
        | 'superscript';
    export type RichTextAllowedTableBlock = 'images' | 'text';
    export type RichTextImageCondition = 'at_most' | 'exactly' | 'at_least';
    export type RichTextallowedImageType = 'adjustable' | 'any';
    export type RichTextMaximumLengthAppliesTo = 'words' | 'characters';

    export interface IElementShared {
        type: ElementModels.ElementType;
        content_group?: SharedContracts.IReferenceObjectContract;
    }

    export interface IContentGroup extends IElementShared {
        name: string;
        external_id?: string;
    }

    export interface IAssetElementData extends IElementShared {
        name: string;
        type: 'asset';
        codename?: string;
        external_id?: string;
        guidelines?: string;
        asset_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        maximum_file_size?: number;
        allowed_file_types?: 'adjustable' | 'any';
        image_width_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        image_height_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        is_required?: boolean;
        is_non_localizable?: boolean;
    }

    export interface ISnippetElementData extends IElementShared {
        snippet: SharedContracts.IReferenceObjectContract;
        type: 'snippet';
        codename: string;
        external_id?: string;
        is_non_localizable?: boolean;
    }

    export interface ICustomElementData extends IElementShared {
        name: string;
        type: 'custom';
        source_url: string;
        json_parameters?: string;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        is_required?: boolean;
        is_non_localizable?: boolean;
        allowed_elements?: SharedContracts.IReferenceObjectContract[];
    }

    export interface IDateTimeElementData extends IElementShared {
        name: string;
        type: 'date_time';
        is_required?: boolean;
        is_non_localizable?: boolean;
        guidelines?: string;
        codename?: string;
        external_id?: string;
        default?: {
            global?: {
                value: 'string';
            };
        };
    }

    export interface IGuidelinesElementData extends IElementShared {
        guidelines: string;
        type: 'guidelines';
        codename?: string;
        external_id?: string;
        is_non_localizable?: boolean;
    }

    export interface ILinkedItemsElementData extends IElementShared {
        item_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        allowed_content_types?: SharedContracts.IReferenceObjectContract[];
        name: string;
        guidelines?: string;
        type: 'modular_content';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
    }

    export interface ISubpagesElementData extends IElementShared {
        item_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        allowed_content_types?: SharedContracts.IReferenceObjectContract[];
        name: string;
        guidelines?: string;
        type: 'subpages';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
    }

    export interface IMultipleChoiceOption {
        name: string;
        codename?: string;
    }

    export interface IMultipleChoiceElementData extends IElementShared {
        mode: 'single' | 'multiple';
        options: IMultipleChoiceOption[];
        name: string;
        type: 'multiple_choice';
        is_required?: boolean;
        is_non_localizable?: boolean;
        external_id?: string;
        guidelines?: string;
        codename?: string;
        default?: {
            global?: {
                value: SharedContracts.IReferenceObjectContract[];
            };
        };
    }

    export interface INumberElementData extends IElementShared {
        name: string;
        type: 'number';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        default?: {
            global?: {
                value: number;
            };
        };
    }

    export interface IRichTextElementData extends IElementShared {
        maximum_text_length?: {
            value: number;
            applies_to: RichTextMaximumLengthAppliesTo;
        };
        maximum_image_size?: number;
        allowed_content_types?: SharedContracts.IReferenceObjectContract[];
        allowed_item_link_types?: SharedContracts.IReferenceObjectContract[];
        image_width_limit?: {
            value: number;
            condition: RichTextImageCondition;
        };
        image_height_limit?: {
            value: number;
            condition: RichTextImageCondition;
        };
        allowed_image_types?: RichTextallowedImageType;
        name: string;
        type: 'rich_text';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        allowed_blocks?: RichTextAllowedBlock[];
        allowed_text_blocks?: RichTextAllowedTextBlock[];
        allowed_formatting?: RichTextAllowedFormatting[];
        allowed_table_blocks?: RichTextAllowedTableBlock[];
        allowed_table_text_blocks?: RichTextAllowedTextBlock[];
        allowed_table_formatting?: RichTextAllowedFormatting[];
    }

    export interface ITaxonomyElementData extends IElementShared {
        taxonomy_group: SharedContracts.IReferenceObjectContract;
        guidelines?: string;
        type: 'taxonomy';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
        term_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        default?: {
            global?: {
                value: SharedContracts.IReferenceObjectContract[];
            };
        };
    }

    export interface ITextElementData extends IElementShared {
        name: string;
        type: 'text';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        maximum_text_length?: {
            value: number;
            applies_to: 'words' | 'characters';
        };
        default?: {
            global?: {
                value: string;
            };
        };
        validation_regex?: {
            is_active: boolean;
            regex: string;
            flags?: string;
            validation_message?: string;
        };
    }

    export interface IUrlSlugElementData extends IElementShared {
        depends_on: {
            element: SharedContracts.IReferenceObjectContract;
            snippet?: SharedContracts.IReferenceObjectContract;
        };
        name: string;
        type: 'url_slug';
        is_required?: boolean;
        is_non_localizable?: boolean;
        codename: string;
        external_id?: string;
        guidelines?: string;
        validation_regex?: {
            is_active: boolean;
            regex: string;
            flags?: string;
            validation_message?: string;
        };
    }

    export interface IElementWithId {
        id: string;
    }

    export interface IAssetElement extends IElementWithId, IAssetElementData {}

    export interface ICustomElement extends IElementWithId, ICustomElementData {}

    export interface IDateTimeElement extends IElementWithId, IDateTimeElementData {}

    export interface IGuidelinesElement extends IElementWithId, IGuidelinesElementData {}

    export interface ILinkedItemsElement extends IElementWithId, ILinkedItemsElementData {}

    export interface ISubpagesElement extends IElementWithId, ISubpagesElementData {}

    export interface IMultipleChoiceElement extends IElementWithId, IMultipleChoiceElementData {}

    export interface INumberElement extends IElementWithId, INumberElementData {}

    export interface IRichTextElement extends IElementWithId, IRichTextElementData {}

    export interface ISnippetElement extends IElementWithId, ISnippetElementData {}

    export interface ITaxonomyElement extends IElementWithId, ITaxonomyElementData {}

    export interface ITextElement extends IElementWithId, ITextElementData {}

    export interface IUrlSlugElement extends IElementWithId, IUrlSlugElementData {}

    export type ContentTypeElementModel =
        | IAssetElement
        | ICustomElement
        | IDateTimeElement
        | IGuidelinesElement
        | ILinkedItemsElement
        | ISubpagesElement
        | IMultipleChoiceElement
        | INumberElement
        | IRichTextElement
        | ISnippetElement
        | ITaxonomyElement
        | ITextElement
        | IUrlSlugElement;
}
