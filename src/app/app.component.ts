import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

import {
  DisplayGrid,
  Draggable,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from "angular-gridster2";
interface Safe extends GridsterConfig {
  draggable: Draggable;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  options: Safe;
  dashboard: Array<GridsterItem>;

  static eventStart(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent
  ) {
    console.info("eventStart", item, itemComponent, event);
  }

  static eventStop(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent
  ) {
    console.info("eventStop", item, itemComponent, event);
  }

  static overlapEvent(
    source: GridsterItem,
    target: GridsterItem,
    grid: GridsterComponent
  ) {
    console.log("overlap", source, target, grid);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: "gridster-item-content",
        ignoreContent: false,
        dragHandleClass: "drag-handler",
        stop: AppComponent.eventStop,
        start: AppComponent.eventStart,
        dropOverItems: false,
        dropOverItemsCallback: AppComponent.overlapEvent
      },
      resizable: {
        enabled: true
      },
      pushDirections: { north: true, east: true, south: true, west: true },
      ignoreMarginInRow: false,
      fixedColWidth: 105,
      fixedRowHeight: 105
    };

    this.dashboard = [
      {
        cols: 1,
        rows: 1,
        y: 0,
        x: 0,
        hasContent: true,
        dragEnabled: true,
        resizeEnabled: true
      }
      // { cols: 2, rows: 2, y: 0, x: 2, hasContent: true }
      // { cols: 1, rows: 1, y: 0, x: 4 },
      // { cols: 1, rows: 1, y: 2, x: 5 },
      // { cols: 1, rows: 1, y: 1, x: 0 },
      // { cols: 1, rows: 1, y: 1, x: 0 },
      // {
      //   cols: 2,
      //   rows: 2,
      //   y: 3,
      //   x: 5,
      //   minItemRows: 2,
      //   minItemCols: 2,
      //   label: "Min rows & cols = 2"
      // },
      // {
      //   cols: 2,
      //   rows: 2,
      //   y: 2,
      //   x: 0,
      //   maxItemRows: 2,
      //   maxItemCols: 2,
      //   label: "Max rows & cols = 2"
      // },
      // {
      //   cols: 2,
      //   rows: 1,
      //   y: 2,
      //   x: 2,
      //   dragEnabled: true,
      //   resizeEnabled: true,
      //   label: "Drag&Resize Enabled"
      // },
      // {
      //   cols: 1,
      //   rows: 1,
      //   y: 2,
      //   x: 4,
      //   dragEnabled: false,
      //   resizeEnabled: false,
      //   label: "Drag&Resize Disabled"
      // },
      // { cols: 1, rows: 1, y: 2, x: 6 }
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
