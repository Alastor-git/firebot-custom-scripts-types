type EffectRunnerOutput = {
    success: boolean;
    stopEffectExecution: boolean;
    outputs: Record<string, any>;
} | null // When sending effects to a queue

type ProcessEffectsRequest = {
    trigger: any;
    effects: any;
}

export type EffectRunner = {
    /**
     * Runs effects from the "effect-list" HTML element.
     * @param processEffectsRequest
     */
    processEffects: (processEffectsRequest: ProcessEffectsRequest) => EffectRunnerOutput
}
