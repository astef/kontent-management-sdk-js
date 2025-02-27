import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-list-webhooks.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('List webhooks', () => {
    let response: WebhookResponses.WebhookListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listWebhooks().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listWebhooks().getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/webhooks`);
    });

    it(`response should be instance of WebhookListResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.WebhookListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`webhook properties should be mapped`, () => {
        expect(response.data.webhooks.length).toBeGreaterThan(0);

        for (const webhook of response.data.webhooks) {
            const originalItem = responseJson.find((m) => m.id === webhook.id);

            if (!originalItem) {
                throw Error(`Original webhook with id '${webhook.id}' was not found`);
            }

            expect(webhook.secret).toEqual(originalItem.secret);
            expect(webhook.name).toEqual(originalItem.name);
            expect(webhook.lastModified).toEqual(
                originalItem.last_modified ? new Date(originalItem.last_modified) : undefined
            );
            expect(webhook.url).toEqual(originalItem.url);

            expect(webhook.triggers.deliveryApiContentChanges).toEqual(jasmine.any(Array));
            expect(webhook.triggers.workflowStepChanges).toEqual(jasmine.any(Array));

            for (const trigger of webhook.triggers.deliveryApiContentChanges) {
                expect(trigger).toEqual(jasmine.any(WebhookModels.WebhookDeliveryApiContentChanges));
                expect(trigger.type).toBeDefined();
            }

            for (const trigger of webhook.triggers.workflowStepChanges) {
                expect(trigger).toEqual(jasmine.any(WebhookModels.WebhookWorkflowStepChanges));
                expect(trigger.type).toBeDefined();

                for (const transition of trigger.transitionsTo) {
                    expect(transition).toEqual(jasmine.any(WebhookModels.WebhookTransitionsTo));
                    expect(transition.id).toBeDefined();
                }
            }
        }
    });
});
