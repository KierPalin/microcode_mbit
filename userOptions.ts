namespace microcode {
    export type MeasurementOpts = {
        sensorFn: () => number, 
        sensorName: string,
        measurements: number,
        period: number
    };
    
    export type SensorOpts = {
        sensorFn: () => number, 
        sensorName: string,
    };

    // "files": [
    //     "protocol.ts",
    //     "keymap.ts",
    //     "analytics.ts",
    //     "config.ts",
    //     "main.ts",
    //     "accessibility.ts",
    //     "button.ts",
    //     "component.ts",
    //     "assets.ts",
    //     "scene.ts",
    //     "language.ts",
    //     "tiles.ts",
    //     "app.ts",
    //     "sprite.ts",
    //     "cursor.ts",
    //     "home.ts",
    //     "bounds.ts",
    //     "picker.ts",
    //     "affine.ts",
    //     "math.ts",
    //     "screen.ts",
    //     "version.ts",
    //     "fieldeditors.ts",
    //     "navigator.ts",
    //     "cursorscene.ts",
    //     "options.ts",
    //     "tooltips.ts",
    //     "utils.ts",
    //     "jacs.ts",
    //     "liveDataViewer.ts",
    //     "dataRecorder.ts",
    //     "recordedDataViewer.ts",
    //     "sensorSelect.ts",
    //     "measurementConfigSelect.ts",
    //     "fauxDatalogger.ts",
    //     "sceneFactory.ts",
    //     "userOptions.ts"
    // ],
}