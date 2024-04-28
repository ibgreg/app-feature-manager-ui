import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatureToggler } from '../models/feature-toggler';
import { FeatureTogglerService } from '../service/feature-toggler.service';

@Component({
  selector: 'app-feature-toggler',
  standalone: true,
  imports: [
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  templateUrl: './feature-toggler.component.html',
  styleUrl: './feature-toggler.component.scss'
})
export class FeatureTogglerComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private modalService = inject(NgbModal);
  private featureTogglerService = inject(FeatureTogglerService);
  
  featureForm = this.formBuilder.group({
    displayName: ['', []],
    technicalName: ['', [Validators.required]],
    expiresOn: ['', []],
    description: ['', []],
    inverted: [false, []]
  });

  togglersList: FeatureToggler[] = [];

  togglerRequest: FeatureToggler = {};

  ngOnInit(): void {
    this.loadFeatureTogglers();
  }

  openModal(toggler?: FeatureToggler, content?: TemplateRef<any>) {
    if (toggler?.id) {
      this.togglerRequest = toggler;
      this.featureForm.patchValue(this.togglerRequest);
    }
    
    console.log(this.togglerRequest);
    this.modalService.open(content, { size: 'lg' });
  }

  closeModal() {
    this.togglerRequest = {}
    this.featureForm.reset();
    this.modalService.dismissAll();
  }

  saveFeatureToggler() {
    if (this.featureForm.invalid) {
      return;
    }

    console.log(this.togglerRequest);

    
    if (this.togglerRequest?.id) {
      const selectedTogglerId = this.togglerRequest?.id;
      
      this.togglerRequest = this.featureForm.value as FeatureToggler;
      this.togglerRequest.id = selectedTogglerId;
      console.log(this.togglerRequest);    


        this.featureTogglerService.updateFeatureToggler(this.togglerRequest)
          .subscribe({
            next: response => {
              this.loadFeatureTogglers();
              this.closeModal();
            },
            error: (e) => console.error(e),
          });
    } else {
      this.featureTogglerService.createFeatureToggler(this.featureForm.value as FeatureToggler)
        .subscribe({
          next: response => {
            this.loadFeatureTogglers();
            this.closeModal();
          },
          error: (e) => console.error(e),
        });
    }
  }

  archiveFeatureToggler(toggler: FeatureToggler) {
    this.featureTogglerService.archiveFeatureToggler(toggler.id!)
            .subscribe({
              next: response => {
                console.log("Feature archived");
                
                this.loadFeatureTogglers();
                this.closeModal();
              },
              error: (e) => this.closeModal()
            })
  }

  private loadFeatureTogglers() {
    this.featureTogglerService.findAll()
      .subscribe({
        next: response => {
          this.togglersList = response
          console.log(this.togglersList);
          
        }
      });
  }
}
