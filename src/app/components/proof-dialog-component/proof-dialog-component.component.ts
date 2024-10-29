import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-proof-dialog-component',
  templateUrl: './proof-dialog-component.component.html',
  styleUrls: ['./proof-dialog-component.component.css']
})
export class ProofDialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string; description: string }) {}

  get imageUrl() {
    return this.data.imageUrl;
  }

  get description() {
    return this.data.description;
  }
}
