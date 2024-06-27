import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-marks-dialog',
  templateUrl: './marks-dialog.component.html',
  styleUrls: ['./marks-dialog.component.scss']
})
export class MarksDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { marks: number },
    private dialogRef: MatDialogRef<MarksDialogComponent>
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
