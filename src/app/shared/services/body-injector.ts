import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BodyInjectorService {

  constructor(private appRef: ApplicationRef) { }

  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElemente(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElemente(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}
