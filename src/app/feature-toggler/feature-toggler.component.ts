import { DecimalPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatureToggler } from '../models/feature-toggler';
import { FeatureTogglerService } from '../service/feature-toggler.service';

@Component({
  selector: 'app-feature-toggler',
  standalone: true,
  imports: [
    DecimalPipe,
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
    inverted: [false, [Validators.required]],
  });

  togglersList: FeatureToggler[] = [];

  ngOnInit(): void {
    this.featureTogglerService.findAll()
            .subscribe({
              next: response => {
                this.togglersList = response
                console.log(this.togglersList);
                
              }
            });
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				//this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				//this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

}
