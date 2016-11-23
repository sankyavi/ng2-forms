//our root app component
import {NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

// Helper component to add dynamic components
@Component({
  selector: 'dcl-wrapper',
  template: `<div #target></div>`
})
export class DclWrapper {
  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() type;
  cmpRef:ComponentRef;
  private isViewInitialized:boolean = false;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
      private cdRef:ChangeDetectorRef) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory)
    // to access the created instance use
    // this.compRef.instance.someProperty = 'someValue';
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
    this.cdRef.detectChanges();
  }
  
  ngOnChanges() {
    this.updateComponent();
  }
  
  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();  
  }
  
  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }    
  }
}

// Dynamically added components
@Component({
  selector: 'c1',
  template: `<h2>c1</h2><input type="text" [(ngModel)]="type"/>`
  
})
export class C1 {
  type = '';
}

@Component({
  selector: 'c2',
  template: `<h2>c2</h2>`
  
})
export class C2 {
}

@Component({
  selector: 'c3',
  template: `<h2>c3</h2>`
  
})
export class C3 {
}

// Use dcl-wrapper component
@Component({
  selector: 'my-tabs',
  template: `
  <h2>Tabs</h2>
  <div *ngFor="let tab of tabs">
    <dcl-wrapper [type]="tab"></dcl-wrapper>
  </div>
`
})
export class Tabs {
  @Input() tabs;
}


@Component({
  selector: 'my-app',
  template: `
  <h2>Hello {{name}}</h2>
  <my-tabs [tabs]="types"></my-tabs>
`
})
export class App {
  // The list of components to create tabs from
  types = [C3, C1, C2, C3, C3, C1, C1];
}

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App, DclWrapper, Tabs, C1, C2, C3],
  entryComponents: [C1, C2, C3],
  bootstrap: [ App ]
})
export class AppModule3 {}