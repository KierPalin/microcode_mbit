namespace microcode {    
    export class DataViewSelect extends CursorSceneWithPriorPage {
        private metaDataBtn: Button
        private dataViewBtn: Button
        private graphViewBtn: Button

        constructor(app: App) {
            super(app, function () {app.popScene(); app.pushScene(new Home(this.app))})
        }

        /* override */ startup() {
            super.startup()

            this.metaDataBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "linear_graph",
                ariaId: "Meta Data",
                x: -50,
                y: 30,
                onClick: () => {
                    app.popScene()
                    app.pushScene(new RecordedDataViewer(this.app, 1, DATA_VIEW_DISPLAY_MODE.META_DATA_VIEW))
                },
            })

            this.dataViewBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "edit_program",
                ariaId: "View Data",
                x: 0,
                y: 30,
                onClick: () => {
                    app.popScene()
                    app.pushScene(new RecordedDataViewer(this.app, 1, DATA_VIEW_DISPLAY_MODE.DATA_VIEW))
                },
            })

            this.graphViewBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "largeDisk",
                ariaId: "View Graph",
                x: 50,
                y: 30,
                onClick: () => {
                    app.popScene()
                    app.pushScene(new RecordedDataViewer(this.app, 1, DATA_VIEW_DISPLAY_MODE.GRAPH_VIEW))
                },
            })

            this.navigator.addButtons([this.metaDataBtn, this.dataViewBtn, this.graphViewBtn])
        }

        draw() {
            Screen.fillRect(
                Screen.LEFT_EDGE,
                Screen.TOP_EDGE,
                Screen.WIDTH,
                Screen.HEIGHT,
                0xC
            )

            if (FauxDataLogger.isEmpty) {
                screen.printCenter("No data has been recorded", Screen.HALF_HEIGHT)
                return;
            }

            else {
                screen.printCenter("Recorded Data Options", 5)
                this.metaDataBtn.draw()
                this.dataViewBtn.draw()
                this.graphViewBtn.draw()
            }

            super.draw()
        }
    }
}