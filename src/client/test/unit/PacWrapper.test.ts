/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { expect } from "chai";
import { IPacInterop, IPacWrapperContext, PacArguments, PacWrapper } from "../../pac/PacWrapper";
import { NoopTelemetryInstance } from "../../telemetry/NoopTelemetry";
import { ITelemetry } from "../../telemetry/ITelemetry";

class MockContext implements IPacWrapperContext {
    public get globalStorageLocalPath(): string { return ""; }
    public get telemetry(): ITelemetry { return NoopTelemetryInstance; }
    public get automationAgent(): string { return "powerplatform-vscode-tests/0.1.0-dev"; }
}

class MockPacInterop implements IPacInterop {
    public executeReturnValue = "";

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async executeCommand(args: PacArguments): Promise<string> {
        return this.executeReturnValue;
    }

    public exit(): void {
        // no-op
    }

}

describe('PacWrapper', () => {
    it('AuthList parses correctly', async () => {
        const interop = new MockPacInterop();
        interop.executeReturnValue = "{\"Status\":\"Success\",\"Errors\":[],\"Information\":[\"Input commands: [\\\"auth\\\",\\\"list\\\"]\",\"Profiles (* indicates active):\"],\"Results\":[{\"Index\":1,\"IsActive\":true,\"Kind\":\"CDS\",\"Name\":\"cctest\",\"Resource\":\"https://contoso.example.com\",\"User\":\"bob@contoso.com\",\"CloudInstance\":\"Public\"}]}";
        const wrapper = new PacWrapper(new MockContext, interop);

        const result = await wrapper.authList();
        expect(result.Status === "Success");
        expect(result.Errors.length === 0);
        expect(result.Information.length > 0);
        expect(result.Results && result.Results.length === 1 && result.Results[0].User === "bob@contoso.com").to.be.true;
    });
});
