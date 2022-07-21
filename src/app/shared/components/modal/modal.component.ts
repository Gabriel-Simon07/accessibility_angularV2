import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { AfterViewInit, ChangeDetectorRef, Component, HostBinding } from "@angular/core";
import { ModalConfig } from "./interfaces/modal-config";

@Component({
 selector: 'app-modal',
 templateUrl: './modal.component.html',
 styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public config: ModalConfig;
}
