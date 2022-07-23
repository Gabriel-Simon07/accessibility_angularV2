import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/model-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  public modalRef: ModalRef;
  public info = false;

  private form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Gabriel', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required],
      info: false
    })
  }

  public submit(): void {
    if(this.form.invalid) {
      console.log(this.form.value);
      this.modalRef.close();
    }
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
